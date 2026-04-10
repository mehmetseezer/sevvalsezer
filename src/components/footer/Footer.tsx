import Image from "next/image";
import Link from "next/link";

const quick = [
  ["/about", "Hakkımda"],
  ["/services", "Hizmetler"],
  ["/blog", "Blog"],
  ["/contact", "İletişim"],
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 object-contain"
              />
              <div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Klinik psikoloji çerçevesinde bireysel terapi ve danışmanlık.
              Güvenli, gizlilik esaslı ve yumuşak tempolu bir süreç.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quick.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/85 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              İletişim
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <span className="text-foreground/70">E-posta</span>
                <br />
                ornek@sevalsezer.com
              </li>
              <li>
                <span className="text-foreground/70">Telefon</span>
                <br />
                +90 (___) ___ __ __
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Önemli
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Bu site genel bilgilendirme amaçlıdır ve terapi yerine geçmez.
              Acil durumda{" "}
              <span className="font-medium text-foreground">112</span> veya en
              yakın sağlık kuruluşuna başvurun.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>© {new Date().getFullYear()} Şevval Sezer</span>
          <span>Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
