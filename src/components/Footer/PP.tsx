import React from 'react';

interface PPProps {
    no: number,
    title: string,
    content: string,
}

function PP ({ no, title, content } : PPProps) {
    return (
        <>
            <p> { no }. { title } </p>
            <p>
                { content }
            </p>
        </>
    )
}

export default PP;