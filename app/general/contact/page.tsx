import type { Metadata } from "next";

export const metadata: Metadata={
    title: 'Contact',
    description: 'Our personal contacts',
    keywords: ['About page','Ferdinand','informacion','....']
};


export default function ContactPage(){
    return (
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )
}