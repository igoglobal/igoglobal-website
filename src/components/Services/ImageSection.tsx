import React from 'react';

interface ImageSectionProps {
    img1: string,
    img2: string,    
}

function ImageSection ({img1, img2} : ImageSectionProps) {
    return (
        <div className="pbmit-service_imgbox">
            <div className="row">
                <div className="col-md-6">
                    {/* <div className="pbmit-animation-style1"> */}
                    <div className="">
                        <img src={`../assets/img/service/${img1}`} className="img-fluid" alt=""></img>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <div className="pbmit-animation-style2"> */}
                    <div className="">
                        <img src={`../assets/img/service/${img2}`} className="img-fluid" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;