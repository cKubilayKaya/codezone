import React from "react";
import BlogsPage from "../Components/Blogs/BlogsPage";

export const metadata = {
  title: "Rapkology - En Yeni Rap Şarkıları ve Müzik Videoları",
  description:
    "Rapkology Müzik sayfasında en yeni rap şarkıları, müzik videoları ve rap müziği dünyasının en taze melodileriyle tanışın. Rap müziğin ritmini keşfedin ve en sevdiğiniz sanatçıların en son müzikleri hakkında bilgilere ulaşın.",
};

export default function blogs() {
  return <BlogsPage />;
}
