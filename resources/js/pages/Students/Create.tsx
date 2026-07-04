
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { index as students } from '@/routes/students';
import { Head } from '@inertiajs/react';
import {Button} from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add New Student',
        href: students().url,
    },
];



import { useForm } from '@inertiajs/react';

export default function CreateStudent() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/students'); // Make sure this route exists in your backend
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add New Student"/>
            <div className='m-4 max-w-md mx-auto bg-white p-6 rounded shadow'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block mb-1 font-medium'>Name</label>
                        <input
                            type='text'
                            className='w-full border px-3 py-2 rounded'
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && <div className='text-red-500 text-sm'>{errors.name}</div>}
                    </div>
                    <div className='mb-4'>
                        <label className='block mb-1 font-medium'>Email</label>
                        <input
                            type='email'
                            className='w-full border px-3 py-2 rounded'
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                        {errors.email && <div className='text-red-500 text-sm'>{errors.email}</div>}
                    </div>
                    <Button type='submit' disabled={processing}>
                        Add Student
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
