import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from 'zod';
import { DEFAULT_LIMIT } from '@/constants';

export const tagsRouter = createTRPCRouter({
    getMany: baseProcedure
        .input(z.object({
            cursor: z.number().default(1),
            limit: z.number().default(DEFAULT_LIMIT),
        }))
        .query(async ({ input }) => {
            const payload = await getPayload({
                config: configPromise,
            });
            const data = await payload.find({
                collection: 'tags',
                page: input.cursor,
                limit: input.limit,
            });
            return data;
        })
})

//7.58