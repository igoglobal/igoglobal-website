function TC ({ no, name, content }) {
    return (
        <>
            <p> SECTION { no } - { name } </p>
            <p> { content } </p>
        </>
    )
}

export default TC;