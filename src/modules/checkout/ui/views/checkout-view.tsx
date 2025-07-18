"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../hooks/use-cart";
import { useEffect } from "react";
import { toast } from "sonner";
import { generateTenantURL } from "@/lib/utils";
import { CheckoutItem } from "../components/checkout-items";
import { CheckoutSidebar } from "../components/checkout-sidebar";
import { InboxIcon, LoaderIcon } from "lucide-react";

interface Props{
    tenantSlug: string;
}

export const CheckoutView  = ({tenantSlug}:Props)=>{
    const {productIds, clearAllCarts,removeProduct} = useCart(tenantSlug);
    const trpc = useTRPC();
    const {data,error, isLoading} = useQuery(trpc.checkout.getProducts.queryOptions({
        ids: productIds,
    }));
    
    useEffect(()=>{
        if(error?.data?.code === "NOT_FOUND"){
            clearAllCarts();
            toast.warning("Invalid Products found, cart cleared")
        }

    },[error, clearAllCarts])

    if(isLoading){
        return(
            <div className=" border border-black border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
                <LoaderIcon className="text-muted-foreground animate-spin "/>
            </div>
        );
    }

    if(data?.totalDocs===0 ){
        return(
            <div className=" border border-black border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
                <InboxIcon/>
                <p className="text-base font-medium">No Product found</p>
            </div>
        );
    }
    return(
        <div className="lg:pt-16 pt-4 px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-16">
                <div className="lg:col-span-4">
                    <div className="border rounded-md overflow-hidden bg-white">
                        {data?.docs.map((product,index)=>(
                            <CheckoutItem
                            key={product.id}
                            isLast={index === data.docs.length-1}
                            imageURL = {product.image?.url}
                            name={product.name}
                            productURL={`${generateTenantURL(product.tenant.slug)}/products/${product.id}`}
                            tenantURL={`${generateTenantURL(product.tenant.slug)}`}
                            tenantName={product.tenant.name}
                            price={product.price}
                            onRemove={()=>removeProduct(product.id)}
                            />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <CheckoutSidebar
                    total={data?.totalPrice || 0}
                    onCheckout={()=>{}}
                    isCanceled={false}
                    isPending={false}
                    />
                </div>
            </div>
        </div>
    )
}