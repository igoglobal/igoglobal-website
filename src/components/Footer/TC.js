function TC ({ no, name, content }) {
    return (
        <>
            <h6> SECTION { no } - { name } </h6>
            <p>
                { content }
            </p>
        </>
    )
}

export default TC;