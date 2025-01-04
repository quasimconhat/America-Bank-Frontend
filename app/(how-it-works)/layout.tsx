import React from 'react'

interface Props {
    children: React.ReactNode;
}

const HowItWorksLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default HowItWorksLayout
