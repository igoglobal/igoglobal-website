import ProcessStep from "../../core/utils/ProcessStep";

function Process () {
    return (
        <section className="section-xl" data-cursor="global-color">
        <div className="container">
            <div className="pbmit-heading-subheading text-center animation-style2">
                <h4 className="pbmit-subtitle">Our Process</h4>
                <h2 className="pbmit-title">Digitize your business now <br></br> with our best experts</h2>
            </div>
            <div className="pbmit-element-card-box-style-1">
                <div className="pbmit-content-box">
                    <ProcessStep 
                        no="01"
                        title="Know our business"
                        desc="Ask all you need to know about network marketing and its dynamic nature in rovolutionalizing wealth across Africa and beyond"
                        step1="Meet any of our agents and get all the information needed"
                        step2="Take a leap of faith by going to the next step"
                        img="process-1.avif"
                    />
                    <ProcessStep 
                        no="02"
                        title="Sign up and join"
                        desc="Sign up with your details and pick a registration plan that aligns with your financial goals"
                        step1="Enter your personal details using a unique email/phone"
                        step2="Find the right registration package, hit the sign up button"
                        img="process-2.avif"
                    />
                    <ProcessStep 
                        no="03"
                        title="Study our business plan"
                        desc="Study the dynamics of our business, our referral system, registration package bonus and how to effectively take advantage of them"
                        step1="Understand the referral system and available bonus for every package"
                        step2="Effectively put this knowledge into use for your benefit"
                        img="process-3.avif"
                    />
                    <ProcessStep 
                        no="04"
                        title="Refer and Earn"
                        desc="Start referring your friends and family and getting bonus points, acrued to your account and withdrawable at the end of the month"
                        step1="Refer someone that in turn refers another person down your binary tree line"
                        step2="Earn bonus (cash reward) for every referral you have made"
                        img="process-4.avif"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Process;