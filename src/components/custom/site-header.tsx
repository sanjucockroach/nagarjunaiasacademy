'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Moon, Sun, ShoppingBag, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useApp, VIEWS } from '@/lib/store';
import { CartDrawer } from './cart-drawer';

export function SiteHeader() {
  const view = useApp((s) => s.view);
  const setView = useApp((s) => s.setView);
  const cartCount = useApp((s) => s.cart.items.length);
  const setCartOpen = useApp((s) => s.setCartOpen);
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Go to Nagarjuna IAS Academy home"
        >
          <Image
            src="/brand/logo.png"
            alt="Nagarjuna IAS Academy crest"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full ring-1 ring-gold/60"
            priority
          />
          <span className="text-left leading-tight">
            <span className="block font-serif text-[17px] font-semibold tracking-tight">
              Nagarjuna IAS Academy
            </span>
            <span className="block font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
              VARIETY · VELOCITY · VERACITY
            </span>
          </span>
        </button>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          {VIEWS.map((v) => (
            <Button
              key={v.id}
              variant={view === v.id ? 'secondary' : 'ghost'}
              size="sm"
              className="h-9 text-[13.5px] font-medium"
              onClick={() => setView(v.id)}
              aria-current={view === v.id ? 'page' : undefined}
            >
              {v.label}
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Sun className="hidden h-4.5 w-4.5 dark:block" aria-hidden />
            <Moon className="h-4.5 w-4.5 dark:hidden" aria-hidden />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9"
            onClick={() => setCartOpen(true)}
            aria-label={`Enrolment list, ${cartCount} items`}
          >
            <ShoppingBag className="h-4.5 w-4.5" aria-hidden />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 font-mono text-[10px] font-medium text-foreground">
                {cartCount}
              </span>
            )}
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-serif">Navigate</SheetTitle>
              <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
                {VIEWS.map((v) => (
                  <Button
                    key={v.id}
                    variant={view === v.id ? 'secondary' : 'ghost'}
                    className="h-11 justify-start text-[15px]"
                    onClick={() => {
                      setView(v.id);
                      setMobileOpen(false);
                    }}
                  >
                    {v.label}
                  </Button>
                ))}
              </nav>
              <p className="mt-6 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                Naidupet, Guntur district
                <br />
                Andhra Pradesh
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CartDrawer />
    </header>
  );
}
