import react from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrival from "../components/Products/NewArrival";
import ProductDetail from "../components/Products/ProductDetail";

export default function Home() {
    return (
        <>
            <Hero />
            <GenderCollection/>
            <NewArrival/>
            {/* best seller */}
            <h2 className="text-center text-4xl font-bold mb-4">Best Seller</h2>
            <ProductDetail/>
        </>
    );
}
