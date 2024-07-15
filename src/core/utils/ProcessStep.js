function ProcessStep ({no, title, desc, step1, step2, img}) {
    return (
        <div className="pbmit-card-box-wrapper">
            <div className="pbmit-card-box-wrapper-inner d-flex align-items-center justify-content-between">
                <div className="pbmit-card-box col-lg-6 col-md-12">
                    <div className="pbmit-card-box-number">
                        <h4>{no}</h4>
                    </div>
                    <div className="pbmit-card-box-title">
                        <h4>{title}</h4>
                    </div>
                    <div className="pbmit-card-box-desc">{desc}</div>
                    <div className="pbmit-card-box-line">
                        <div className="pbmit-card-box-line-inner">
                            <p>{step1}</p>
                        </div>
                        <div className="pbmit-card-box-line-inner">
                            <p>{step2}</p>
                        </div>
                    </div>
                </div>
                <div className="pbmit-card-box-img col-lg-6 col-md-12">
                    <div className="pbmit-card-box-item-image">
                        <img 
                            src={`https://igogolobal-assets.s3.eu-west-2.amazonaws.com/images/${img}`} 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessStep;