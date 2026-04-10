import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { SoftGlow } from "@/components/decorative/SoftGlow";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ruh sağlığı, terapi ve günlük yaşam üzerine yazılar — Şevval Sezer.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

const sorted = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogPage() {
  const [featured, ...rest] = sorted;

  return (
    <div>
      <div className="relative overflow-hidden border-b border-border bg-white">
        <SoftGlow />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            Blog
          </p>
          <h1 className="font-serif-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Ruh sağlığı üzerine yazılar
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Terapiye dair merak edilenler, duygusal düzenleme, günlük yaşam ve
            bilimsel yaklaşımlar hakkında sade ve güncel içerikler. Yazılar
            düzenli olarak genişletilebilir.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group soft-card-elevated mb-12 block overflow-hidden p-6 transition-shadow hover:shadow-lg sm:p-8 lg:p-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Öne çıkan
            </span>
            <h2 className="font-serif-display mt-3 text-2xl font-semibold text-foreground transition-colors group-hover:text-accent sm:text-3xl lg:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted sm:text-sm">
              <time>{formatDate(featured.date)}</time>
              <span>·</span>
              <span>{featured.readTime} okuma</span>
              <span className="ml-auto font-medium text-accent">Devamını oku →</span>
            </div>
          </Link>
        )}

        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Tüm yazılar
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group soft-card flex h-full flex-col p-6 transition-shadow hover:shadow-md"
              >
                <time className="text-xs font-medium text-muted">
                  {formatDate(post.date)} · {post.readTime}
                </time>
                <h3 className="font-serif-display mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-medium text-accent">
                  Oku →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
