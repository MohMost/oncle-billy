'use client';

import { Sidebar, clientNavItems } from '@/components/navigation/Sidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar items={clientNavItems} onLogout={handleLogout} title="Tableau de Bord" />
      <main className="flex-1 overflow-y-auto md:ml-0">
        <div className="p-4 md:p-8">{children}</div>
      </main>
    </div>
  );
}
