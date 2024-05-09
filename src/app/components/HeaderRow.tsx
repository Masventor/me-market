import React from 'react'


interface IProps {
    children: React.ReactNode;
}

const HeaderRow = ({ children }: IProps) => {
    return (
        <h1 className="text-2xl font-bold mb-6 ml-4">{children}</h1>
    )
}

export default HeaderRow