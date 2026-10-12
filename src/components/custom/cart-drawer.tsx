'use client';

import { X, Trash2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { useApp } from '@/lib/store';
import { COURSE_CATALOG, PRICE_MASK } from '@/data/types';
import { toast } from 'sonner';

export function CartDrawer() {
  const { cart, setCartOpen, removeFromCart } = useApp();
  const items = cart.items
    .map((id) => COURSE_CATALOG.find((c) => c.id === id))
    .filter(Boolean) as typeof COURSE_CATALOG;

  return (
    <Sheet open={cart.open} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border">
          <SheetTitle className="font-serif">Enrolment list</SheetTitle>
          <SheetDescription>
            Prices are disclosed at the academy office during counselling.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <Info className="h-8 w-8 text-muted-foreground/60" aria-hidden />
            <p className="text-sm text-muted-foreground">
              Your list is empty. Add programmes, test series or books from the Courses page.
            </p>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                setCartOpen(false);
                useApp.getState().setView('path');
              }}
            >
              Browse programmes
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4 scroll-slim">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-snug">{item.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      {item.kind.replace('-', ' ')} · {item.period ?? 'one-time'}
                    </p>
                    <p className="price-mask mt-1.5 text-sm text-foreground/80">{PRICE_MASK}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from list`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total</span>
                <span className="price-mask">{PRICE_MASK}</span>
              </div>
              <Button
                className="w-full"
                onClick={() =>
                  toast('Enrolment opens shortly', {
                    description:
                      'Counselling and fee disclosure happen at the academy office or on the orientation call.',
                  })
                }
              >
                Request enrolment
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export function AddToListButton({ id, label = 'Add to list' }: { id: string; label?: string }) {
  const { addToCart, setCartOpen, cart } = useApp();
  const inList = cart.items.includes(id);
  return (
    <Button
      size="sm"
      variant={inList ? 'outline' : 'default'}
      className="h-9"
      onClick={() => {
        if (inList) {
          setCartOpen(true);
        } else {
          addToCart(id);
          toast('Added to your enrolment list');
        }
      }}
    >
      {inList ? 'In list · Review' : label}
    </Button>
  );
}

export function CloseCartButton() {
  const setCartOpen = useApp((s) => s.setCartOpen);
  return (
    <Button variant="ghost" size="icon" onClick={() => setCartOpen(false)} aria-label="Close list">
      <X className="h-4 w-4" />
    </Button>
  );
}
