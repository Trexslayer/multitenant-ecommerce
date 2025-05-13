import { cn, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props{
    isLast?: boolean;
    imageURL?: string| null;
    name: string;
    productURL: string;
    tenantURL: string;
    tenantName: string;
    price: number;
    onRemove: ()=> void;
};

export const CheckoutItem = ({
    isLast,
    imageURL,
    name,
    productURL,
    tenantURL,
    tenantName,
    price,
    onRemove
}:Props)=>{
    return(
        <div 
        className={cn("grid grid-cols-[8.5rem_1fr_auto] gap-4 pr-4 border-b ", isLast && "border-b-0")}
        >
            <div className="overflow-hidden border-r">
                <div className="relative aspect-square h-full">
                    <Image
                    src={imageURL || "/placeholder.png"}
                    alt={name}
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
            <div className="py-4 flex flex-col justify-between">
                <div className="">
                    <Link href={productURL}>
                    <h4 className="font-bold underline">{name}</h4>
                    </Link>
                    <Link href={tenantURL}>
                    <p className=" font-bold underline">{tenantName}</p>
                    </Link>
                </div>
            </div>
            <div className=" py-4 flex flex-col justify-between">
                <p className="font-medium">
                    {formatCurrency(price)}
                </p>
                <button className=" underline font-medium cursor-pointer" onClick={onRemove} type="button">Remove</button>
            </div>
        </div>
    );
};