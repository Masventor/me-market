import Carousel from "./components/Carousel";
import PromoCodes from "./components/PromoCodes";
import Sites from "./components/Sites";
import { BannerProps, PromocodeProps, SiteProps } from "./types";

const SHEET_ID = process.env.SHEET_ID

const Home = async () => {
  const [banners, marketplaces, delivery, promocodes] = await Promise.all([
    _getBanners(),
    _getMarketplaces(),
    _getDelivery(),
    _getPromocodes(),
  ]);



  return (
    <main className="flex min-h-screen max-w-xl mx-auto flex-col items-center justify-between p-8">

      <Carousel banners={banners} />

      <Sites
        marketplaces={marketplaces}
        delivery={delivery}
      />

      <PromoCodes promocodes={promocodes} />

    </main>
  );
}

export default Home



async function _getBanners(sheetName: string = "banners"): Promise<BannerProps[]> {
  const res = await fetch(
    `https://script.google.com/macros/s/${SHEET_ID}/exec?sheet=${sheetName}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  return await res.json();
}

async function _getMarketplaces(sheetName: string = "marketplaces"): Promise<SiteProps[]> {
  const res = await fetch(
    `https://script.google.com/macros/s/${SHEET_ID}/exec?sheet=${sheetName}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
  return await res.json();
}

async function _getDelivery(sheetName: string = "delivery"): Promise<SiteProps[]> {
  const res = await fetch(
    `https://script.google.com/macros/s/${SHEET_ID}/exec?sheet=${sheetName}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  )
  return await res.json();
}
async function _getPromocodes(sheetName: string = "promocodes"): Promise<PromocodeProps[]> {
  const res = await fetch(
    `https://script.google.com/macros/s/${SHEET_ID}/exec?sheet=${sheetName}`,
    {
      next: {
        revalidate: 0,
      },
    }
  )
  return await res.json();
}