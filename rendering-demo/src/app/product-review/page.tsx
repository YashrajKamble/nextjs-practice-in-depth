import { Product } from "@/component/product";
import { Review } from "@/component/review";
import { Suspense } from "react";

export default function ProductView() {
    return <>
        <div>
            <h1>Product Review</h1>

            <Suspense fallback={<p>Loading Product Details......</p>}>
                <Product />
            </Suspense>

            <Suspense fallback={<p>Loading Review Details......</p>}>
                <Review />
            </Suspense>

        </div>
    </>
}