"use client"

import { useEffect, useState } from "react";

import Carousel from "./components/Carousel";

import { BannerProps, PromocodeProps, SiteProps } from "./types";

const Home = () => {

  const [banners, setData] = useState(null);
  const sheetID = process.env.NEXT_PUBLIC_SHEET_ID
  console.log(sheetID);

  useEffect(() => {
    const fetchData = async () => {
      const sheetName = "banners";
      const response = await fetch(`https://script.google.com/macros/s/${sheetID}/exec?sheet=${sheetName}`);
      const banners = await response.json();
      setData(banners);
    };

    fetchData();
  }, [sheetID]);

  return (
    <main className="flex min-h-screen max-w-xl mx-auto flex-col items-center justify-between p-8">

      {banners &&
        <Carousel banners={banners} />
      }




      {/* <Sites
        marketplaces={marketplaces}
        delivery={delivery}
      />

      <PromoCodes promocodes={promocodes} /> */}

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