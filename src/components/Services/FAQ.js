function FAQ ({id, collapse, num, qst, ans}) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#${collapse}`} aria-expanded="false" aria-controls={collapse}>
                    <span className="pbmit-accordion-icon pbmit-accordion-icon-right">
                        <span className="pbmit-accordion-icon-closed">
                            <i className="pbmit-capigo-icon pbmit-capigo-icon-up-arrow"></i>
                        </span>
                        <span className="pbmit-accordion-icon-opened">
                            <i className="pbmit-capigo-icon pbmit-capigo-icon-thin-download-arrow"></i>
                        </span>
                    </span>
                    <span className="pbmit-accordion-title">
                        <span>{num}</span>
                        {qst}
                    </span>
                </button>
            </h2>
            <div id={collapse} className="accordion-collapse collapse" aria-labelledby={id}
                data-bs-parent="#accordionExample1">
                <div className="accordion-body">
                    {ans}
                </div>
            </div>
        </div>
    )
}

export default FAQ;