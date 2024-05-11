import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricinig Page',
    keywords: ['Pricing Page', 'Pricing mas page', 'Pricing'],
}


export default function PricingPage() {
    return (
        <h1 className="text-7xl">Pricing</h1>
    )
}