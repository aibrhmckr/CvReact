
import Cv from "./components/Cv";

const hakkimdaParagraph =
  "Çalışmaya hevesli, bildiğini uygulamayı çok seven; bilmediğini ise öğrenmek için can atan bir karaktere sahibim. Çevremdeki insanlarla uyum içerisinde ilerleyebilen; durum karışıklıklarında ise ortak bir çözüm yolu bulmaya çalışırım. Çalıştığı iş yerinde maksimum verimi almak isterim ve bunun için büyük çaba sarf ederim.";
const hobbieParagraf =
  "Hobilerim: Futbol,voleybol oynamaktan; koşu yapmaktan, arkadaşlar ile aktivite, bilgisayar oyunları be bilgisayar donanımları ile ilgilenmek en sevdiğim hobilerim.";
const sonP =
  "Kendimi yazılımda sürekli geliştirmek ve akabinde ise her zaman insanoğlunun ihtiyacı olacak yazılım ve sağlık sektörünü bir arada olduğu bir uygulama geliştirmek. İyi bir yazılımcı olup, aynı zamanda da oyun geliştiricisi olmak ve bu sayede hikayesini planladığım bir oyunu hayata geçirmek. Bulunduğum ve bulunacağım şirkette, sektörün ihtiyaçlarının en iyi derecede karşılanmasını sağlamak.";
const valueList = [
  {
    id: "hakkimda",
    text: hakkimdaParagraph,
    title: "Hakkımda",
    hobbie: hobbieParagraf,
  },
  {
    id: "egitim",
    title: "Eğitim",
    o1: "Trakya Üniversitesi Bilgisayar Mühendisliği (2019-)",
    o1n: "Not Ortalaması 3.43 (4 üzerinden)",
    o2: "Hamdi Bozbağ Anadolu Lisesi (2014-2018)",
    o3: "Aksu Seka İlköğretim Okulu (2006-2014)",
  },
  {
    id: "yetenek",
    title: "Yetenekler ve Alınan Dersler",
    a1: "Proje döngüsü yönetimi",
    a2: "C (Orta seviye)",
    a3: "Assembly (Başlangıç)",
    a4: "Java (Başlangıç)",
    a5: "İngilizce (Orta Seviye)",
    a6: "C# (Başlangıç)",
    a7: ".Net (Başlangıç)",
    y1: "Takım çalışmasına önem veren",
    y2: "Kendini geliştirmek isteyen",
    y3: "İş verimini ve gücünü arttıran",
    y4: "Öğrenmeye ve çalışmaya istekli",
    y5: "Sorun karşısında çözüm sunabilen",
    text: sonP,
  },
  {
    id: "iletisim",
    title: "İletişim Bilgileri",
    dogumt: new Date(2000, 7, 9),
    adres: "Aksu Mahallesi Mehmet izmen Caddesi NO:140/6 Merkez/Giresun",
    tel: "0552 574 00 28",
    eposta: "aibrhmckrofficial@gmail.com",
  },
];
function App() {
  return (
    <div>
      <Cv values={valueList} />
    </div>
  );
}

export default App;
