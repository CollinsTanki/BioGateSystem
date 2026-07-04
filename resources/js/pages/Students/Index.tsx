
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { index as students } from '@/routes/students';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: students().url,
    },
];



export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Students" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Students</h1>
                    <Button asChild>
                        <Link href={students().url}>Add New Student</Link>
                    </Button>
                </div>
                <div className="bg-white rounded-lg shadow">
                    {/* Table will go here later */}
                    <div className="p-4">
                        <p className="text-gray-500">No students found.</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
