function PP ({ no, title, content }) {
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