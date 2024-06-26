import SiteCard from "./SiteCard";
import HeaderRow from "./HeaderRow";
import { SiteProps } from "../types";



const Sites = ({
    marketplaces,
    delivery
}: {
    marketplaces: null | SiteProps[],
    delivery: null | SiteProps[]
}) => {


    const allData = [
        {
            id: 1,
            title: "Marketplaces",
            sites: marketplaces,
        },
        {
            id: 2,
            title: "Food and Restaurants",
            sites: delivery,
        }
    ]


    return (
        <>
            {
                allData.map((line) =>
                    <div key={line.id} className="w-full mt-8">
                        <HeaderRow>{line.title}</HeaderRow>
                        <div className="flex overflow-x-auto hide-scrollbar rounded-xl whitespace-nowrap space-x-4  w-full max-w-full">
                            {
                                line.sites && line.sites.map((s) =>
                                    <SiteCard
                                        key={s.id}
                                        url={s.url}
                                        name={s.name}
                                        icon={s.icon}
                                        id={s.id}
                                        visible={s.visible} />
                                )}
                        </div>
                    </div>
                )}
        </>
    );
}
export default Sites
