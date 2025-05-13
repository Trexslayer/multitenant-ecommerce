import configPromise from '@payload-config';
import { getPayload } from 'payload';

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Category } from '@/payload-types';

export const categoriesRouter = createTRPCRouter({
    getMany: baseProcedure.query(async () => {
        const payload = await getPayload({
            config: configPromise,
        });
        const data = await payload.find({
            collection: 'categories',
            depth: 1,
            pagination: false,
            where: {
                parent: {
                    exists: false,
                },
            },
            sort: 'name',
        });
        const formattedData = data.docs.map((doc) => ({
            ...doc,
            subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
                ...(doc as Category)
            }))
        }));
        return formattedData;
    })
})