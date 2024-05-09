import Link from "next/link";
import Image from "next/image";
import { SiteProps } from "../types";

const SiteCard = ({ url, name, icon, visible }: SiteProps) => {

    if (visible)
        return (
            <Link
                href={url}
                className=" card w-5/12 bg-base-100 hover:bg-base-200 active:scale-95 transition-all duration-500 ease-in-out flex-shrink-0 border-1 border-base-200 ">
                <div className="avatar mt-4 ml-5">
                    <div className="w-14 mask mask-squircle">
                        <Image
                            src={icon}
                            width={0}
                            height={0}
                            sizes="100vh"
                            alt={name}
                        />
                    </div>
                </div>

                <div className="block text-sm truncate py-5 px-5">{name}</div>
            </Link>
        );
}
export default SiteCard