"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Güven ve gizlilik",
    text: "Görüşmeleriniz mesleki etik ve KVKK bilinciyle yürütülür; paylaştıklarınız güvendedir.",
  },
  {
    title: "Kanıta dayalı yöntemler",
    text: "Çalışma planınız, güncel psikoterapi literatürü ve size özel ihtiyaçlarla şekillenir.",
  },
  {
    title: "Tempo size ait",
    text: "Zorlanmadan, küçük adımlarla ilerlemeniz; süre ve sıklık birlikte planlanır.",
  },
  {
    title: "Bütüncül bakış",
    text: "Duygu, düşünce, beden ve ilişkiler bir arada ele alınır; tek etiketle sınırlı kalmayız.",
  },
];

const steps = [
  {
    n: "01",
    title: "İlk görüşme",
    text: "Beklentilerinizi, özet geçmişinizi ve şu anki zorluklarınızı birlikte dinliyoruz.",
  },
  {
    n: "02",
    title: "Hedef ve plan",
    text: "Önceliklerinizi netleştirip çalışma çerçevesi ve oturum sıklığını belirliyoruz.",
  },
  {
    n: "03",
    title: "Oturumlar",
    text: "Bilişsel-duygusal beceriler, farkındalık ve davranışsal stratejilerle ilerliyoruz.",
  },
  {
    n: "04",
    title: "Değerlendirme",
    text: "Aralıklarla ilerlemeyi gözden geçirip gerekirse planı güncelliyoruz.",
  },
];

const faq = [
  {
    q: "Terapi ne kadar sürer?",
    a: "Kişiye ve hedefe göre değişir. Bazı danışanlar birkaç ayda belirgin rahatlama hisseder; bazı konular daha uzun soluklu olabilir. İlk görüşmede gerçekçi bir çerçeve konuşulur.",
  },
  {
    q: "Online görüşme mümkün mü?",
    a: "Uygunluk ve teknik koşullar elverdiğinde online seans seçeneği sunulabilir. Detaylar hizmetler ve iletişim üzerinden netleştirilir.",
  },
  {
    q: "İlaç yazıyor musunuz?",
    a: "Klinik psikologlar reçete yazmaz. Gerek görülürse psikiyatrik değerlendirme için yönlendirme hakkında bilgi verilir.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HomeSections() {
  return (
    <>
      <section className="border-b border-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="font-serif-display mx-auto max-w-3xl text-center text-xl font-medium leading-snug text-foreground sm:text-2xl lg:text-3xl"
          >
            “Kendinize gösterdiğiniz özen, değişimin en sessiz ama en güçlü
            başlangıcıdır.”
          </motion.blockquote>
          <p className="mt-5 text-center text-sm text-muted">— Şevval Sezer</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Çalışmamın dört temeli
            </h2>
            <p className="mt-4 text-muted">
              Terapi sürecinde şeffaflık, güven ve birlikte ürettiğimiz anlam
              ön plandadır.
            </p>
          </div>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((p) => (
              <motion.li key={p.title} variants={item}>
                <div className="soft-card h-full p-6 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="border-y border-border bg-accent-light/35 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Süreç nasıl işler?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Her adım, sizinle birlikte ve anlaşılır şekilde planlanır.
          </p>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <span className="font-serif-display text-3xl font-semibold text-accent/40">
                  {s.n}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-center text-3xl font-semibold text-foreground sm:text-4xl">
            Sık sorulanlar
          </h2>
          <div className="mt-10 space-y-3">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group soft-card overflow-hidden transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="border-t border-border px-5 pb-5 pt-0 text-sm leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:px-8">
          <div className="soft-card-elevated p-8 sm:p-10">
            <h2 className="font-serif-display text-2xl font-semibold text-foreground">
              Blog
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ruh sağlığı, duygusal düzenleme ve günlük yaşam üzerine sade,
              güncel yazılar. İçerikler düzenli olarak genişletilebilir.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              Tüm yazılar →
            </Link>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-accent/25 bg-accent-light/25 p-8 text-center sm:p-10">
            <h2 className="font-serif-display text-2xl font-semibold text-foreground">
              Sorunuz mu var?
            </h2>
            <p className="mt-4 text-sm text-muted">
              Kısa bir mesaj yeter; en uygun dönüş kanalını birlikte seçeriz.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center self-center rounded-full bg-accent px-8 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
