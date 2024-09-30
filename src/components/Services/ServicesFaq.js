import faqData from "../../core/data/faqData";
import FAQ from "./FAQ";

function ServicesFaq () {
    return (
        <>
        <div className="pbmit-heading-subheading animation-style2">
            <h3 className="pbmit-title">Frequently Asked Question</h3>
            </div>
            <p>Igoglobal International Inc. (IGOGLOBAL REPUBLIC) is an indigenous direct-selling conglomerate that promotes African herbal products and other solutions in health & wellness, personal care, real estate, education, and technology. The company operates with a grassroots business model and offers a revolutionary reward plan to its members.</p>
            <div className="accordion" id="accordionExample1">
                {
                    faqData.map(( faq, ind ) => (
                        <FAQ 
                            key={faq.id}
                            id={ faq.id }
                            collapse={ faq.collapse }
                            num={ `0${ind + 1}.` }
                            qst={ faq.qst }
                            ans={ faq.ans }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ServicesFaq;