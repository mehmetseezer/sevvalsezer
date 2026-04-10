import type { Metadata } from "next";
import Link from "next/link";
import { SoftGlow } from "@/components/decorative/SoftGlow";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Bireysel terapi ve psikolojik danışmanlık — sunulan başlıklar ve süreç.",
};

const services = [
  {
    title: "Bireysel psikoterapi",
    body:
      "Duygularınızı güvenle paylaşabileceğiniz, yapılandırılmış ve hedef odaklı görüşmeler. Oturum süresi ve sıklığı ihtiyaca göre planlanır; kısa süreli odaklı çalışmalar veya daha uzun soluklu süreçler mümkündür.",
  },
  {
    title: "Kaygı, panik ve stres",
    body:
      "Genelleşmiş kaygı, panik atak, sosyal kaygı ve iş-yaşam stresi için bilişsel-duygusal beceriler, nefes ve beden farkındalığı, maruz bırakma temelli adımlar ve düşünce örüntüleri üzerinde çalışma.",
  },
  {
    title: "Depresyon ve motivasyon",
    body:
      "Enerji kaybı, ilgisizlik, umutsuzluk ve kaçınma döngülerini anlamak; davranışsal aktivasyon, küçük adımlar, öz-şefkat ve düşünce-duygu bağlantılarını güçlendirme.",
  },
  {
    title: "Yas, kayıp ve yaşam geçişleri",
    body:
      "Kayıp sonrası duyguların dalgalanması, anlam arayışı ve günlük işlevselliği sürdürme konusunda eşlik. İş değişimi, taşınma, ilişki ayrılığı gibi geçişlerde destek.",
  },
  {
    title: "İlişkiler ve sınırlar",
    body:
      "Yakın ilişkilerde iletişim, bağlanma örüntüleri, çatışma yönetimi ve sağlıklı sınır koyma becerileri üzerinde çalışma.",
  },
  {
    title: "Travma ve güvenli tempo",
    body:
      "Travma sonrası belirtiler ve yoğun duygular için önce stabilizasyon ve güven; hazır olduğunuzda anı ve duygularla çalışma seçenekleri hakkında bilgilendirme.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <div className="relative overflow-hidden border-b border-border bg-white">
        <SoftGlow />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            Hizmetler
          </p>
          <h1 className="font-serif-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Size uygun tempoda, şeffaf bir süreç
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            İlk görüşmede ihtiyaçlarınızı değerlendirir, beklentilerinizi dinler ve
            birlikte çalışma çerçevesi hakkında net bilgi veririm. Aşağıda sık
            çalışılan başlıklar yer alıyor; listeniz ihtiyaçlarınıza göre
            genişleyebilir.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20 lg:px-8">
        <ul className="grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.title} className="soft-card p-7 transition-shadow hover:shadow-lg">
              <h2 className="font-serif-display text-lg font-semibold text-foreground sm:text-xl">
                {s.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="soft-card p-8">
            <h2 className="font-serif-display text-xl font-semibold text-foreground">
              Online ve yüz yüze
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Her iki formatın da avantajları vardır. Online görüşmelerde
              gizlilik ve teknik altyapı önemlidir; yüz yüze görüşmelerde ise
              ortam ve ulaşım planlanır. Size uygun seçeneği birlikte belirleriz.
            </p>
          </div>
          <div className="soft-card p-8">
            <h2 className="font-serif-display text-xl font-semibold text-foreground">
              Ücret ve iptal
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Seans ücreti, süre ve iptal politikası gibi maddi konuları iletişim
              veya ilk görüşmede şeffaf şekilde paylaşabilirsiniz. Bu metinleri
              ofis kurallarınıza göre burada güncellemeniz yeterli.
            </p>
          </div>
        </section>

        <div className="mt-14 rounded-2xl border border-dashed border-accent/25 bg-accent-light/35 p-8 text-center sm:p-10">
          <h2 className="font-serif-display text-xl font-semibold text-foreground sm:text-2xl">
            Randevu veya ön bilgi
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted sm:text-base">
            Kısa bir mesajla süreç hakkında soru sorabilir veya görüşme talep
            edebilirsiniz.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 min-h-[48px] items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-white"
          >
            İletişim formu
          </Link>
        </div>
      </div>
    </div>
  );
}
