import React from 'react';

interface TCProps {
    no: number,
    name: string,
    content: string,
}


function TC ({ no, name, content } : TCProps) {
    return (
        <>
            <p> SECTION { no } - { name } </p>
            <p> { content } </p>
        </>
    )
}

export default TC;