import React from 'react'

interface Props {
    children: React.ReactNode;
}

const InnovatorLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default InnovatorLayout
