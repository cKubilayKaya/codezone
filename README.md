# Codezone Vaka Çalışması

## [Vercel Linki](https://codezone-rouge.vercel.app)

## Özellikler

- Dummy data’ya sadık kalarak **```likes```**, **```view```**, **```comments```**, **```blogSlide```**, **```blogTrend```**, **```trend```** gibi özelliklerin eklenmesi.

    * Örnek veri yapısı:

    ```
    {
    attributes: {
      category: "Haftanın Klipleri",
      blogSlide: false,
      blogTrend: false,
      view: 79.8,
      likes: 92,
      comments: 40,
      trend: false,
      tags: ["Yeni Albüm", "Klip Yayında"],
      author: {
        name: "Cem MC",
        avatar: "/images/avatar.png",
      },
      title: "Haftanın Viral Klipleri",
      slug: "haftanin-viral-klipleri",
      content: `<div class="flex flex-col gap-5">
        <h3 class="font-bold font-saira-condensed text-[25px] leading-6 uppercase">
          Bu hafta sosyal medyada en çok paylaşılan ve izlenme rekorları kıran viral rap kliplerini sizler için inceledik.
        </h3>
        <p>
          Rap dünyasının nabzı bu hafta da viral kliplerle attı. Rapkology editörleri olarak, kısa sürede milyonlarca izlenmeye ulaşan ve sosyal medyada fırtınalar estiren bu klipleri mercek altına aldık. Klipler, sadece müzikleriyle değil, aynı zamanda yaratıcı konseptleri, etkileyici hikaye anlatımları ve modern prodüksiyonlarıyla da büyük beğeni topladı.
        </p>
        <img src="https://res.cloudinary.com/dgbjlgpfh/image/upload/v1756449589/softawe/lark.jpg.webp" alt="" />
        <p>
          Analizimizde, bu kliplerin neden bu kadar çok ilgi gördüğünü ve viral olmayı nasıl başardıklarını detaylı bir şekilde ele aldık. Kimi klipler mizahi unsurlarıyla, kimi klipler ise derin anlamlar içeren hikayeleriyle ön plana çıktı. Bu parçalar, rap müziğin güncel trendlerini ve dinleyicinin beklentilerini çok iyi yansıtıyor.
        </p>
        <p>
          Bu hafta en çok konuşulan ve paylaşılan rap kliplerini kaçırmayın! Rapkology olarak, bu içeriklerin arkasındaki sanatsal ve teknik detayları sizlerle paylaşmaktan mutluluk duyuyoruz. Gelecek haftanın viral klipleri için de bizi takipte kalın.
        </p>
      </div>`,
      seo: {
        canonicalURL: "haftanin-viral-klipleri",
        metaTitle: "Haftanın Viral Klipleri",
        metaDescription: "Haftanın viral rap klipleri Rapkology tarafından analiz edildi. İzleyiciler için öne çıkan detaylar burada.",
      },
      img: "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1756449589/softawe/lark.jpg.webp",
      desc: "Haftanın viral rap klipleri, sosyal medyada trend olan parçalar.",
    },
    lang: "tr",
    createdAt: "2025-06-20T12:00:00.000Z",
    updatedAt: "2025-06-21T12:00:00.000Z",
    __v: 0,
  },
    ```
- Tamamen **responsive** tasarım ve mobil uyumlu menü.
- **Keşfet** kısmındaki layout butonları ile blog kartlarının layout görünümünü değiştirebilme.
- **Keşfet** kısmındaki kategori butonları ile blogları kategorilere göre filtreleme imkanı.
- **Trendler** bölümü, ```trend:true``` olan bloglardan dinamik olarak geliyor.
- **Blog** sayfasındaki sliderlar, ```blogSlide:true``` olan içeriklerden dinamik olarak geliyor.
- **Blog** sayfasındaki slider'ın yanındaki bloglar, ```blogTrend:true``` olan içeriklerden dinamik olarak geliyor.
- **Blog detay** sayfasındaki **"Daha Fazla İçerik"** bölümü rastgele içeriklerden seçiliyor.
- **Blog detay** sayfasındaki **görüntülenme**, **beğeni** ve **yorum** sayıları ilgili blogun ```likes```, ```view``` ve ```comments``` özelliklerinden geliyor.
- Blog içerikleri HTML string olarak tutuluyor ve **dangerouslySetInnerHTML** ile CSS’leri bozulmadan render ediliyor.
- **Breadcrumb**, **meta title** ve **meta description** gibi **SEO** alanları dinamik ve doğru şekilde oluşturuluyor.

## Teknolojiler ve Kütüphaneler

- Reactjs
- Nextjs
- Tailwindcss
- date-fns
- swiperjs

## Sayfa Yapısı

├─ / (Anasayfa)
├─ /blogs (Bloglar Sayfası)
│  └─ /:slug (Blog Detay Sayfası)

## Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcınızda http://localhost:3000 adresine giderek projeyi görüntüleyebilirsiniz.


