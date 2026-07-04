'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  onLogout?: () => void;
  title?: string;
  isAdmin?: boolean;
}

export function Sidebar({
  items,
  onLogout,
  title = 'Menu',
  isAdmin = false,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="fixed top-4 left-4 z-40 md:hidden p-2 rounded-lg border border-border hover:bg-muted"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 bg-card border-r border-border transition-transform md:relative md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <h2 className="font-display text-xl font-bold text-foreground">
              {title}
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-border p-4 space-y-2">
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
              >
                <LogOut className="size-4" />
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

// Client Sidebar Navigation Items
export const clientNavItems: SidebarItem[] = [
  {
    label: 'Tableau de bord',
    href: '/dashboard',
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    label: 'Rendez-vous',
    href: '/appointments',
    icon: <Calendar className="size-4" />,
  },
  {
    label: 'Rapports',
    href: '/reports',
    icon: <FileText className="size-4" />,
  },
  {
    label: 'Notifications',
    href: '/notifications',
    icon: <Bell className="size-4" />,
  },
  {
    label: 'Profil',
    href: '/profile',
    icon: <User className="size-4" />,
  },
  {
    label: 'Paramètres',
    href: '/settings',
    icon: <Settings className="size-4" />,
  },
];

// Admin Sidebar Navigation Items
export const adminNavItems: SidebarItem[] = [
  {
    label: 'Tableau de bord',
    href: '/admin/dashboard',
    icon: <LayoutDashboard className="size-4" />,
  },
  {
    label: 'Rendez-vous',
    href: '/admin/appointments',
    icon: <Calendar className="size-4" />,
  },
  {
    label: 'Rapports',
    href: '/admin/reports',
    icon: <FileText className="size-4" />,
  },
  {
    label: 'Clients',
    href: '/admin/customers',
    icon: <User className="size-4" />,
  },
  {
    label: 'Avis',
    href: '/admin/reviews',
    icon: <Bell className="size-4" />,
  },
  {
    label: 'Blog',
    href: '/admin/blog',
    icon: <FileText className="size-4" />,
  },
  {
    label: 'Paiements',
    href: '/admin/payments',
    icon: <FileText className="size-4" />,
  },
  {
    label: 'Paramètres',
    href: '/admin/settings',
    icon: <Settings className="size-4" />,
  },
];
