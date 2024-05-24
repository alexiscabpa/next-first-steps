import type { Metadata } from "next";

export const metadata: Metadata={
    title: 'Pricing',
    description: 'The price is too high',
    keywords: ['About page','Ferdinand','informacion','....']
};


export default function PricingPage(){
    return (
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}