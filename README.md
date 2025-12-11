# RoadGrip – Akıllı Oto Lastik Satış ve Filtreleme Sitesi

Kocaeli Üniversitesi – Teknoloji Fakültesi  
Bilişim Sistemleri Mühendisliği – 3. Sınıf  
Ders: Web Tasarımı (TBL303)  
Dönem: 2025–2026 Güz

Bu repo, farklı markalardan **araç lastiklerinin listelendiği** ve **araca göre lastik filtreleme** özelliği sunan, responsive bir web sitesi projesini içermektedir. Proje, hazır bir e-ticaret şablonunun **“oto lastik satış sitesi”** senaryosuna uyarlanmasıyla geliştirilmiştir.

----

## Proje Tanımı

**RoadGrip**, kullanıcılara;

- Araçlarına uygun lastik bulma,
- Farklı marka ve modelleri karşılaştırma,
- Sezona göre (yaz/kış/4 mevsim) lastik seçimi yapma

imkanı veren, vitrin mantığında tasarlanmış bir **oto lastik satış ve tanıtım web sitesidir**.

Site, lastik mağazalarının veya servislerin online ortamda ürünlerini sergilemesini hedefleyen, **front-end odaklı** bir çalışmadır (gerçek ödeme altyapısı veya admin panel veritabanı entegrasyonu bulunmamaktadır).

---

## Proje Amacı

Bu projenin temel amaçları şunlardır:

- Hazır bir **Bootstrap tabanlı e-ticaret şablonunu** inceleyip,  
  **“lastik satış sitesi”** senaryosuna göre özelleştirmek.
- Kullanıcıların **araç marka/model bilgisine göre lastik filtreleyebildiği** bir arayüz tasarlamak.
- Web Tasarımı dersi kapsamında;
  - Responsive tasarım,
  - Grid yapısı,
  - Navigasyon menüleri,
  - Formlar ve filtreleme alanları
  gibi temel kavramları uygulamalı olarak göstermek.

---

## Öne Çıkan Özellikler

### 1. Araç Bazlı Lastik Filtreleme

- Kullanıcı; **araç markası, model, üretim yılı** gibi bilgileri seçerek uygun lastikleri listeleyebilir.
- Filtreleme alanlarında:
  - Araç Markası
  - Araç Modeli
  - Sezon (Yaz / Kış / 4 Mevsim)
  - Jant / Ebat bilgisi
  - Fiyat aralığı  
  gibi kriterler yer almaktadır (dummy/veri tabanına bağlı olmayan senaryo).

### 2. Ürün Kataloğu

- Farklı markalardan lastikler listelenmiştir:
  - Örneğin: Michelin, Pirelli, Bridgestone, Lassa vb. (örnek veri).
- Her ürün kartında:
  - Ürün adı
  - Marka
  - Ebat bilgisi (ör: 205/55 R16)
  - Sezon bilgisi
  - Fiyat (örnek/dummy değer)
  - Detay sayfasına yönlendiren buton

### 3. Ürün Detay Sayfası

- Seçilen lastiğin:
  - Detaylı teknik bilgileri
  - Kullanım alanı (binek/SUV/ticari),
  - Sezon,
  - Islak zemin, yakıt verimliliği gibi bilgilere yer verilebilecek bir yapı kurgulanmıştır.
- “Sepete ekle” / “Teklif al” gibi butonlar **front-end seviyesinde** tasarlanmıştır (arka planda gerçek işlem yoktur).

### 4. Responsive Tasarım

- Site; **mobil, tablet ve masaüstü** ekranlarda kullanılabilir şekilde tasarlanmıştır.
- Bootstrap grid sistemi kullanılarak:
  - Ürün kartları,
  - Filtre alanları,
  - Menü ve footer alanları  
  farklı ekran genişliklerine uyum sağlar.

### 5. Kullanıcı Dostu Arayüz

- Üst menüde:
  - Anasayfa
  - Lastikler
  - Araçla Uyumlu Lastik Bul
  - Kampanyalar / Blog (varsa)
  - Hakkımızda
  - İletişim  
  gibi temel sayfa bağlantıları yer alır.
- Sabit bir **header** ve düzenli bir **footer** yapısı kullanılmıştır.

---

## Sayfa Yapısı

Projede yer alan başlıca sayfalar:

- `index.html`  
  - Projenin ana sayfası.  
  - Slider / banner alanı, öne çıkan lastikler, kampanya bölümleri.

- `lastikler.html`  
  - Tüm lastiklerin kategori ve filtreler ile listelendiği sayfa.

- `arac-ile-ara.html` veya benzeri bir sayfa  
  - Kullanıcının araç bilgisi girerek lastik araması yaptığı sayfa.

- `kampanyalar.html` (varsa)  
  - İndirimli ürünler, sezonluk kampanyalar.

- `hakkimizda.html`  
  - RoadGrip fikri, vizyon, misyon, firma/marka hakkında bilgiler.

- `iletisim.html`  
  - İletişim formu (isim, e-posta, telefon, mesaj).
  - Mağaza adresi, telefon numarası ve Google Maps iframe (varsa).

Dosya adları projendeki gerçek isimlere göre ufak farklılık gösterebilir, README içeriğini buna göre güncelleyebilirsin.

---

## Kullanılan Teknolojiler

Projede kullanılan temel teknolojiler:

- **HTML5** – Sayfa yapısı
- **CSS3** – Tasarım ve özelleştirilmiş stiller
- **Bootstrap (v4/v5)** – Responsive grid ve hazır bileşenler
- **JavaScript** – Filtreleme, etkileşimli alanlar
- **(Opsiyonel) jQuery** – Şablon tarafından kullanılıyorsa
- **(Opsiyonel) Hazır Template**  
  - Örn: GrayGrids / ShopGrids veya benzeri e-ticaret Bootstrap şablonu temel alınmıştır.

---

## Klasör / Dosya Yapısı

Genel klasör yapısı örneği:

```bash
RoadGrip/
├── index.html
├── lastikler.html
├── arac-ile-ara.html
├── hakkimizda.html
├── iletisim.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   └── filters.js
│   ├── img/
│   │   ├── logo/
│   │   ├── banners/
│   │   └── products/
│   └── fonts/
└── README.md
