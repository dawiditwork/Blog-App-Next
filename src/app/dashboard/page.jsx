'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashboardComp from '../components/DashboardComp';

function DashboardContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'profile';

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSidebar />
      </div>

      {tab === 'profile' && <DashProfile />}
      {tab === 'posts' && <DashPosts />}
      {tab === 'users' && <DashUsers />}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={null}>
      <DashboardContent />
    </Suspense>
  );
}