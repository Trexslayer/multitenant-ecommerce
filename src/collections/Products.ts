import type { CollectionConfig } from "payload";

export const Products: CollectionConfig={
    slug: "products",
    fields:[
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "price",
            type: "number",
            required: true,
        },
        {
           name: "category",
           type: "relationship",
           relationTo: "categories", 
           hasMany: false,
        },
        {
            name: "tags",
            type: "relationship",
            relationTo: "tags", 
            hasMany: true,
         },
        {
            name: "image",
            type: "upload",
            relationTo: "media",

        },
        {
            name: "cover",
            type: "upload",
            relationTo: "media",

        },
        {
            name: "refundPolicy",
            type: "select",
            options: ["30-days","14-days","7-days","3-days","1-day","no-refund"],
            defaultValue: "30-days",
        }
    ]
}