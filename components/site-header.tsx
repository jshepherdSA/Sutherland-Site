"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { FacebookIcon } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { DONATE_URL, FACEBOOK_URL, NAV_LINKS } from "@/lib/site";
import logo from "@/public/images/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-t-4 border-b border-t-red border-b-line bg-paper">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-5 py-2.5">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Re-Elect Aaron Sutherland, Newport City Commission"
            className="h-12 w-auto md:h-16"
            sizes="(min-width: 768px) 114px, 86px"
            preload
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-[22px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border-b-2 border-transparent py-1.5 text-[0.9rem] font-bold tracking-[0.5px] text-ink uppercase transition-colors hover:border-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aaron Sutherland on Facebook (opens in a new tab)"
            className="inline-flex size-9 items-center justify-center rounded-[4px] text-navy transition-colors hover:text-red-ink"
          >
            <FacebookIcon className="size-[18px]" />
          </a>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm" })}
          >
            Donate
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-paper px-5 pt-1 pb-2.5 md:hidden"
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="border-b border-line last:border-b-0"
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[0.95rem] font-bold tracking-[0.5px] uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
