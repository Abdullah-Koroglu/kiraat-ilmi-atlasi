# Kıraat İlmi Atlası Tasarım Dili

Bu doküman, TÜYEK Yazma Mushaflar Sempozyumu sayfasından çıkarılan görsel dilin Kıraat İlmi Atlası projesine uyarlanmış hâlidir. Amaç birebir kopya değil; aynı akademik, klasik, kurumsal ve yazma eser merkezli atmosferi koruyarak projeye özgü bir dijital atlas kimliği kurmaktır.

## 1. Genel Karakter

Tasarımın ana hissi ağırbaşlı, akademik, arşivsel ve zarif olmalıdır. Sayfa bir teknoloji girişimi gibi parlak ve hızlı değil; yazma eser, tabakat literatürü, ilim halkaları ve tarihî şehir hafızası gibi kavramları taşıyan bir kurum arayüzü gibi davranmalıdır.

Ana atmosfer:

- Koyu zeminler, altın vurgular ve krem boşluklar arasında ritmik geçiş.
- Serif başlıklarla klasik metin ve ilmî gelenek hissi.
- Sade sans-serif gövde yazısıyla dijital okunabilirlik.
- İnce çizgiler, numaralandırma ve küçük geometrik ayraçlarla kontrollü süsleme.
- İçeriği uzun metin blokları yerine taranabilir akademik modüllere ayırma.

## 2. Renk Sistemi

Referans siteden çıkarılan ana renk token'ları:

- `--brown-darkest: #1a1611`
- `--brown-dark: #2c2418`
- `--brown: #3d3225`
- `--gold: #c4a35a`
- `--gold-dark: #a8893e`
- `--gold-light: #d8bf78`
- `--cream: #f5f0e8`
- `--cream-dark: #ede8dd`
- `--cream-light: #faf8f4`
- `--burgundy: #6f1f1b`
- `--text-secondary: #5a4e3c`

Kullanım ilkeleri:

- Koyu alanlar ana dramatik taşıyıcıdır. Hero, temel sorular, yöntem ve ekip gibi bölümlerde kullanılmalıdır.
- Krem alanlar uzun okumaya ayrılmalıdır. Hakkımızda, amaçlar ve proje aşamaları bu zeminde daha rahat okunur.
- Altın renk sadece vurgu içindir. Başlık çizgileri, küçük numaralar, buton dolgusu, hover state ve bölüm ayraçlarında kullanılmalıdır.
- Bordo düşük yoğunluklu arka plan derinliği için kullanılabilir. Ana renk olmamalıdır.
- Krem ve koyu alanlar arasında yüksek kontrast korunmalıdır.

## 3. Tipografi

Başlık dili:

- Serif karakter kullanılmalı.
- Referans sitede `Playfair Display` hissi vardır; projede `Cormorant Garamond` tercih edildi.
- H1 çok büyük, ciddi ve ilk bakışta marka sinyali verecek ölçekte olmalıdır.
- Bölüm başlıkları 40-68 px aralığında, ağırlığı yüksek, satır aralığı sıkı olmalıdır.
- Kart içi başlıklar hero ölçeğine yaklaşmamalı, daha kontrollü kalmalıdır.

Gövde dili:

- Sade sans-serif kullanılmalı.
- Referansta `Inter / Source Sans Pro` karakteri görülür; projede `Source Sans 3` tercih edildi.
- Paragraf satır aralığı geniş tutulmalı.
- Uzun metinler tek kolon hâlinde yığılmamalı; iki kolon, liste veya numaralı modüllere bölünmelidir.

Harf aralığı:

- Küçük üst başlıklarda geniş harf aralığı kullanılabilir.
- Normal paragraflarda harf aralığı artırılmamalıdır.
- Negatif harf aralığı kullanılmamalıdır.

## 4. Layout Mantığı

Sayfa tek bir uzun akademik landing page olarak tasarlanır. Ana omurga:

1. Hero
2. Hakkımızda
3. Yola Çıkış Noktamız
4. Temel Sorular
5. Proje Aşamaları
6. Araştırma Kapsamı ve Yöntem
7. Amaç ve Hedefler
8. Proje Ekibi

Referans sitedeki bölüm ritmi:

- Her bölümde merkezlenmiş bir başlık.
- Başlık üstünde küçük altın geometrik ayraç.
- Koyu ve açık zeminlerin dönüşümlü kullanımı.
- İçeriği kartlar, listeler ve iki kolonlu metin bloklarıyla düzenleme.

## 5. Hero İlkeleri

Hero, projenin kimliğini ilk viewport'ta açıkça göstermelidir.

Hero kuralları:

- H1 doğrudan marka adı olmalıdır: `Kıraat İlmi Atlası`.
- Arka plan gerçek/generatif bir görsel taşımalıdır; sadece gradient veya soyut şekil yeterli değildir.
- Görselde yazma eser, harita, ağ bağlantıları ve altın indeks noktaları gibi proje kavramları sezilmelidir.
- Hero metni kart içinde değil, görselin üstünde doğrudan yer almalıdır.
- İlk viewport sonunda bir sonraki içeriğin ritmi sezilmelidir.
- CTA butonları keskin, ince çerçeveli ve altın vurgulu olmalıdır.

## 6. Bileşen Dili

Navigasyon:

- Sabit üst bar.
- Koyu zemin, ince altın alt çizgi.
- Sol tarafta proje adı ve alt açıklama.
- Sağ tarafta kısa anchor linkler.
- Menü metni küçük, sakin, fazla dikkat çekmeyen tonda.

Bölüm başlığı:

- Ortalanmış.
- Üstte `◆` benzeri küçük ayraç.
- Ayraç iki yanında ince altın çizgiler.
- Koyu bölümde başlık krem, açık bölümde koyu kahverengi.

Numaralı kartlar:

- Referans sitedeki tema kartlarından alınan ana kalıp budur.
- Koyu yarı saydam zemin.
- İnce altın/kahverengi bordür.
- Sol tarafta iki haneli numara.
- Sağ tarafta kısa, güçlü metin.
- Hover'da hafif yukarı hareket ve altın bordür.

Proje aşama kartları:

- Açık zeminde krem-beyaz kartlar.
- Büyük numara, serif başlık, kısa açıklama.
- Köşeler mümkün olduğunca keskin tutulmalı; aşırı yuvarlak kartlar bu dilde çalışmaz.

Liste satırları:

- Amaçlar ve hedefler gibi içerikler yatay satır düzeninde verilmeli.
- Her satırda numara ve açıklama olmalı.
- Çizgisel ayrımlar tablo hissi verir, akademik düzeni güçlendirir.

## 7. Görsel Süsleme

Süsleme sessiz olmalı, içeriği gölgelememelidir.

Kullanılabilecek öğeler:

- İnce altın çizgiler.
- Küçük baklava/diamond ayraçlar.
- Yarı saydam harita veya ağ dokusu.
- Kâğıt dokusu hissi.
- Koyu alanlarda düşük opaklıklı bordo derinlik.

Kaçınılması gerekenler:

- Parlak teknoloji gradientleri.
- Yuvarlak, modern SaaS kartları.
- Büyük ikon setleri.
- Aşırı animasyon.
- Aşırı parlak altın.
- Mor, neon mavi veya soğuk startup paletleri.

## 8. İçerik Tonu

Metin akademik fakat okunabilir olmalıdır.

Ton:

- Ciddi.
- Kaynak ve yöntem bilinci olan.
- Kurumsal.
- Abartısız.
- Projenin ilmî iddiasını açıkça taşıyan.

Uzun metinler:

- Giriş paragrafları iki kolon yapılabilir.
- Sorular numaralı kartlara bölünmelidir.
- Proje aşamaları kısa açıklamalı modüllere ayrılmalıdır.
- Ekip bilgisi hiyerarşik ama sade verilmelidir.

## 9. Responsive Davranış

Desktop:

- Hero büyük ve sinematik.
- İçerik geniş ama merkezde kontrollü.
- Kart gridleri iki veya dört kolon olabilir.

Tablet:

- Navigasyon iki satıra düşebilir.
- İki kolonlu metinler tek kolona döner.
- Proje aşamaları iki kolon olur.

Mobil:

- Hero hâlâ güçlü kalmalı.
- H1 okunabilir ama taşmayacak şekilde küçülür.
- Kartlar tek kolona düşer.
- Navigasyon linkleri küçük ve sarılabilir olur.
- Butonlar yan yana sığmazsa alt alta doğal akar.

## 10. Uygulama Notları

Bu tasarım dili mevcut uygulamada şu dosyalara işlendi:

- `app/page.tsx`: içerik mimarisi, bölümler ve tekrar eden bileşenler.
- `app/globals.css`: renk token'ları, tipografi, gridler, kartlar ve responsive davranış.
- `public/hero-atlas.png`: proje için üretilmiş hero görseli.

Yeni sayfa eklenirken aynı sistem korunmalıdır:

- Önce bölümün açık mı koyu mu olacağı belirlenir.
- Başlık `SectionTitle` ritmine bağlanır.
- İçerik ya iki kolon metin, ya numaralı kart, ya çizgisel liste olarak tasarlanır.
- Altın vurgu yalnızca hiyerarşi ve odak için kullanılır.
