import PP from "../../components/Footer/PP";

import privacyPolicyData from "../../core/data/privacyPolicyData";
import Title from "../../core/utils/Title";


function PrivacyPolicy (){
    return (
        <>
         <Title 
            title="Privacy Policy"
            sectionName="privacy policy"
         />
         <div className="container-vs">
            <h5> Cookies Policy </h5>
            <p> At Igoglobal International Inc. ("Igoglobal," "we," "us," or "our"), we use cookies and similar technologies to provide, protect, and improve our services. This policy explains how we use cookies and the choices you have regarding their use. </p>

            <p style={{ whiteSpace: "pre-line" }}> 
            {
                privacyPolicyData.map((policy, ind) => (
                    <PP 
                    key={policy.content}
                    no={ind + 1}
                    title={policy.name}
                    content={policy.content}
                    />
                    )) 
                }
            </p>
         </div>
        </>
    )
}

export default PrivacyPolicy;