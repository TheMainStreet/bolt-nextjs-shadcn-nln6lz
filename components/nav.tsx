'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { CloudCog } from 'lucide-react';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Goals' },
    { href: '/experiments', label: 'Experiments' },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <CloudCog className="h-6 w-6 text-primary" />
              <span className="font-semibold">Cloud Admin</span>
            </Link>
            <div className="flex space-x-1">
              {links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'relative',
                      pathname === href && 'text-primary font-medium'
                    )}
                  >
                    {label}
                    {pathname === href && (
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary" />
                    )}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}