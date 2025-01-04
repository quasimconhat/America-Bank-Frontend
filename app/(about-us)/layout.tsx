import React from 'react'

interface Props {
    children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
    return (
        <>
            {children}
        </>
    )
};

export default AboutLayout
