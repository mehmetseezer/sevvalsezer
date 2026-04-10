import type { Metadata } from "next";
import Link from "next/link";
import { SoftGlow } from "@/components/decorative/SoftGlow";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Şevval Sezer — yaklaşım, değerler ve mesleki çerçeve hakkında.",
};

export default function AboutPage() {
  return (
    <div className="border-b border-border">
      <div className="relative overflow-hidden border-b border-border bg-white">
        <SoftGlow />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            Hakkımda
          </p>
          <h1 className="font-serif-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Merhaba, ben Şevval
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Klinik psikoloji alanında çalışıyor; danışanlarımın duygusal dünyasını
            anlamlandırmasına ve yaşamlarında sürdürülebilir değişim yaratmasına
            eşlik ediyorum. Aşağıda yaklaşımımı, değerlerimi ve sürece dair
            sık sorulanları daha ayrıntılı bulabilirsiniz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-14 sm:px-6 sm:py-20 lg:max-w-4xl lg:px-8">
        <section>
          <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            Terapiye bakışım
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Terapi odasında yargısız bir dinleyici ve net profesyonel sınırlarla
              birlikte ilerliyoruz. Amacım sizi “düzeltmek” değil; yaşadıklarınızı
              birlikte anlamlandırmak, güçlü yönlerinizi görmek ve zorlandığınız
              anlarda yanınızda durmaktır.
            </p>
            <p>
              Her insanın hikâyesi eşsizdir. Bu yüzden tek tip bir formül sunmak
              yerine, bilimsel olarak desteklenen yöntemleri sizin ihtiyaçlarınıza,
              tempunuza ve hedeflerinize göre uyarlamayı tercih ediyorum.
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          {[
            {
              t: "Güven ve gizlilik",
              d: "Görüşmeler etik kurallar ve yasal çerçeveyle korunur. Güven ilişkisi, sürecin kalbidir.",
            },
            {
              t: "Şeffaflık",
              d: "Yöntem, beklenti ve sınırlar hakkında açık konuşur; sorularınızı yanıtlamaktan çekinmem.",
            },
            {
              t: "Tempo",
              d: "Zorlamadan ilerleriz. Küçük adımlar, kalıcı değişim için sıkça en güvenli yoldur.",
            },
            {
              t: "Bütüncülük",
              d: "Duygu, düşünce, beden ve ilişkiler birlikte ele alınır; tek bir etiketle sınırlı kalmayız.",
            },
          ].map((x) => (
            <div key={x.t} className="soft-card p-6">
              <h3 className="font-semibold text-foreground">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            Kimlerle çalışıyorum?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Kaygı, panik, genelleşmiş kaygı, depresyon, travma sonrası stres,
            yas ve kayıp, ilişki sorunları, öz-değer, tükenmişlik, iş-yaşam
            dengesi ve yaşam geçişleri gibi başlıklarda destek sunuyorum. İlk
            görüşmede hedefinizin terapiyle mi yoksa başka bir uzmanlıkla mı
            daha uyumlu olduğunu birlikte değerlendiririz.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-muted sm:text-base">
            <li>Bireysel yetişkin danışanlar (yaş aralığını buraya ekleyebilirsiniz)</li>
            <li>Online veya yüz yüze görüşme (uygunluk koşullarına göre)</li>
            <li>Kısa süreli hedef odaklı veya daha uzun soluklu çalışmalar</li>
          </ul>
        </section>

        <section className="soft-card-elevated p-8 sm:p-10">
          <h2 className="font-serif-display text-2xl font-semibold text-foreground">
            Eğitim ve uzmanlık
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Bu bölümü gerçek bilgilerinizle güncelleyin: lisans ve yüksek lisans
            programları, sertifikalar, süpervizyon, mesleki üyelikler ve
            katıldığınız eğitimler. Ziyaretçilerin güveni için güncel ve net
            bir özet faydalıdır.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>• Örnek: … Üniversitesi, Psikoloji lisansı</li>
            <li>• Örnek: … Klinik Psikoloji yüksek lisansı</li>
            <li>• Örnek: … eğitimi / sertifikası</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            Etik ve sınırlar
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Mesleki etik kurallar çerçevesinde çalışırım. Acil risk durumlarında
            yasal zorunluluklar hariç bilgileriniz gizli kalır. Terapi süreci
            tıbbi tedavi veya acil müdahalenin yerini almaz; gerektiğinde
            psikiyatri veya diğer uzmanlara yönlendirme konusunda destek olurum.
          </p>
        </section>

        <div className="rounded-2xl border border-dashed border-accent/25 bg-accent-light/30 p-8 text-center">
          <p className="text-sm text-muted sm:text-base">
            Tanışmak veya sorularınızı iletmek için iletişim sayfasını kullanabilirsiniz.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-white"
          >
            İletişime geç
          </Link>
        </div>
      </div>
    </div>
  );
}
