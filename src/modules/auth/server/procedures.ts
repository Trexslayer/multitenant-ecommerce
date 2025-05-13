import configPromise from '@payload-config';
import { getPayload } from 'payload';
import {headers as getHeaders} from 'next/headers'
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from '@trpc/server';
import { loginSchema, registerSchema } from '../schema';
import { generateAuthCookie } from '../utils';

export const authRouter = createTRPCRouter({
    session: baseProcedure.query(async () => {
        const payload = await getPayload({
            config: configPromise,
        });
        const headers = await getHeaders();
        const session = await payload.auth({
            headers
        });
        return session;
    }),
    register: baseProcedure
    .input(registerSchema)
    .mutation(async({input})=>{
        const payload = await getPayload({
            config: configPromise,
        });
        const existingData = await payload.find({
            collection: "users",
            limit:1,
            where:{
                username:{
                    equals:input.username,
                },
            },
        });

        const existingUser = existingData.docs[0];
        if(existingUser){
            throw new TRPCError({
                code: "BAD_REQUEST",
                message:"Username already taken"
            })
        }

        const tenant = await payload.create({
            collection: "tenants",
            data:{
                name: input.username,
                slug: input.username,
                stripeAccountId: "test",
            }
        })

        await payload.create({
            collection:"users",
            data:{
                email:input.email,
                username:input.username,
                password:input.password,
                tenants:[
                    {
                        tenant: tenant.id,
                    },
                ],
            },
        });
        const data = await payload.login({
            collection: "users",
            data: {
                email: input.email,
                password: input.password,
            },
        });

        if(!data.token){
            throw new TRPCError({
                code: "UNAUTHORIZED",
                message: "Failed to login",
            });
        }
        await generateAuthCookie({prefix: payload.config.cookiePrefix, value:data.token});
    }),
    login: baseProcedure
    .input(loginSchema)
    .mutation(async({input})=>{
        const payload = await getPayload({
            config: configPromise,
        });
        const data = await payload.login({
            collection: "users",
            data: {
                email: input.email,
                password: input.password,
            },
        });

        if(!data.token){
            throw new TRPCError({
                code: "UNAUTHORIZED",
                message: "Failed to login",
            });
        }
        await generateAuthCookie({prefix: payload.config.cookiePrefix, value:data.token});
        return data
    }),
})

//5.43.46