export interface BannerProps {
    id: number;
    alt: string;
    url: string;
    image: string;
    backgroundColor: string;
    visible: boolean;
}

export interface SiteProps {
    id: number;
    name: string;
    url: string;
    icon: string;
    visible: boolean;
}

export interface PromocodeProps {
    id: number;
    title: string;
    icon: string
    discount: number,
    minAmount: number,
    description: string,
    code: string;
    url: string;
    urlText: string;
    visible: boolean;
}