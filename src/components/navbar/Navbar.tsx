"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımda" },
  { href: "/services", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "İletişim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-border/80 bg-white/85 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex min-h-[5.75rem] max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:min-h-[6.5rem] sm:gap-4 sm:px-6 sm:py-2.5 lg:min-h-[7.25rem] lg:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 rounded-md"
          aria-label="Şevval Sezer — Ana sayfa"
        >
          <Image
            src="/logo.png"
            alt=""
            width={700}
            height={210}
            className="h-[5.625rem] w-auto max-h-[5.625rem] max-w-[min(58vw,500px)] object-contain object-left sm:h-[6.25rem] sm:max-h-[6.25rem] sm:max-w-[min(52vw,600px)] lg:h-[6.875rem] lg:max-h-[6.875rem] lg:max-w-[min(48vw,700px)]"
            priority
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-end md:flex">
          <div className="flex max-w-full flex-wrap items-center justify-end gap-0.5 rounded-full border border-border/60 bg-white/60 p-0.5 sm:p-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm lg:px-3.5 ${
                    active
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-light shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base font-medium ${
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                      ? "bg-accent-light text-accent"
                      : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
