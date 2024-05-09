"use client"

import React, { useState } from 'react'
import HeaderRow from './HeaderRow'

import Image from 'next/image'
import CopyButton from './CopyButton'
import { PromocodeProps } from '../types'

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";


const PromoCodes = ({ promocodes }: { promocodes: PromocodeProps[] }) => {


    const [copied, setCopied] = useState(false);

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="w-full mt-10">
            <HeaderRow>Promo</HeaderRow>
            <div className="space-y-6 w-full">
                {
                    promocodes.map((promo) => {
                        if (promo.visible) return (
                            <div className="w-full" key={promo.id}>
                                <div className="bg-base-100 p-6 rounded-2xl">

                                    <div className="flex items-center gap-4 w-full">
                                        <div className="avatar">
                                            <div className="w-16 mask mask-squircle">
                                                <Image
                                                    src={promo.icon}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vh"
                                                    alt={"title"}
                                                />
                                            </div>
                                        </div>

                                        <div className="font-medium dark:text-white">
                                            <div className="line-clamp-2 text-wrap">{promo.title}</div>
                                            <div className="text-sm text-green-700 dark:text-green-400 mt-1">{promo.discount} / {promo.minAmount}</div>
                                        </div>
                                    </div>

                                    <div className="text-sm mt-4 line-clamp-3 hover:line-clamp-none prose" dangerouslySetInnerHTML={{ __html: promo.description || "No descfription" }} />


                                    {
                                        (promo.url != "" && promo.urlText != "") &&
                                        <a
                                            role='button'
                                            href={promo.url}
                                            className="btn btn-neutral btn-sm w-full block py-2 px-3 mt-4">
                                            {promo.urlText}
                                            <ArrowTopRightOnSquareIcon className='size-3 float-right' />
                                        </a>
                                    }

                                </div>
                                <div className="bg-base-100 w-full p-3 rounded-2xl border-t-2 border-dashed border-base-300">
                                    <CopyButton text={promo.code} />
                                </div>
                            </div >
                        )
                    }
                    )
                }
            </div >
        </div >
    )
}

export default PromoCodes