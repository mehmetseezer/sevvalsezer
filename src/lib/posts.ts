export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "duygusal-duzenleme-nedir",
    title: "Duygusal düzenleme nedir?",
    excerpt:
      "Duygularımızı tanımak ve yönetmek, psikolojik iyi oluşun temel taşlarından biridir.",
    date: "2026-03-15",
    readTime: "8 dk",
    content: `Duygusal düzenleme, duygularımızı fark etme, adlandırma ve uygun şekilde ifade etme becerisidir. Bu süreç yalnızca “pozitif hissetmek” değil; zor duygularla da sağlıklı ilişki kurmayı içerir.

Günlük hayatta sık karşılaştığımız durumlarda bedenimiz hızlı bir alarm verebilir: kalp çarpıntısı, göğüs sıkışması, düşüncelerin hızlanması… Bu tepkiler çoğu zaman tehlikeden çok, “tehdit edici” olarak yorumlanan bir duruma verilen doğal yanıtlardır. Terapide bu döngüyü yavaşlatıp, duygunun altındaki ihtiyaçları görmeye çalışırız.

Terapi sürecinde sıkça çalışılan konulardan biri, duyguların bastırılması veya aşırı yoğun yaşanması arasında denge kurmaktır. Bastırma kısa vadede rahatlatıcı görünse de uzun vadede yorgunluk ve bedensel gerilim yaratabilir. Öte yandan duyguyu kontrol edemediğinizi düşünmek de utanç getirebilir. Burada hedef, duyguyu yok etmek değil; onunla nezaketle ve net sınırlarla yaşamaktır.

Nefes, beden farkındalığı, yavaşlama ve bilişsel yeniden çerçeveleme gibi yöntemler bu dengeye katkı sağlayabilir. Hangi aracın size uyduğu, deneyimledikçe ve güven ilişkisi güçlendikçe daha netleşir.

Unutmayın: duygularınız sizi tanımlamaz; geçici deneyimlerdir. Profesyonel destek, bu deneyimleri daha güvenli bir bağlamda işlemenize yardımcı olur.`,
  },
  {
    slug: "terapiye-baslamak",
    title: "Terapiye başlamak: ilk adımlar",
    excerpt:
      "İlk seans öncesi merak edilenler ve sürece dair kısa bir rehber.",
    date: "2026-02-02",
    readTime: "7 dk",
    content: `Terapiye karar vermek, kendinize yatırım yapmanın güçlü bir ifadesidir. Bu kararı verirken kendinizi yalnız hissetseniz bile, birçok insan benzer soruları sorar: “Ne anlatacağım?”, “Yargılanır mıyım?”, “Gerçekten işe yarar mı?”

İlk görüşmede genellikle beklentileriniz, özet geçmişiniz ve şu anki zorluklarınız konuşulur. Her şeyi tek seferde anlatmak zorunda değilsiniz. Terapistiniz, sizi acele ettirmeden dinleyerek süreci birlikte şekillendirir.

Gizlilik ve güven, terapötik ilişkinin omurgasıdır. Mesleki etik kurallar ve yasal çerçeve içinde bilgileriniz korunur. Sorular sormaktan çekinmeyin: yaklaşım, süre, sıklık, ücret ve iptal koşulları hakkında net bilgi almak haklarınızdır.

Her yolculuk farklıdır; bazen birkaç seans yeterli olurken bazen daha uzun soluklu bir çalışma gerekir. Önemli olan, size uygun tempoyu birlikte belirlemek ve küçük adımların biriktiğini fark etmektir. İlk adımı atmış olmanızın kendisi bile, değişime dair önemli bir sinyaldir.`,
  },
  {
    slug: "anksiyete-ve-gunluk-yasam",
    title: "Anksiyete ve günlük yaşam",
    excerpt:
      "Kaygıyı tamamen yok etmek yerine onunla nasıl yaşanabileceğine dair notlar.",
    date: "2026-01-10",
    readTime: "9 dk",
    content: `Anksiyete, tehdit algılandığında ortaya çıkan doğal bir tepkidir. Kalabalık, performans, sağlık veya ilişkiler gibi konularda “ya olursa?” düşünceleri çoğalabilir. Sorun, bu tepkinin günlük işlevselliği sürekli kıstığında baş gösterir.

Kaygıyla yaşamak, onu sıfırlamak anlamına gelmez. Çoğu zaman amaç, duygunun şiddetini yönetmek, tetikleyicileri tanımak ve bedenle dostça ilişki kurmaktır. Uyku düzeni, düzenli hareket, kafein ve ekran kullanımı gibi yaşam alışkanlıkları sinir sisteminin düzenlenmesine yardımcı olabilir.

Bilimsel olarak desteklenen yaklaşımlar arasında bilişsel davranışçı teknikler, maruz bırakma çalışmaları ve farkındalık temelli stratejiler yer alır. Terapi, kaygının kökenini anlamanızı ve tetikleyicilerle başa çıkma becerilerinizi güçlendirmenizi hedefler.

Kendinize şunu hatırlatabilirsiniz: kaygı hissetmek “zayıflık” değildir. Tek başınıza taşımak zorunda değilsiniz; destek aramak ise özen gerektiren bir adımdır.`,
  },
  {
    slug: "uyku-ve-ruh-sagligi",
    title: "Uyku ve ruh sağlığı",
    excerpt:
      "Uyku düzeni ile duygu düzeni arasındaki ilişki ve pratik öneriler.",
    date: "2025-12-18",
    readTime: "6 dk",
    content: `Uyku yalnızca dinlenmek değil; bellek, duygu işleme ve stresle başa çıkma kapasitesi için kritik bir süreçtir. Uykusuzluk veya bölük pörçük uyku, gün içinde tahammülü düşürebilir ve kaygı-depresyon semptomlarını artırabilir.

Düzenli yatma saati, yatak odasını yalnızca uyku ve dinlenmeye ayırma, ekranı yatmadan önce sınırlama ve hafif gevşeme rutinleri uyku kalitesini iyileştirebilir. Her gece mükemmel uyumak şart değildir; küçük iyileşmeler bile birikir.

Terapide uyku günlüğü tutmak, düşünce örüntülerini görmek ve “yatakta uykuyu zorlamak” yerine gevşemeye odaklanmak sık kullanılan stratejilerdir. Uykunuz uzun süredir ciddi şekilde bozuksa tıbbi değerlendirme de önemlidir.`,
  },
  {
    slug: "sinir-koymanin-anlami",
    title: "Sınır koymanın anlamı",
    excerpt:
      "Sağlıklı sınırlar neden sevgiyle uyumludur ve nasıl pratikleşir?",
    date: "2025-11-22",
    readTime: "7 dk",
    content: `Sınır koymak, karşımızdakini uzaklaştırmak değil; ilişkide güveni ve öngörülebilirliği artırmaktır. “Hayır” diyebilmek, zamanınızı ve enerjinizi korumanıza yardımcı olur; böylece “evet” dediğiniz anlarda daha gerçekten orada olursunuz.

Çoğu insan sınır koyarken suçluluk hisseder. Bu duygu genellikle geçmiş deneyimlerden veya “herkesi memnun etme” alışkanlığından beslenir. Terapide bu suçluluğu yargılamadan inceleyip, alternatif ifadeler üzerinde çalışmak mümkündür.

Küçük ve net cümlelerle başlamak işe yarar: “Bu konuda şu an konuşamam”, “Buna şimdilik enerjim yok”, “Bu teklif bana uygun değil”. Tonunuz sakin olduğunda mesajınız genelde daha iyi karşılanır.`,
  },
  {
    slug: "depresyonda-kucuk-adimlar",
    title: "Depresyonda küçük adımlar",
    excerpt:
      "Motivasyon düşükken davranışsal aktivasyon ve öz-şefkat üzerine.",
    date: "2025-10-08",
    readTime: "8 dk",
    content: `Depresyon bazen “hiçbir şey istememe” ve “yapamam” hissiyle gelir. Büyük hedefler bu aşamada bunaltıcı olabilir. Bu yüzden terapide sıkça küçük, ölçülebilir adımlar önerilir: kısa bir duş, pencereyi açmak, bir mesaj yazmak, beş dakika dışarı çıkmak…

Davranışsal aktivasyon, duygu gelmeden önce hafif eylemlerle başlamayı öneren bir yaklaşımdır. Duygu bazen eylemden sonra yumuşar; her zaman tersi beklemek bizi kilitler.

Öz-şefkat, kendinize düşman olmak yerine zor gününde yanında durmayı öğrenmektir. Bu, tembellik değil; sinir sistemini aşırı eleştiriden koruma çabasıdır. Profesyonel destek, bu adımları güvenli tempoda planlamanıza yardımcı olur.`,
  },
  {
    slug: "travma-ve-guvenli-ortam",
    title: "Travma ve güvenli ortam",
    excerpt:
      "Travma sonrası iyileşmede güven, tempo ve seçenekler hakkında genel bilgi.",
    date: "2025-09-14",
    readTime: "8 dk",
    content: `Travma, tek bir tanı veya olay tipiyle sınırlı değildir; kişinin algıladığı tehdit ve çaresizlik deneyimiyle ilişkilidir. İyileşme yolları kişiden kişiye değişir; ortak payda ise güvenli bir ilişki ve kontrolün size ait olduğunu hissettiren bir süreçtir.

Terapide acele edilmez. Önce stabilizasyon, günlük işlevselliği destekleme ve başa çıkma kaynaklarını güçlendirme öncelikli olabilir. Sonraki aşamalarda anı ve duygularla çalışma, uygun yöntem ve hazırlıkla ele alınır.

Bu yazı genel bilgilendirme amaçlıdır. Kendi hikâyeniz için mutlaka bireysel değerlendirme ve uzman desteği önemlidir.`,
  },
  {
    slug: "farkindalik-mi-durgunluk-mu",
    title: "Farkındalık mı, durgunluk mu?",
    excerpt:
      "Mindfulness pratiğini günlük hayata eklerken sık yapılan yanılgılar.",
    date: "2025-08-30",
    readTime: "5 dk",
    content: `Farkındalık (mindfulness), “hiç düşünmemek” veya “her şeye pozitif bakmak” değildir. Şu ana dikkati getirip, düşünce ve duyguları yargılamadan fark etmeyi içerir.

Pratik kısa süreli ve sık tekrarlanan seanslarla başlayabilir: nefese odaklanma, beden taraması veya yürürken duyulara dikkat. Amaç mükemmellik değil; dikkatin dağıldığını fark edip nazikçe geri getirmektir.

Bazı insanlar ilk haftalarda huzursuzluk hissedebilir; bu yüzden tempo ve teknik seçimi kişiye göre ayarlanmalıdır. Terapistinizle birlikte size uygun biçimi bulmak mümkündür.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
