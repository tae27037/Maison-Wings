const L = (cs, en) => ({ cs, en });

export const POSTS = [
  {
    id: "choose",
    date: "2026-10-20",
    min: 4,
    title: L(
      "Jak vybrat paruku: barva, délka a základna",
      "How to choose a wig: colour, length and cap",
    ),
    excerpt: L(
      "Tři otázky, které vám pomohou vybrat paruku, která bude vypadat přirozeně.",
      "Three questions that help you pick a wig that looks natural.",
    ),
    body: {
      cs: [
        "Začněte barvou. Zvolte odstín o tón světlejší, než jsou vaše kořínky. Působí přirozeněji a lépe ladí s pletí.",
        "Pak délka. Bob se snadno udržuje, dlouhé vlasy dodají objem, ale vyžadují víc péče.",
        "Nakonec základna. Lace front dává nejpřirozenější linii čela, vpletená základna je lehčí a levnější. Nejste si jistí? Paruku si můžete 3 dny vyzkoušet doma.",
      ],
      en: [
        "Start with colour. Pick a shade one tone lighter than your roots. It looks more natural and suits the skin better.",
        "Then length. A bob is easy to maintain, long hair adds volume but needs more care.",
        "Finally the cap. A lace front gives the most natural hairline, a wefted cap is lighter and cheaper. Not sure? You can try the wig at home for 3 days.",
      ],
    },
  },
  {
    id: "care",
    date: "2026-10-05",
    min: 3,
    title: L("Péče o paruku krok za krokem", "Wig care, step by step"),
    excerpt: L(
      "Jak paruku mýt, česat a sušit, aby vydržela co nejdéle.",
      "How to wash, brush and dry your wig so it lasts longer.",
    ),
    body: {
      cs: [
        "Paruku myjte v chladné vodě šetrným šamponem a nikdy ji netřete. Jemně ji promáchejte a nechte okapat.",
        "Česejte od konečků ke kořínkům, nejlépe kartáčem na paruky. Sušte na stojanu, ne na slunci.",
        "Pravé vlasy lze stylovat kulmou i žehličkou, termovlákno snese tepelné stylování do 180 °C.",
      ],
      en: [
        "Wash the wig in cool water with a gentle shampoo and never rub it. Rinse softly and let it drip.",
        "Brush from the ends up, ideally with a wig brush. Dry it on a stand, not in direct sun.",
        "Real hair can be styled with curling and straightening irons, heat-friendly fibre up to 180 °C.",
      ],
    },
  },
  {
    id: "office",
    date: "2026-09-18",
    min: 3,
    title: L("Den v naší kanceláři v Brně", "A day in our Brno office"),
    excerpt: L(
      "Seznamte se s týmem a nahlédněte, jak u nás vypadá běžný den.",
      "Meet the team and see what an ordinary day looks like here.",
    ),
    body: {
      cs: [
        "Ráno začíná kávou a kontrolou zásilek. Tereza připravuje paruky k vyzkoušení, Martin odpovídá na dotazy zákaznic a Eva vybírá nové modely.",
        "Odpoledne přicházejí zákaznice na konzultace. V salonku si paruky můžete vyzkoušet a s výběrem vám zdarma poradíme.",
        "Objednávku si můžete také vyzvednout osobně, stačí zvolit Osobní odběr v Brně.",
      ],
      en: [
        "The morning starts with coffee and checking parcels. Tereza prepares wigs for try-ons, Martin answers customer questions and Eva picks new models.",
        "In the afternoon customers come in for consultations. In our fitting room you can try wigs on and we help you choose, free of charge.",
        "You can also pick up your order in person, just choose Pick-up in Brno at checkout.",
      ],
    },
  },
];

export const TEAM = [
  {
    id: "eva",
    name: "Eva Nováková",
    photo: "/images/team/eva.jpg",
    role: L("Zakladatelka a stylistka", "Founder and stylist"),
    bio: L(
      "Paruky vybírá a testuje osobně. Ráda poradí s barvou i střihem.",
      "Chooses and tests every wig herself. Happy to advise on colour and cut.",
    ),
  },
  {
    id: "martin",
    name: "Martin Král",
    photo: "/images/team/martin.jpg",
    role: L("Péče o zákazníky", "Customer care"),
    bio: L(
      "Odpovídá na dotazy a pomáhá s objednávkami a vrácením.",
      "Answers questions and helps with orders and returns.",
    ),
  },
  {
    id: "tereza",
    name: "Tereza Dvořáková",
    photo: "/images/team/tereza.jpg",
    role: L("Technička paruk", "Wig technician"),
    bio: L(
      "Upravuje velikost, stříhá a připravuje paruky k vyzkoušení.",
      "Adjusts sizes, trims and prepares wigs for try-ons.",
    ),
  },
  {
    id: "jan",
    name: "Jan Svoboda",
    photo: "/images/team/jan.jpg",
    role: L("Sklad a doprava", "Warehouse and shipping"),
    bio: L(
      "Stará se, aby objednávka dorazila rychle a nepoškozená.",
      "Makes sure your order arrives quickly and undamaged.",
    ),
  },
];

export const OFFICE = {
  address: "Ukázková 12, 602 00 Brno",
  phone: "+420 000 000 000",
  email: "info@maison-wigs.example",
  lat: 49.1951,
  lon: 16.6068,
  hours: [
    { day: L("Pondělí až pátek", "Monday to Friday"), time: "9:00 – 17:00" },
    { day: L("Sobota", "Saturday"), time: "10:00 – 14:00" },
    { day: L("Neděle", "Sunday"), time: L("zavřeno", "closed") },
  ],
};
