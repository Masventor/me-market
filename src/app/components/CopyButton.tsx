import { useState } from 'react';

interface Props {
    text: string;
}

const CopyButton = ({ text }: Props) => {
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
        <button
            className="btn bg-base-200 w-full p-3 rounded-lg text-left block"
            onClick={() => {
                copyText(text);
            }}
        ><span className='font-mono inline-block mt-1 mx-2'>
                {text}
            </span>
            {copied ? (
                <div className="badge badge-success badge-outline float-right">Copied</div>
            ) : (
                <div className="badge badge-neutral float-end">Copy</div>
            )}
        </button>
    );
};

export default CopyButton;