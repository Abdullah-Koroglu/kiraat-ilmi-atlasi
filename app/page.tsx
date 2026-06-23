const navItems = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Sorular", href: "#sorular" },
  { label: "Aşamalar", href: "#asamalar" },
  { label: "Yöntem", href: "#yontem" },
  { label: "Ekip", href: "#ekip" },
];

const coreQuestions = [
  "Tüm kurrâ dikkate alındığında hoca-talebe bağlantısallığı nasıl oluşmuştur?",
  "Hoca-talebe ilişkisi şehirlerin kıraat birikimini nasıl şekillendirmiştir?",
  "Hangi şehirler kıraat birikiminin oluşumunda tarihî olarak ön plana çıkmıştır?",
  "Şehirlerdeki ilim havzalarının inşasında hangi kurrâ kurucu roller üstlenmiştir?",
  "İlim havzaları arasında kıraat geçişkenlikleri nasıl gerçekleşmiştir?",
  "Kıraat âlimlerinin tercihleri dönemin kıraat anlayışıyla ne ölçüde tutarlıdır?",
];

const projectStages = [
  {
    title: "Kurrâ Bağlantısallığı",
    text: "Kıraat farklılıklarının intikalini sağlayan âlimlerin biyografik verileri incelenir; hoca-talebe ilişkileri dijital ağ analiziyle haritalandırılır.",
  },
  {
    title: "Dönemler",
    text: "Kıraat tarihi tabakat merkezli yeni bir dönemlendirmeye tabi tutulur ve ekolleşme süreçleri tarihsel bağlamı içinde konumlandırılır.",
  },
  {
    title: "Şehirler",
    text: "Kıraat eğitiminin temerküz ettiği merkezler, ilmî seyahatler ve coğrafi geçişkenlikler üzerinden veri temelli biçimde okunur.",
  },
  {
    title: "Kıraatler",
    text: "Şahıs, zaman ve mekân değişkenleriyle sistemleşen vecihler ve kıraat imamlarının ihtiyârları dijital veri tabanında tasnif edilir.",
  },
];

const goals = [
  "Âlimler arasındaki hoca-talebe ilişkilerini tespit ederek kıraat ilminin yayılım ağlarını görünür kılmak.",
  "Tahammül ve edâ kavramlarını dikkate alarak kıraat aktarımlarının keyfiyetini değerlendirmek.",
  "Şehirlerin kıraat hafızasını ve ilmî birikimini tarihsel bir mekân-ilim ilişkisi içinde analiz etmek.",
  "İlim havzaları ve şehirler arasında gerçekleşen kıraat geçişkenliklerini coğrafi rotalarla anlamlandırmak.",
];

const stats = [
  { value: "4", label: "Ana Eksen" },
  { value: "SNA", label: "Ağ Analizi" },
  { value: "Tabakat", label: "Veri Zemini" },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Ana menü">
        <a className="brand" href="#hero">
          <span>Kıraat İlmi Atlası</span>
          <small>Kurrâ / Dönemler / Şehirler / Kıraatler</small>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="kicker">Tabakat literatürü merkezli dijital kıraat tarihi</p>
          <h1>Kıraat İlmi Atlası</h1>
          <p className="hero-subtitle">
            Hoca-talebe ilişkilerini, şehirlerin kıraat hafızasını ve coğrafyalar arası ilmî
            hareketliliği ağlar hâlinde görünür kılan akademik bir dijital beşerî bilimler projesi.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#hakkimizda">
              Projeyi İncele
            </a>
            <a className="secondary-action" href="#asamalar">
              Atlas Eksenleri
            </a>
          </div>
        </div>
        <div className="hero-stats" aria-label="Proje özeti">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="hakkimizda" className="section light-section">
        <SectionTitle eyebrow="◆" title="Hakkımızda" />
        <div className="text-grid">
          <p>
            Kıraat İlmi Atlası projesi, İslamî ilimlerin en köklü disiplinlerinden biri olan
            kıraat ilminin tarihsel serüvenini tabakat literatürü merkeze alınarak yeniden okumayı
            hedeflemektedir.
          </p>
          <p>
            Proje, dijital beşerî bilimlerin sunduğu imkânlarla âlimler arasındaki hoca-talebe
            ilişkilerini ağlar hâlinde somutlaştırmayı; şehirlerin kıraat hafızasını ve
            coğrafyalar arası ilmî hareketliliği görünür kılmayı amaçlamaktadır.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <SectionTitle eyebrow="◆" title="Yola Çıkış Noktamız" tone="dark" />
        <div className="origin-layout">
          <p>
            Proje, Marmara Üniversitesi İlahiyat Fakültesi Kur'an-ı Kerim Okuma ve Kıraat İlmi
            Anabilim Dalı bünyesinde atılan akademik adımlardan beslenmektedir. Prof. Dr. Mehmet
            Emin Maşalı hocamızın tabakat literatürü üzerinden kıraat tarihini okuma vizyonu, bu
            çalışmanın fikrî zeminini oluşturmuştur.
          </p>
          <p>
            Eren Pilgir ve Furkan Akbulut'un fakülte çatısı altında iki yılı aşkın süredir devam
            eden ortak ilmî gayretleri, yoğun akademik istişareleri ve teşrikimesaileri, teorik
            neticelerin somut bir dijital platforma dönüşmesine imkân sağlamıştır.
          </p>
        </div>
      </section>

      <section id="sorular" className="section questions-section">
        <SectionTitle eyebrow="◆" title="Temel Sorular" tone="dark" />
        <div className="question-grid">
          {coreQuestions.map((question, index) => (
            <article className="numbered-card" key={question}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="asamalar" className="section light-section">
        <SectionTitle eyebrow="◆" title="Proje Aşamaları" />
        <div className="stage-grid">
          {projectStages.map((stage, index) => (
            <article className="stage-card" key={stage.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="yontem" className="section method-section">
        <SectionTitle eyebrow="◆" title="Araştırma Kapsamı ve Yöntem" tone="dark" />
        <div className="method-grid">
          <article>
            <h3>Temel Veri Kaynağı</h3>
            <p>
              Hoca-talebe ilişkilerini tespit etmede ana kaynak olarak İbnü'l-Cezerî'nin
              Gâyetü'n-nihâye fî tabakâti'l-kurrâ adlı eseri seçilmiştir. Biyografiler
              oluşturulurken farklı tabakat literatüründen de istifade edilecektir.
            </p>
          </article>
          <article>
            <h3>Sosyal Ağ Analizi</h3>
            <p>
              Proje, Sosyal Ağ Analizi yöntemiyle karmaşık ilmî ilişkileri daha okunabilir ağlara
              dönüştürür. Bu yöntem, kıraat ilmindeki hoca-talebe ağını veri temelli şekilde
              ortaya koymak için kullanılacaktır.
            </p>
          </article>
        </div>
      </section>

      <section className="section goals-section">
        <SectionTitle eyebrow="◆" title="Amaç ve Hedefler" />
        <div className="goal-list">
          {goals.map((goal, index) => (
            <div key={goal} className="goal-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ekip" className="section dark-section final-section">
        <SectionTitle eyebrow="◆" title="Proje Ekibi" tone="dark" />
        <div className="team-grid">
          <article>
            <span>Danışman</span>
            <h3>Prof. Dr. Mehmet Emin Maşalı</h3>
          </article>
          <article>
            <span>Yürütücüler</span>
            <h3>Arş. Gör. Furkan Akbulut</h3>
            <h3>Arş. Gör. Dr. Eren Pilgir</h3>
          </article>
          <article>
            <span>Araştırmacılar</span>
            <h3>Öğr. Gör. Yunus Özgen</h3>
          </article>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`section-title ${tone === "dark" ? "section-title-dark" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
