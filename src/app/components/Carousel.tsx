import Image from "next/image";
import Link from "next/link";
import { BannerProps } from "../types";


export const Carousel = ({ banners }: { banners: BannerProps[] }) => {

    return (
        <div className="w-full carousel rounded-box" >
            {
                banners.map((b) => (
                    b.visible && (
                        <Link
                            key={b.id}
                            href={b.url}
                            className="carousel-item w-full"
                        >
                            <Image
                                src={b.image}
                                width={0}
                                height={0}
                                priority={true}
                                sizes="100vh"
                                className="w-full object-scale-down bg-base-300"
                                alt={b.alt} />
                        </Link>
                    )
                )
                )
            }
        </div>
    );
}

export default Carousel