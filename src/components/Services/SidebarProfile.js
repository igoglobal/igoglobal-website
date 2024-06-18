function SidebarProfile () {
    const gglID = "112lbc01eL2egtlnYxFE2CuuNDZ2090gr"
    const gglLInk = `https://drive.google.com/uc?export=download&id=${gglID}`;

    return (
        <aside class="widget">
            <h2 class="widget-title">Company Profile</h2>
            <div class="textwidget custom-html-widget">
                <div class="download">
                    <div class="item-download">
                        <a href={gglLInk}  target="_blank" rel="noopener noreferrer">
                            <div class="pbmit-download-icon">
                                <i class="pbminfotech-base-icons pbmit-base-icon-document"></i>
                                <h4 class="pbmit-download-title">Download Pdf File</h4>
                            </div>
                            <div class="pbmit-download-arrow">
                                <i class="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-down-arrow"></i>
                            </div>
                        </a>
                    </div>
                    <div class="item-download">
                        <a href="service-detail.html" target="_blank" rel="noopener noreferrer">
                            <div class="pbmit-download-icon">
                                <i class="pbminfotech-base-icons pbmit-base-icon-document"></i>
                                <h4 class="pbmit-download-title">Download Word File</h4>
                            </div>
                            <div class="pbmit-download-arrow">
                                <i class="pbminfotech-base-icons pbmit-righticon pbmit-base-icon-down-arrow"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SidebarProfile;