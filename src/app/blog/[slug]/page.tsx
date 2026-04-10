import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";
import { SoftGlow } from "@/components/decorative/SoftGlow";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı bulunamadı" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.trim().split(/\n\n+/);

  return (
    <article className="border-b border-border">
      <div className="relative overflow-hidden border-b border-border bg-white">
        <SoftGlow />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl lg:px-8 lg:py-16">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent hover:underline"
          >
            ← Bloga dön
          </Link>
          <header className="mt-8">
            <time className="text-xs font-semibold uppercase tracking-wider text-muted">
              {formatDate(post.date)} · {post.readTime}
            </time>
            <h1 className="font-serif-display mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {post.excerpt}
            </p>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:max-w-4xl lg:px-8 lg:py-16">
        <div className="space-y-6 text-base leading-[1.75] text-foreground/90 sm:text-lg">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-accent-light/30 p-6 sm:p-8">
          <p className="text-sm text-muted sm:text-base">
            Bu yazı genel bilgilendirme amaçlıdır; kişisel değerlendirme yerine
            geçmez. Kendi durumunuz için{" "}
            <Link href="/contact" className="font-medium text-accent underline-offset-2 hover:underline">
              iletişime geçebilir
            </Link>{" "}
            veya bir uzmanla görüşebilirsiniz.
          </p>
        </div>
      </div>
    </article>
  );
}
