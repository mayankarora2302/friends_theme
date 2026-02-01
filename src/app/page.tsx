'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useProgressStore from '@/store/progressStore';

export default function HomePage() {
    const router = useRouter();
    const isAuthenticated = useProgressStore(state => state.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/home');
        } else {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="loader"></div>
        </div>
    );
}
