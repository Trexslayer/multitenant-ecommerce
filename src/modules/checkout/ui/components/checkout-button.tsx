import { Button } from "@/components/ui/button";
import { useCart } from "../../hooks/use-cart";
import { cn, generateTenantURL } from "@/lib/utils";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

interface Props {
    className?: string;
    hideIfEmpty?: boolean;
    tenatSlug: string;
};

export const CheckoutButton = ({
    className,
    hideIfEmpty,
    tenatSlug,
}:Props)=>{
    const {totalItems}  = useCart(tenatSlug);
    if(hideIfEmpty && totalItems ===0) return null;
    return(
        <Button variant={'elevated'} asChild className={cn("bg-white",className)}>
            <Link href={`${generateTenantURL(tenatSlug)}/checkout`}>
            <ShoppingCartIcon/>{totalItems>0 ? totalItems: "" }
            </Link>
        </Button>
    );
}