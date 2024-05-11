import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page',
    keywords: ['Contact Page', 'Contact mas page', 'ContactMas data'],
}


export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    );
}