"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// Başlık için kelime bazlı animasyon
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Fare takibi için yumuşak değerler (sadece masaüstü)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Hareket eden gradient arka plan
  const gradientX = useTransform(springX, (value) => value * 0.5 + 50);
  const gradientY = useTransform(springY, (value) => value * 0.5 + 50);

  // Başlığı kelimelere ayır
  const headline = "Duygusal yükünüzü hafifletmek için yumuşak, güvenli bir alan";
  const words = headline.split(" ");

  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      {/* Dinamik gradient arka plan (fareyle hareket eder) */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(16, 185, 129, 0.15), rgba(245, 245, 244, 0.8) 70%)`,
        }}
      />

      {/* Yumuşak blob’lar - gelişmiş animasyon ve katman */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -right-24 -top-32 h-[min(100vw,32rem)] w-[min(100vw,32rem)] rounded-full bg-emerald-100/40 blur-3xl"
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-teal-50/60 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-8 right-1/4 h-64 w-64 rounded-full bg-stone-100/60 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Fareyle takip eden ışıltı (isteğe bağlı) */}
      {isHovering && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 h-96 w-96 rounded-full bg-gradient-to-r from-emerald-200/20 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
        />
      )}

      <div
        className="relative mx-auto grid min-h-[min(92svh,800px)] max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,min(52vw,560px))] lg:gap-14 lg:px-8 lg:py-28"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="max-w-2xl lg:max-w-none">
          {/* Rozet + küçük animasyon */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="inline-flex rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur-sm sm:text-sm">
              Klinik psikolog
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Çevrimiçi seanslar
            </motion.span>
          </motion.div>

          {/* Kelime bazlı animasyonlu başlık */}
          <h1 className="font-serif-display mt-4 text-[2rem] font-semibold leading-[1.2] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                custom={idx}
                initial="hidden"
                animate="show"
                variants={letterVariants}
                className="inline-block whitespace-pre-wrap"
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          {/* Alt başlık */}
          <motion.p
            custom={words.length}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Bireysel terapi ve psikolojik danışmanlıkta bilimsel yöntemleri,
            sakin ve yargısız bir ortamla birleştiriyorum. Kendi ritminizde
            ilerlemeniz için buradayım.
          </motion.p>

          {/* İstatistik / güven artırıcı küçük kart */}
          <motion.div
            custom={words.length + 1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            {[
              { label: "Mutlak gizlilik", icon: "🔒" },
              { label: "Bilimsel yaklaşım", icon: "📋" },
              { label: "Esnek saatler", icon: "⏰" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Butonlar ve aksiyon çağrısı */}
          <motion.div
            custom={words.length + 2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-white shadow-md transition-shadow hover:shadow-lg"
              >
                Randevu / İletişim
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="inline-flex h-12 min-h-[48px] items-center justify-center rounded-full border border-border bg-white/90 px-8 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white"
              >
                Hakkımda
              </Link>
            </motion.div>
            <Link
              href="/services"
              className="group text-center text-sm font-medium text-accent underline-offset-4 transition-all hover:underline sm:text-left sm:ml-2"
            >
              Hizmetleri incele{" "}
              <motion.span
                className="inline-block transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Küçük güven notu */}
          <motion.p
            custom={words.length + 3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 text-xs text-muted/70"
          >
            İlk görüşme ücretsiz, kimlik bilgileriniz 100% gizli tutulur.
          </motion.p>
        </div>

        <div className="relative mx-auto h-[min(52vw,280px)] w-full max-w-md sm:h-[min(48vw,360px)] sm:max-w-lg lg:mx-0 lg:h-[min(580px,64vh)] lg:max-w-none">
          <Image
            src="/tree.png"
            alt="Büyüme ve dengeyi simgeleyen ağaç illüstrasyonu"
            fill
            className="object-contain object-bottom drop-shadow-[0_24px_48px_rgba(74,111,94,0.14)]"
            sizes="(max-width: 1024px) 90vw, 560px"
            priority
          />
        </div>
      </div>
    </section>
  );
}