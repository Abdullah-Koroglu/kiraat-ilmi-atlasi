export type Locale = "tr" | "en" | "ar";

export type TeamMember = {
  name: string;
  role: string;
  affiliation: string;
  image?: string;
};

export type TeamSection = {
  title: string;
  description: string;
  members: TeamMember[];
};

export type SiteContent = {
  locale: Locale;
  dir?: "ltr" | "rtl";
  navItems: { label: string; href: string }[];
  brandSubtitle: string;
  kicker: string;
  heroTitle: string;
  heroSubtitle: string;
  translationLinks: { label: string; href: string }[];
  primaryAction: string;
  secondaryAction: string;
  sectionTitles: {
    about: string;
    questions: string;
    stages: string;
    method: string;
    goals: string;
    team: string;
    contact: string;
  };
  about: string[];
  coreQuestions: string[];
  projectStages: { title: string; text: string }[];
  goals: string[];
  stats: { value: string; label: string }[];
  method: {
    firstTitle: string;
    firstText: string;
    secondTitle: string;
    secondText: string;
  };
  teamIntro: string;
  teamSections: TeamSection[];
  contact: {
    phoneLabel: string;
    phoneValue: string;
    addressLabel: string;
    addressValue: string;
    addressHref: string;
    emailLabel: string;
    emailValue: string;
  };
};

const sharedTeam = {
  tr: [
    {
      title: "Danışmanlar",
      description: "Projenin ilmî ve dijital çerçevesini şekillendiren danışman kadro.",
      members: [
        {
          name: "Prof. Dr. Mehmet Emin Maşalı",
          role: "Alan Danışmanı",
          affiliation: "Marmara Üniversitesi İlahiyat Fakültesi",
          image: "/people/Mehmet Emin MAŞALI.jpeg",
        },
        {
          name: "Dr. Yusuf Çelik",
          role: "Dijital Beşeri Bilimler Danışmanı",
          affiliation: "Vrije Universiteit Amsterdam",
          image: "/people/Yusuf ÇELİK.jpeg",
        },
      ],
    },
    {
      title: "Yürütücüler",
      description: "Akademik koordinasyon ve uygulama süreçlerini birlikte yürüten ekip.",
      members: [
        {
          name: "Arş. Gör. Furkan Akbulut",
          role: "Yürütücü",
          affiliation: "Marmara Üniversitesi İlahiyat Fakültesi",
          image: "/people/Furkan AKBULUT.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Eren Pilgir",
          role: "Yürütücü",
          affiliation: "Marmara Üniversitesi İlahiyat Fakültesi",
          image: "/people/Eren PİLGİR.jpeg",
        },
      ],
    },
    {
      title: "Yazılım",
      description: "Dijital atlasın arayüz, veri ve altyapı geliştirme süreçleri.",
      members: [
        {
          name: "Abdullah Köroğlu",
          role: "Yazılım Mühendisi",
          affiliation: "",
          image: "/people/abdullah koroglu.jpeg",
        },
      ],
    },
    {
      title: "Araştırmacılar",
      description:
        "Kıraat tarihi verisinin derlenmesi, tasnifi ve yorumlanmasında görev alan araştırma kadrosu.",
      members: [
        {
          name: "Öğr. Gör. Yunus Özgen",
          role: "Araştırmacı",
          affiliation: "Marmara Üniversitesi İlahiyat Fakültesi",
          image: "/people/Yunus ÖZGEN.jpeg",
        },
        {
          name: "Öğr. Gör. Adem Taş",
          role: "Araştırmacı",
          affiliation: "Kırklareli Üniversitesi İlahiyat Fakültesi",
          image: "/people/Adem TAŞ.jpeg",
        },
        {
          name: "Öğr. Gör. Atakan Türker",
          role: "Araştırmacı",
          affiliation: "Medeniyet Üniversitesi İlahiyat Fakültesi",
          image: "/people/Atakan TÜRKER.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Muhammet Lütfü Tatlısu",
          role: "Araştırmacı",
          affiliation: "Muş Alparslan Üniversitesi İlahiyat Fakültesi",
          image: "/people/Muhammet Lütfü TATLISU.jpeg",
        },
        {
          name: "Arş. Gör. Ebubekir Kaçan",
          role: "Araştırmacı",
          affiliation: "Medeniyet Üniversitesi İlahiyat Fakültesi",
          image: "/people/EBUBEKİR KAÇAN (45x60 mm).jpg.jpeg",
        },
        {
          name: "Arş. Gör. Azim Kartal",
          role: "Araştırmacı",
          affiliation: "Amasya Üniversitesi İlahiyat Fakültesi",
          image: "/people/Azim KARTAL.jpeg",
        },
        {
          name: "Arş. Gör. Hüseyin Çelikkol",
          role: "Araştırmacı",
          affiliation: "Çankırı Karatekin Üniversitesi İlahiyat Fakültesi",
          image: "/people/Hüseyin ÇELİKKOL.jpeg",
        },
        {
          name: "Arş. Gör. Ahmet Ökkeş Karaca",
          role: "Araştırmacı",
          affiliation: "Trabzon Üniversitesi Kur'an-ı Kerim Araştırmaları ve Kıraat İlmi Enstitüsü",
          image: "/people/Ahmet Ökkeş KARACA.jpeg",
        },
        {
          name: "Nurullah Kütük",
          role: "Araştırmacı",
          affiliation: "Marmara Üniversitesi Yüksek Lisans Öğrencisi",
          image: "/people/Nurullah KÜTÜK.jpeg",
        },
      ],
    },
  ] satisfies TeamSection[],
  en: [
    {
      title: "Advisors",
      description: "The advisory team shaping the scholarly and digital framework of the project.",
      members: [
        {
          name: "Prof. Dr. Mehmet Emin Maşalı",
          role: "Field Advisor",
          affiliation: "Marmara University Faculty of Theology",
          image: "/people/Mehmet Emin MAŞALI.jpeg",
        },
        {
          name: "Dr. Yusuf Çelik",
          role: "Digital Humanities Advisor",
          affiliation: "Vrije Universiteit Amsterdam",
          image: "/people/Yusuf ÇELİK.jpeg",
        },
      ],
    },
    {
      title: "Project Leads",
      description: "The team jointly coordinating the academic and operational workflow.",
      members: [
        {
          name: "Arş. Gör. Furkan Akbulut",
          role: "Project Lead",
          affiliation: "Marmara University Faculty of Theology",
          image: "/people/Furkan AKBULUT.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Eren Pilgir",
          role: "Project Lead",
          affiliation: "Marmara University Faculty of Theology",
          image: "/people/Eren PİLGİR.jpeg",
        },
      ],
    },
    {
      title: "Software",
      description: "Interface, data, and infrastructure development for the digital atlas.",
      members: [
        {
          name: "Abdullah Köroğlu",
          role: "Software Engineer",
          affiliation: "",
          image: "/people/abdullah koroglu.jpeg",
        },
      ],
    },
    {
      title: "Researchers",
      description:
        "The research team responsible for collecting, classifying, and interpreting qira'at historical data.",
      members: [
        {
          name: "Öğr. Gör. Yunus Özgen",
          role: "Researcher",
          affiliation: "Marmara University Faculty of Theology",
          image: "/people/Yunus ÖZGEN.jpeg",
        },
        {
          name: "Öğr. Gör. Adem Taş",
          role: "Researcher",
          affiliation: "Kırklareli University Faculty of Theology",
          image: "/people/Adem TAŞ.jpeg",
        },
        {
          name: "Öğr. Gör. Atakan Türker",
          role: "Researcher",
          affiliation: "Medeniyet University Faculty of Theology",
          image: "/people/Atakan TÜRKER.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Muhammet Lütfü Tatlısu",
          role: "Researcher",
          affiliation: "Muş Alparslan University Faculty of Theology",
          image: "/people/Muhammet Lütfü TATLISU.jpeg",
        },
        {
          name: "Arş. Gör. Ebubekir Kaçan",
          role: "Researcher",
          affiliation: "Medeniyet University Faculty of Theology",
          image: "/people/EBUBEKİR KAÇAN (45x60 mm).jpg.jpeg",
        },
        {
          name: "Arş. Gör. Azim Kartal",
          role: "Researcher",
          affiliation: "Amasya University Faculty of Theology",
          image: "/people/Azim KARTAL.jpeg",
        },
        {
          name: "Arş. Gör. Hüseyin Çelikkol",
          role: "Researcher",
          affiliation: "Çankırı Karatekin University Faculty of Theology",
          image: "/people/Hüseyin ÇELİKKOL.jpeg",
        },
        {
          name: "Arş. Gör. Ahmet Ökkeş Karaca",
          role: "Researcher",
          affiliation: "Trabzon University Institute for Qur'an Studies and Qira'at",
          image: "/people/Ahmet Ökkeş KARACA.jpeg",
        },
        {
          name: "Nurullah Kütük",
          role: "Researcher",
          affiliation: "Marmara University Master's Student",
          image: "/people/Nurullah KÜTÜK.jpeg",
        },
      ],
    },
  ] satisfies TeamSection[],
  ar: [
    {
      title: "المستشارون",
      description: "الفريق الاستشاري الذي يصوغ الإطار العلمي والرقمي للمشروع.",
      members: [
        {
          name: "Prof. Dr. Mehmet Emin Maşalı",
          role: "المستشار العلمي",
          affiliation: "كلية الإلهيات بجامعة مرمرة",
          image: "/people/Mehmet Emin MAŞALI.jpeg",
        },
        {
          name: "Dr. Yusuf Çelik",
          role: "مستشار الإنسانيات الرقمية",
          affiliation: "جامعة فريي أمستردام",
          image: "/people/Yusuf ÇELİK.jpeg",
        },
      ],
    },
    {
      title: "المشرفون التنفيذيون",
      description: "الفريق الذي يدير التنسيق الأكاديمي والتنفيذي للمشروع.",
      members: [
        {
          name: "Arş. Gör. Furkan Akbulut",
          role: "مشرف تنفيذي",
          affiliation: "كلية الإلهيات بجامعة مرمرة",
          image: "/people/Furkan AKBULUT.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Eren Pilgir",
          role: "مشرف تنفيذي",
          affiliation: "كلية الإلهيات بجامعة مرمرة",
          image: "/people/Eren PİLGİR.jpeg",
        },
      ],
    },
    {
      title: "البرمجيات",
      description: "تطوير الواجهة والبيانات والبنية التحتية للأطلس الرقمي.",
      members: [
        {
          name: "Abdullah Köroğlu",
          role: "مهندس برمجيات",
          affiliation: "",
          image: "/people/abdullah koroglu.jpeg",
        },
      ],
    },
    {
      title: "الباحثون",
      description: "الفريق البحثي المسؤول عن جمع بيانات تاريخ القراءات وتصنيفها وتحليلها.",
      members: [
        {
          name: "Öğr. Gör. Yunus Özgen",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة مرمرة",
          image: "/people/Yunus ÖZGEN.jpeg",
        },
        {
          name: "Öğr. Gör. Adem Taş",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة قرقلر إيلي",
          image: "/people/Adem TAŞ.jpeg",
        },
        {
          name: "Öğr. Gör. Atakan Türker",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة مدنيت",
          image: "/people/Atakan TÜRKER.jpeg",
        },
        {
          name: "Arş. Gör. Dr. Muhammet Lütfü Tatlısu",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة موش ألب أرسلان",
          image: "/people/Muhammet Lütfü TATLISU.jpeg",
        },
        {
          name: "Arş. Gör. Ebubekir Kaçan",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة مدنيت",
          image: "/people/EBUBEKİR KAÇAN (45x60 mm).jpg.jpeg",
        },
        {
          name: "Arş. Gör. Azim Kartal",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة أماسيا",
          image: "/people/Azim KARTAL.jpeg",
        },
        {
          name: "Arş. Gör. Hüseyin Çelikkol",
          role: "باحث",
          affiliation: "كلية الإلهيات بجامعة جانقيري قره تكين",
          image: "/people/Hüseyin ÇELİKKOL.jpeg",
        },
        {
          name: "Arş. Gör. Ahmet Ökkeş Karaca",
          role: "باحث",
          affiliation: "معهد دراسات القرآن وعلم القراءات بجامعة طرابزون",
          image: "/people/Ahmet Ökkeş KARACA.jpeg",
        },
        {
          name: "Nurullah Kütük",
          role: "باحث",
          affiliation: "طالب ماجستير بجامعة مرمرة",
          image: "/people/Nurullah KÜTÜK.jpeg",
        },
      ],
    },
  ] satisfies TeamSection[],
};

export const siteContent: Record<Locale, SiteContent> = {
  tr: {
    locale: "tr",
    dir: "ltr",
    navItems: [
      { label: "Hakkımızda", href: "#hakkimizda" },
      { label: "Sorular", href: "#sorular" },
      { label: "Aşamalar", href: "#asamalar" },
      { label: "Yöntem", href: "#yontem" },
      { label: "Ekip", href: "#ekip" },
      { label: "İletişim", href: "#iletisim" },
    ],
    brandSubtitle: "Kurrâ / Dönemler / Şehirler / Kıraatler",
    kicker: "Tabakat literatürü merkezli dijital kıraat tarihi",
    heroTitle: "Kıraat İlmi Atlası",
    heroSubtitle:
      "Hoca-talebe ilişkilerini, şehirlerin kıraat hafızasını ve coğrafyalar arası ilmî hareketliliği ağlar hâlinde görünür kılan akademik bir dijital beşerî bilimler projesi.",
    translationLinks: [
      { label: "For English version click here", href: "/en" },
      { label: "Arabic version click here", href: "/ar" },
    ],
    primaryAction: "Projeyi İncele",
    secondaryAction: "Atlas Eksenleri",
    sectionTitles: {
      about: "Hakkımızda",
      questions: "Temel Sorular",
      stages: "Proje Aşamaları",
      method: "Araştırma Kapsamı ve Yöntem",
      goals: "Amaç ve Hedefler",
      team: "Proje Ekibi",
      contact: "İletişim",
    },
    about: [
      "Kıraat İlmi Atlası projesi, İslamî ilimlerin en köklü disiplinlerinden biri olan kıraat ilminin tarihsel serüvenini tabakat literatürü merkeze alınarak yeniden okumayı hedeflemektedir.",
      "Proje, dijital beşerî bilimlerin sunduğu imkânlarla âlimler arasındaki hoca-talebe ilişkilerini ağlar hâlinde somutlaştırmayı; şehirlerin kıraat hafızasını ve coğrafyalar arası ilmî hareketliliği görünür kılmayı amaçlamaktadır.",
      "Proje, Marmara Üniversitesi İlahiyat Fakültesi Kur'an-ı Kerim Okuma ve Kıraat İlmi Anabilim Dalı bünyesinde atılan akademik adımlardan beslenmektedir. Prof. Dr. Mehmet Emin Maşalı hocamızın tabakat literatürü üzerinden kıraat tarihini okuma vizyonu, bu çalışmanın fikrî zeminini oluşturmuştur.",
      "Eren Pilgir ve Furkan Akbulut'un fakülte çatısı altında iki yılı aşkın süredir devam eden ortak ilmî gayretleri, yoğun akademik istişareleri ve teşrikimesaileri, teorik neticelerin somut bir dijital platforma dönüşmesine imkân sağlamıştır.",
    ],
    coreQuestions: [
      "Tüm kurrâ dikkate alındığında hoca-talebe bağlantısallığı nasıl oluşmuştur?",
      "Hoca-talebe ilişkisi şehirlerin kıraat birikimini nasıl şekillendirmiştir?",
      "Hangi şehirler kıraat birikiminin oluşumunda tarihî olarak ön plana çıkmıştır?",
      "Şehirlerdeki ilim havzalarının inşasında hangi kurrâ kurucu roller üstlenmiştir?",
      "İlim havzaları arasında kıraat geçişkenlikleri nasıl gerçekleşmiştir?",
      "Kıraat âlimlerinin tercihleri dönemin kıraat anlayışıyla ne ölçüde tutarlıdır?",
    ],
    projectStages: [
      {
        title: "Kurrâ",
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
    ],
    goals: [
      "Âlimler arasındaki hoca-talebe ilişkilerini tespit ederek kıraat ilminin yayılım ağlarını görünür kılmak.",
      "Tahammül ve edâ kavramlarını dikkate alarak kıraat aktarımlarının keyfiyetini değerlendirmek.",
      "Şehirlerin kıraat hafızasını ve ilmî birikimini tarihsel bir mekân-ilim ilişkisi içinde analiz etmek.",
      "İlim havzaları ve şehirler arasında gerçekleşen kıraat geçişkenliklerini coğrafi rotalarla anlamlandırmak.",
    ],
    stats: [
      { value: "4", label: "Ana Eksen" },
      { value: "SNA", label: "Ağ Analizi" },
      { value: "Tabakat", label: "Veri Zemini" },
    ],
    method: {
      firstTitle: "Temel Veri Kaynağı",
      firstText:
        "Hoca-talebe ilişkilerini tespit etmede ana kaynak olarak İbnü'l-Cezerî'nin Gâyetü'n-nihâye fî tabakâti'l-kurrâ adlı eseri seçilmiştir. Biyografiler oluşturulurken farklı tabakat literatüründen de istifade edilecektir.",
      secondTitle: "Sosyal Ağ Analizi",
      secondText:
        "Proje, Sosyal Ağ Analizi yöntemiyle karmaşık ilmî ilişkileri daha okunabilir ağlara dönüştürür. Bu yöntem, kıraat ilmindeki hoca-talebe ağını veri temelli şekilde ortaya koymak için kullanılacaktır.",
    },
    teamIntro:
      "Kıraat İlmi Atlası, klasik tabakat birikimini dijital yöntemlerle yeniden yorumlayan disiplinler arası bir ekip çalışması olarak şekillenmektedir.",
    teamSections: sharedTeam.tr,
    contact: {
      phoneLabel: "Telefon",
      phoneValue: "+90 216 777 47 64",
      addressLabel: "Adres",
      addressValue:
        "Marmara Üniversitesi İlahiyat Fakültesi, Altunizade, Mahir İz Caddesi, 34662, Üsküdar / İstanbul",
      addressHref:
        "https://www.google.com/maps?vet=10CAAQoqAOahcKEwj4m4SjobKVAxUAAAAAHQAAAAAQDA..i&rlz=1C1ONGR_trTR1096TR1096&pvq=CgsvZy8xdGp5cXlueCIwCipNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2kQAhgD&lqi=CmdNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2ksIEFsdHVuaXphZGUsIE1haGlyIMSweiBDYWRkZXNpLCAzNDY2Miwgw5xza8O8ZGFyIC8gxLBzdGFuYnVsSJzt7Y7mgICACFqGARAAEAEQAhADGAAYARgCGAMYBBgFGAYYBxgIGAkYCiJebWFybWFyYSDDvG5pdmVyc2l0ZXNpIGlsYWhpeWF0IGZha8O8bHRlc2kgYWx0dW5pemFkZSBtYWhpciBpeiBjYWRkZXNpIDM0NjYyIMO8c2vDvGRhciBpc3RhbmJ1bCoGCAIQABADkgEKdW5pdmVyc2l0eQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cab7fa2c0a58bd:0xdbc2b4fcc68716f6",
      emailLabel: "E-posta",
      emailValue: "projekiraatilmiatlasi@gmail.com",
    },
  },
  en: {
    locale: "en",
    dir: "ltr",
    navItems: [
      { label: "About", href: "#about" },
      { label: "Questions", href: "#questions" },
      { label: "Stages", href: "#stages" },
      { label: "Method", href: "#method" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    brandSubtitle: "Qurrāʾ / Periods / Cities / Readings",
    kicker: "A digital history of qira'at centered on tabaqat literature",
    heroTitle: "Atlas of Qira'at Studies",
    heroSubtitle:
      "A scholarly digital humanities project that renders teacher-student relationships, the qira'at memory of cities, and transregional scholarly mobility visible as interconnected networks.",
    translationLinks: [
      { label: "For Turkish version click here", href: "/" },
      { label: "For Arabic version click here", href: "/ar" },
    ],
    primaryAction: "Explore the Project",
    secondaryAction: "Atlas Axes",
    sectionTitles: {
      about: "About",
      questions: "Core Questions",
      stages: "Project Stages",
      method: "Research Scope and Method",
      goals: "Goals and Objectives",
      team: "Project Team",
      contact: "Contact",
    },
    about: [
      "The Atlas of Qira'at Studies seeks to reinterpret the historical trajectory of qira'at, one of the most deeply rooted disciplines of Islamic scholarship, through the lens of tabaqat literature.",
      "The project aims to make teacher-student relationships among scholars tangible as networks through the tools of digital humanities, while also highlighting the qira'at memory of cities and patterns of scholarly mobility across regions.",
      "The project draws on academic initiatives developed within the Department of Qur'an Recitation and Qira'at Studies at Marmara University Faculty of Theology. The intellectual basis of this work was shaped by Prof. Dr. Mehmet Emin Maşalı's vision of reading qira'at history through tabaqat literature.",
      "The sustained collaborative effort, scholarly consultation, and close teamwork of Eren Pilgir and Furkan Akbulut over more than two years have made it possible to transform theoretical insights into a concrete digital platform.",
    ],
    coreQuestions: [
      "How does teacher-student connectivity emerge when all qurrāʾ are considered together?",
      "How did teacher-student relationships shape the qira'at accumulation of cities?",
      "Which cities historically stood out in the formation of qira'at knowledge?",
      "Which qurrāʾ played formative roles in the construction of scholarly basins within cities?",
      "How did qira'at transmissions occur between scholarly basins?",
      "To what extent were the preferences of qira'at scholars consistent with the qira'at understanding of their period?",
    ],
    projectStages: [
      {
        title: "Qurrāʾ",
        text: "Biographical data of scholars who transmitted qira'at variants are examined, and teacher-student relationships are mapped through digital network analysis.",
      },
      {
        title: "Periods",
        text: "The history of qira'at is subjected to a new tabaqat-centered periodization, and processes of school formation are situated within their historical context.",
      },
      {
        title: "Cities",
        text: "Centers where qira'at education concentrated are read through data-driven analysis of scholarly journeys and geographic mobility.",
      },
      {
        title: "Readings",
        text: "The variants systematized through person, time, and place variables, together with the preferences of qira'at imams, are classified within a digital database.",
      },
    ],
    goals: [
      "To identify teacher-student relationships among scholars and make the transmission networks of qira'at visible.",
      "To evaluate the quality of qira'at transmission by taking the concepts of tahammul and adāʾ into account.",
      "To analyze the qira'at memory and scholarly accumulation of cities within a historical relationship between space and knowledge.",
      "To interpret qira'at mobility between scholarly basins and cities through geographic routes.",
    ],
    stats: [
      { value: "4", label: "Main Axes" },
      { value: "SNA", label: "Network Analysis" },
      { value: "Tabaqat", label: "Data Basis" },
    ],
    method: {
      firstTitle: "Primary Data Source",
      firstText:
        "Ibn al-Jazari's Ghāyat al-Nihāya fī Tabaqāt al-Qurrāʾ has been selected as the main source for identifying teacher-student relationships. Other tabaqat sources will also be used while constructing biographies.",
      secondTitle: "Social Network Analysis",
      secondText:
        "The project uses Social Network Analysis to transform complex scholarly relations into more legible networks. This method will be employed to reveal the teacher-student network in qira'at in a data-driven way.",
    },
    teamIntro:
      "The Atlas of Qira'at Studies is taking shape as an interdisciplinary team effort that reinterprets the classical tabaqat tradition through digital methods.",
    teamSections: sharedTeam.en,
    contact: {
      phoneLabel: "Phone",
      phoneValue: "+90 216 777 47 64",
      addressLabel: "Address",
      addressValue:
        "Marmara University Faculty of Theology, Altunizade, Mahir İz Avenue, 34662, Üsküdar / Istanbul",
      addressHref:
        "https://www.google.com/maps?vet=10CAAQoqAOahcKEwj4m4SjobKVAxUAAAAAHQAAAAAQDA..i&rlz=1C1ONGR_trTR1096TR1096&pvq=CgsvZy8xdGp5cXlueCIwCipNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2kQAhgD&lqi=CmdNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2ksIEFsdHVuaXphZGUsIE1haGlyIMSweiBDYWRkZXNpLCAzNDY2Miwgw5xza8O8ZGFyIC8gxLBzdGFuYnVsSJzt7Y7mgICACFqGARAAEAEQAhADGAAYARgCGAMYBBgFGAYYBxgIGAkYCiJebWFybWFyYSDDvG5pdmVyc2l0ZXNpIGlsYWhpeWF0IGZha8O8bHRlc2kgYWx0dW5pemFkZSBtYWhpciBpeiBjYWRkZXNpIDM0NjYyIMO8c2vDvGRhciBpc3RhbmJ1bCoGCAIQABADkgEKdW5pdmVyc2l0eQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cab7fa2c0a58bd:0xdbc2b4fcc68716f6",
      emailLabel: "Email",
      emailValue: "projekiraatilmiatlasi@gmail.com",
    },
  },
  ar: {
    locale: "ar",
    dir: "rtl",
    navItems: [
      { label: "حول المشروع", href: "#about" },
      { label: "الأسئلة", href: "#questions" },
      { label: "المراحل", href: "#stages" },
      { label: "المنهج", href: "#method" },
      { label: "الفريق", href: "#team" },
      { label: "التواصل", href: "#contact" },
    ],
    brandSubtitle: "القراء / الفترات / المدن / القراءات",
    kicker: "تاريخ رقمي لعلم القراءات بالاعتماد على كتب الطبقات",
    heroTitle: "أطلس علم القراءات",
    heroSubtitle:
      "مشروع أكاديمي في الإنسانيات الرقمية يُظهر علاقات الشيخ والتلميذ، والذاكرة القرائية للمدن، والحركة العلمية بين الأقاليم في صورة شبكات مترابطة.",
    translationLinks: [
      { label: "للنسخة التركية اضغط هنا", href: "/" },
      { label: "For English version click here", href: "/en" },
    ],
    primaryAction: "استكشف المشروع",
    secondaryAction: "محاور الأطلس",
    sectionTitles: {
      about: "حول المشروع",
      questions: "الأسئلة الأساسية",
      stages: "مراحل المشروع",
      method: "نطاق البحث ومنهجه",
      goals: "الأهداف والغايات",
      team: "فريق المشروع",
      contact: "التواصل",
    },
    about: [
      "يهدف مشروع أطلس علم القراءات إلى إعادة قراءة المسار التاريخي لعلم القراءات، وهو أحد أرسخ فروع العلوم الإسلامية، من خلال جعل كتب الطبقات محورًا أساسيًا.",
      "ويعمل المشروع على تجسيد علاقات الشيخ والتلميذ بين العلماء في صورة شبكات عبر أدوات الإنسانيات الرقمية، مع إبراز الذاكرة القرائية للمدن وحركة العلم بين الأقاليم.",
      "وينطلق المشروع من المبادرات الأكاديمية التي نشأت في قسم قراءة القرآن وعلم القراءات بكلية الإلهيات في جامعة مرمرة. وقد تشكل الأساس الفكري لهذا العمل من رؤية الأستاذ الدكتور محمد أمين معشالي لقراءة تاريخ القراءات من خلال كتب الطبقات.",
      "كما أن الجهد العلمي المشترك، والمشاورات الأكاديمية المكثفة، والعمل المتواصل بين إرين بيلغير وفركان أكبولوت لأكثر من عامين، أتاح تحويل النتائج النظرية إلى منصة رقمية ملموسة.",
    ],
    coreQuestions: [
      "كيف تتشكل شبكة الاتصال بين الشيخ والتلميذ عند النظر إلى جميع القراء معًا؟",
      "كيف أسهمت علاقات الشيخ والتلميذ في تشكيل الرصيد القرائي للمدن؟",
      "ما المدن التي برزت تاريخيًا في تكوّن المعرفة القرائية؟",
      "أي القراء أدوا أدوارًا تأسيسية في بناء الأحواض العلمية داخل المدن؟",
      "كيف حدثت انتقالات القراءات بين الأحواض العلمية؟",
      "إلى أي مدى كانت اختيارات علماء القراءات منسجمة مع الفهم القرائي في عصرهم؟",
    ],
    projectStages: [
      {
        title: "القراء",
        text: "تُدرس البيانات البيوغرافية للعلماء الذين نقلوا وجوه القراءات، وتُرسم علاقات الشيخ والتلميذ عبر تحليل الشبكات الرقمية.",
      },
      {
        title: "الفترات",
        text: "يُعاد تقسيم تاريخ القراءات ضمن تأطير جديد قائم على الطبقات، وتوضع مسارات التشكل المدرسي في سياقها التاريخي.",
      },
      {
        title: "المدن",
        text: "تُقرأ المراكز التي تركز فيها تعليم القراءات من خلال تحليل قائم على البيانات للرحلات العلمية والحركية الجغرافية.",
      },
      {
        title: "القراءات",
        text: "تُصنف الأوجه التي انتظمت وفق متغيرات الشخص والزمان والمكان، مع اختيارات أئمة القراءات، ضمن قاعدة بيانات رقمية.",
      },
    ],
    goals: [
      "تحديد علاقات الشيخ والتلميذ بين العلماء وإظهار شبكات انتشار علم القراءات.",
      "تقييم كيفية نقل القراءات مع مراعاة مفهومي التحمل والأداء.",
      "تحليل الذاكرة القرائية والتراكم العلمي للمدن ضمن العلاقة التاريخية بين المكان والعلم.",
      "تفسير انتقالات القراءات بين الأحواض العلمية والمدن عبر المسارات الجغرافية.",
    ],
    stats: [
      { value: "4", label: "محاور رئيسية" },
      { value: "SNA", label: "تحليل الشبكات" },
      { value: "طبقات", label: "قاعدة البيانات" },
    ],
    method: {
      firstTitle: "المصدر الرئيس للبيانات",
      firstText:
        "تم اختيار كتاب غاية النهاية في طبقات القراء لابن الجزري مصدرًا أساسيًا لتحديد علاقات الشيخ والتلميذ. كما سيُستفاد من مصادر طبقات أخرى عند بناء التراجم.",
      secondTitle: "تحليل الشبكات الاجتماعية",
      secondText:
        "يستخدم المشروع تحليل الشبكات الاجتماعية لتحويل العلاقات العلمية المعقدة إلى شبكات أكثر وضوحًا. وستُستخدم هذه المنهجية لإظهار شبكة الشيخ والتلميذ في علم القراءات بصورة قائمة على البيانات.",
    },
    teamIntro:
      "يتشكل أطلس علم القراءات بوصفه جهدًا جماعيًا متعدد التخصصات يعيد تفسير تراث الطبقات الكلاسيكي عبر الوسائل الرقمية.",
    teamSections: sharedTeam.ar,
    contact: {
      phoneLabel: "الهاتف",
      phoneValue: "+90 216 777 47 64",
      addressLabel: "العنوان",
      addressValue:
        "كلية الإلهيات بجامعة مرمرة، ألتونيزاده، شارع ماهر إز، 34662، أوسكودار / إسطنبول",
      addressHref:
        "https://www.google.com/maps?vet=10CAAQoqAOahcKEwj4m4SjobKVAxUAAAAAHQAAAAAQDA..i&rlz=1C1ONGR_trTR1096TR1096&pvq=CgsvZy8xdGp5cXlueCIwCipNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2kQAhgD&lqi=CmdNYXJtYXJhIMOcbml2ZXJzaXRlc2kgxLBsYWhpeWF0IEZha8O8bHRlc2ksIEFsdHVuaXphZGUsIE1haGlyIMSweiBDYWRkZXNpLCAzNDY2Miwgw5xza8O8ZGFyIC8gxLBzdGFuYnVsSJzt7Y7mgICACFqGARAAEAEQAhADGAAYARgCGAMYBBgFGAYYBxgIGAkYCiJebWFybWFyYSDDvG5pdmVyc2l0ZXNpIGlsYWhpeWF0IGZha8O8bHRlc2kgYWx0dW5pemFkZSBtYWhpciBpeiBjYWRkZXNpIDM0NjYyIMO8c2vDvGRhciBpc3RhbmJ1bCoGCAIQABADkgEKdW5pdmVyc2l0eQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cab7fa2c0a58bd:0xdbc2b4fcc68716f6",
      emailLabel: "البريد الإلكتروني",
      emailValue: "projekiraatilmiatlasi@gmail.com",
    },
  },
};
