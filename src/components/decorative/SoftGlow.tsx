"use client";

/** Yalnızca CSS — Three.js yok; istemci sayfalarında da kullanılabilir */
export function SoftGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl sm:h-80 sm:w-80 md:-right-8 md:h-96 md:w-96" />
      <div className="absolute -left-8 top-1/3 h-48 w-48 rounded-full bg-teal-50/50 blur-3xl sm:h-64 sm:w-64" />
      <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-stone-100/60 blur-3xl" />
    </div>
  );
}
