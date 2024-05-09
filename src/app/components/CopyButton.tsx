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
            className="btn bg-base-200 w-full py-2 px-3 rounded-lg text-left block"
            onClick={() => {
                copyText(text);
            }}
        >
            {text}
            {copied ? (
                <div className="badge badge-primary badge-outline float-right">Copied</div>
            ) : (
                <div className="badge badge-primary float-end">Copy</div>
            )}
        </button>
    );
};

export default CopyButton;