"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SoftGlow } from "@/components/decorative/SoftGlow";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="border-b border-border">
      <div className="relative overflow-hidden border-b border-border bg-white">
        <SoftGlow />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            İletişim
          </p>
          <h1 className="font-serif-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Bir mesaj kadar yakınım
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Randevu talebi, kısa bir soru veya süreç hakkında ön bilgi için
            formu kullanabilirsiniz. Form demo amaçlıdır; üretimde e-posta API,
            CRM veya randevu sistemine bağlanabilir.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
        <div className="space-y-10 lg:col-span-5">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Doğrudan iletişim
            </h2>
            <ul className="mt-4 space-y-4 text-sm sm:text-base">
              <li>
                <span className="font-medium text-foreground">E-posta</span>
                <p className="mt-1 text-muted">ornek@sevalsezer.com</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Telefon</span>
                <p className="mt-1 text-muted">+90 (___) ___ __ __</p>
              </li>
              <li>
                <span className="font-medium text-foreground">Adres</span>
                <p className="mt-1 text-muted">
                  Ofis adresinizi ve kat/daire bilgisini buraya ekleyin.
                </p>
              </li>
            </ul>
          </div>

          <div className="soft-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Çalışma saatleri
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Örnek: Hafta içi 09:00 – 18:00 (Cuma yarım gün vb.). Gerçek
              saatlerinizi buraya yazın; tatillerde duyuru ekleyebilirsiniz.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-accent-light/40 p-6 text-sm text-muted">
            <p className="font-medium text-foreground">Gizlilik</p>
            <p className="mt-2 leading-relaxed">
              Form üzerinden paylaştığınız bilgiler yalnızca size dönüş için
              kullanılmalıdır; KVKK metninizi ve açık rıza metinlerini sayfaya
              PDF veya link ile ekleyebilirsiniz.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7"
        >
          <div className="soft-card-elevated p-6 sm:p-8 lg:p-10">
            {sent ? (
              <p className="py-16 text-center text-base text-muted">
                Teşekkürler — mesajınız alındı. En kısa sürede size dönüş
                yapılacaktır.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Ad Soyad
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full min-h-11 rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none ring-accent/15 transition-shadow focus:ring-2"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      E-posta
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full min-h-11 rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none ring-accent/15 transition-shadow focus:ring-2"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Telefon{" "}
                      <span className="font-normal text-muted">(isteğe bağlı)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full min-h-11 rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none ring-accent/15 transition-shadow focus:ring-2"
                      placeholder="+90 …"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="topic"
                      className="text-sm font-medium text-foreground"
                    >
                      Konu
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      className="mt-2 w-full min-h-11 rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none ring-accent/15 focus:ring-2"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seçin
                      </option>
                      <option value="randevu">Randevu talebi</option>
                      <option value="bilgi">Ön bilgi / soru</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="msg" className="text-sm font-medium text-foreground">
                    Mesajınız
                  </label>
                  <textarea
                    id="msg"
                    name="msg"
                    required
                    rows={6}
                    className="mt-2 w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none ring-accent/15 transition-shadow focus:ring-2"
                    placeholder="Kısaca konuyu ve tercih ettiğiniz iletişim zamanlarını yazabilirsiniz…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full min-h-12 rounded-full bg-accent py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 sm:w-auto sm:px-12"
                >
                  Gönder
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
