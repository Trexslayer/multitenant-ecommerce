import { Suspense } from "react";
import { ProductFilters } from "../components/product-filters";
import { ProductListSkeleton, ProductList } from "../components/product-list";
import { ProductSort } from "../components/product-sort";

interface Props{
    category?: string;
    tenantSlug?: string;
    narrowView?:boolean;
};

export const ProductListView = ({category, tenantSlug,narrowView}:Props)=>{
    return(
        <div className="px-4 lg:px-12 py-8 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 justify-between">
                  <p className="text-2xl font-medium">Curated for you</p>
                  <ProductSort/>
                </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-6 gap-x-12">
            
            {/* Filters - takes 2 columns */}
            <div className="lg:col-span-1 xl:col-span-2">
              <div className="border p-2">
                <ProductFilters/>
              </div>
            </div>
            
            {/* ProductList - takes remaining 4 columns */}
            <div className="lg:col-span-4 xl:col-span-4">
              <Suspense fallback={<ProductListSkeleton narrowView={narrowView} />}>
                <ProductList category={category} tenantSlug={tenantSlug} narrowView={narrowView} />
              </Suspense>
            </div>
        
          </div>
        </div>
    );
}