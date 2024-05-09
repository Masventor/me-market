"use client"

import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Sites from "./components/Sites";
import PromoCodes from "./components/PromoCodes";

const Home = () => {

  const [banners, setBanner] = useState(null);
  const [marketplaces, setMarketplace] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [promocodes, setPromocodes] = useState(null);

  const sheetID = process.env.NEXT_PUBLIC_SHEET_ID

  useEffect(() => {
    let fetchData = async (sheetName: string, setBanner: Function) => {
      let response = await fetch(`https://script.google.com/macros/s/${sheetID}/exec?sheet=${sheetName}`);
      setBanner(await response.json())
    };

    fetchData("banners", setBanner);
    fetchData("marketplaces", setMarketplace);
    fetchData("delivery", setDelivery);
    fetchData("promocodes", setPromocodes);
  }, [sheetID]);

  return (
    <main className="flex min-h-screen max-w-xl mx-auto flex-col items-center justify-between p-8">

      {banners &&
        <Carousel banners={banners} />
      }

      {
        marketplaces && delivery &&
        <Sites
          marketplaces={marketplaces}
          delivery={delivery}
        />
      }
      {promocodes &&
        <PromoCodes promocodes={promocodes} />
      }

    </main>
  );
}

export default Home

/*

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
*/