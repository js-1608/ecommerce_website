import react from "react";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrival from "../components/Products/NewArrival";

export default function Home() {
    return (
        <>
            <Hero />
            <GenderCollection/>
            <NewArrival/>
        </>
    );
}
