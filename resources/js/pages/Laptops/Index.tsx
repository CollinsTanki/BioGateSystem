
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { index as laptops } from '@/routes/laptops';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laptops',
        href: laptops().url,
    },
];


export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Laptops" />
            <div>
        
                </div>
          
        </AppLayout>
    );
}
