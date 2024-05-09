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

  const sheetID = "AKfycbzKL1zEa7ZcpZ_GHfqbf45tjiQQ5qdwotyLg0YpUFA3Z6Q4uUrqOkXEwPOaRDkMLyD-rQ"

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
    <main className="flex min-h-screen max-w-lg mx-auto flex-col items-center justify-between p-8">

      {
        (banners) ?
          <Carousel banners={banners} />
          :
          <div className="bg-base-100 p-4 w-full rounded-box">
            <div className="skeleton h-48 rounded-box" />
          </div>
      }

      {
        (marketplaces && delivery)
          ?
          <Sites
            marketplaces={marketplaces}
            delivery={delivery}
          />
          :
          <div className="w-full mt-10">
            <div className="skeleton w-4/12 h-6 font-bold mb-6"></div>

            <div className="flex overflow-x-auto whitespace-nowrap space-x-6 min-w-full hide-scrollbar w-full max-w-full">
              <div
                className="w-full bg-base-100 rounded-xl">
                <div className="skeleton w-14 h-14 mt-4 ml-5" />
                <div className="skeleton w-7/12 h-4 mx-5 my-4" />
              </div>
              <div
                className="w-full bg-base-100 rounded-xl">
                <div className="skeleton w-14 h-14 mt-4 ml-5" />
                <div className="skeleton w-7/12 h-4 mx-5 my-4" />
              </div>
            </div>
          </div>
      }
      {
        (promocodes)
          ?
          <PromoCodes promocodes={promocodes} />
          :
          <div className="w-full mt-10">
            <div className="skeleton w-4/12 h-6 font-bold mb-6"></div>
            <div className="space-y-6 w-full">

              <div className="w-full">
                <div className="bg-base-100  p-6 rounded-xl">

                  <div className="flex items-center gap-4 w-full max-w-full">
                    <div className="skeleton w-14 h-14 shrink-0"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-36"></div>
                      <div className="skeleton h-4 w-24"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-4">
                    <div className="skeleton h-2 w-full"></div>
                    <div className="skeleton h-2 w-full"></div>
                    <div className="skeleton h-2 w-6/12"></div>

                  </div>

                </div>
                <div className="bg-base-100 w-full p-3 rounded-2xl border-t-2 border-dashed border-base-300">
                  <div className="skeleton w-full h-12" />
                </div>
              </div >
              <div className="w-full">
                <div className="bg-base-100  p-6 rounded-xl">

                  <div className="flex items-center gap-4 w-full max-w-full">
                    <div className="skeleton w-14 h-14 shrink-0"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-36"></div>
                      <div className="skeleton h-4 w-24"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-4">
                    <div className="skeleton h-2 w-full"></div>
                    <div className="skeleton h-2 w-full"></div>
                    <div className="skeleton h-2 w-6/12"></div>
                  </div>

                </div>
                <div className="bg-base-100 w-full p-3 rounded-2xl border-t-2 border-dashed border-base-300">
                  <div className="skeleton w-full h-12" />
                </div>
              </div >
            </div >
          </div >
      }

    </main>
  );
}

export default Home