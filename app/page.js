'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/Altair');
  }, [router]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-black">
      <div className="text-white text-lg">Redirecting...</div>
    </div>
  );
};

export default Page;
