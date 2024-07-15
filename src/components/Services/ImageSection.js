function ImageSection ({img1, img2}) {
    return (
        <div className="pbmit-service_imgbox">
            <div className="row">
                <div className="col-md-6">
                    {/* <div className="pbmit-animation-style1"> */}
                    <div className="">
                        <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img1}`} className="img-fluid" alt=""></img>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <div className="pbmit-animation-style2"> */}
                    <div className="">
                        <img src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img2}`} className="img-fluid" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;