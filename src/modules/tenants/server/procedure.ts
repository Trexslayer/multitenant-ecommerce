import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { Media, Tenant } from '@/payload-types';

export const tenantsRouter = createTRPCRouter({
    getOne: baseProcedure
        .input(z.object({
            slug: z.string()
        }))
        .query(async ({ input }) => {
            const payload = await getPayload({
                config: configPromise,
            });
            const tenantsData = await payload.find({
                collection: 'tenants',
                depth:1,
                where:{
                    slug:{
                        equals: input.slug,
                    }
                },
                limit:1,
                pagination: false
            });

            const tenant = tenantsData.docs[0];
            if(!tenant){
                throw new TRPCError({code:"NOT_FOUND", message:"Tenant not found"});
            }
            return tenant as Tenant & {image: Media| null};
        })
})

//7.58