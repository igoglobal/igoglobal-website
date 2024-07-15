
function SidebarProfile () {
    const gglID = "112lbc01eL2egtlnYxFE2CuuNDZ2090gr"
    const gglLInk = `https://drive.google.com/uc?export=download&id=${gglID}`;

    return (
        <aside className="widget">
            <h2 className="widget-title">Company Profile</h2>
            <div className="textwidget custom-html-widget">
                <div className="download">
                    <div className="item-download">
                        <a href={gglLInk}  target="_blank" rel="noopener noreferrer">
                            <div className="pbmit-download-icon">
                                <i className="pbminfotech-base-icons pbmit-base-icon-document"></i>
                                <h4 className="pbmit-download-title">Download Pdf File</h4>
                            </div>
                            <div className="pbmit-download-arrow">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-down-arrow"></i>
                            </div>
                        </a>
                    </div>
                    <div className="item-download">
                        <a href="service-detail.html" target="_blank" rel="noopener noreferrer">
                            <div className="pbmit-download-icon">
                                <i className="pbminfotech-base-icons pbmit-base-icon-document"></i>
                                <h4 className="pbmit-download-title">Download Word File</h4>
                            </div>
                            <div className="pbmit-download-arrow">
                                <i className="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-down-arrow"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarProfile;