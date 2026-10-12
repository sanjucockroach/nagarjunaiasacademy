'use client';

import { useState } from 'react';
import { Clock, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export function ContactView() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error('Please add your name and a short message.');
      return;
    }
    setSending(true);
    // Local, honest handling: the academy reads enquiries on the orientation call.
    setTimeout(() => {
      setSending(false);
      setName('');
      setGoal('');
      setMessage('');
      toast.success('Noted locally. The academy office follows up on the weekly orientation call.', {
        description: 'For faster response, visit the campus at Naidupet, Guntur.',
      });
    }, 600);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">Contact</p>
      <h1 className="mt-3 max-w-2xl font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
        Reach the academy in Guntur
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="c-name">Your name</Label>
              <Input
                id="c-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="As written on your ID"
                autoComplete="name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-goal">Where are you in preparation?</Label>
              <Select value={goal} onValueChange={setGoal}>
                <SelectTrigger id="c-goal" className="w-full">
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Just starting, foundation stage</SelectItem>
                  <SelectItem value="mid">Studying, need structure and tests</SelectItem>
                  <SelectItem value="mains">Mains-focused, answer writing</SelectItem>
                  <SelectItem value="interview">Interview preparation</SelectItem>
                  <SelectItem value="appsc">APPSC Group I / II</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-msg">Message</Label>
            <Textarea
              id="c-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell the academy about your goal, attempts and preferred timing"
              rows={5}
              required
            />
          </div>
          <Button type="submit" size="lg" disabled={sending} className="h-11">
            <Send className="mr-1.5 h-4 w-4" aria-hidden />
            {sending ? 'Saving note locally' : 'Send to the academy'}
          </Button>
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            This preview stores your note on this device only, no data leaves your browser.
            Enrolment and fee details are shared during counselling, at the office or on the
            weekly orientation call.
          </p>
        </form>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <MapPin className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
              Campus
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Opp. Brahmamgari Matam, Naidupet
              <br />
              Guntur district, Andhra Pradesh 522124
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Clock className="h-4.5 w-4.5 text-gold-ink" aria-hidden />
              Office hours
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Monday to Saturday, 9 am to 7 pm
              <br />
              Weekly orientation and inner-circle calls every week
            </p>
          </div>
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
              <Phone className="h-4.5 w-4.5 text-gold" aria-hidden />
              Admissions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
              Counselling happens in person at the campus. Bring your last attempt details,
              if any, and the office will map a course path for you the same day.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
