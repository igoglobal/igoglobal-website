function ImgHolder ({title="", img, localImg=false}) {
    return (
        <aside className="widget">
            {title && <h2 className="widget-title">{title}</h2>}
            <div className="widget-image">
                {localImg 
                    ? <img src={`./assets/img/service/${img}`} style={{width: "100%"}}></img>
                    : <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} style={{width: "100%"}}></img>
                }
            </div>
        </aside>
    )
}

function SidebarImg () {
    return (
        <>
            <ImgHolder title="Best Services" img="slide.avif" />
            <ImgHolder img="lightdown.avif" />
            <ImgHolder localImg={true} img="question.png" />
        </>
    )
}

export default SidebarImg;