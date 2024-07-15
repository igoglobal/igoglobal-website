import ImageSection from "./ImageSection";

function ServicesBody () {
    return (
        <>
            <div className="pbmit-service-feature-image">
                <img src="images/service/service-01b.jpg" className="img-fluid" alt=""></img>
            </div>
            <div className="pbmit-entry-content">
                <div className="pbmit-heading-subheading animation-style2">
                    <h3 className="pbmit-title">Health and Wellness</h3>
                </div>
                <p>Our approach at Igoglobal breaks the mold of traditional industry standards by recognizing that everyone is unique, with diverse backgrounds, tastes, and aspirations. Igoglobal is dedicated to embracing your individuality and unlocking your exceptional potential.</p>
                <p>Our range of products is carefully crafted to cater to specific needs in various consumer markets, while our business opportunity is designed to empower you to create the lifestyle you desire, tailored to your preferences.</p>
                <p>With a focus on your individual needs, our leadership has set out to create a company that stands out, whether you're a customer or a distributor. This commitment to customization drives everything we do, shaping our present and future endeavors.</p>

                <ImageSection 
                    img1="happy.avif"
                    img2="wellness.avif"
                />
                
                <div className="pbmit-heading-subheading animation-style2">
                    <h3 className="pbmit-title">Education and Technology</h3>
                </div>
                <p>We also offer a range of educational courses to improve your learning and management skills</p>
                <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                            <i aria-hidden="true" className="ti-check"></i>
                        </span>
                        <span className="pbmit-icon-list-text">A plan for how you will save up for retirement and sustain yourself once retired.</span>
                    </li>
                    <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                            <i aria-hidden="true" className="ti-check"></i>
                        </span>
                        <span className="pbmit-icon-list-text">A financial strategy to help you grow your investments quickly,  money into a savings account increase much in value over time.</span>
                    </li>
                    <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                            <i aria-hidden="true" className="ti-check"></i>
                        </span>
                        <span className="pbmit-icon-list-text">A plan to pay off your high-interest debt, like credit cards and loans, save more of your money in interest payments.</span>
                    </li>
                    <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                            <i aria-hidden="true" className="ti-check"></i>
                        </span>
                        <span className="pbmit-icon-list-text">A plan for how much you need to set aside monthly in order to have enough money for emergencies, like car repairs or medical bills.</span>
                    </li>
                    <li className="list-group-item">
                        <span className="pbmit-icon-list-icon">
                            <i aria-hidden="true" className="ti-check"></i>
                        </span>
                        <span className="pbmit-icon-list-text">A plan that will ensure you are financially secure if something were to happen to you or your family, long-term care insurance.</span>
                    </li>
                </ul>

                <ImageSection 
                    img1="education.avif"
                    img2="technology.avif"
                />

                <div className="pbmit-heading-subheading animation-style2">
                    <h3 className="pbmit-title">Real Estate</h3>
                </div>
                <p>Our housing plans are the best to get you started on getting your first property</p>
                <p>Our range of products is carefully crafted to cater to specific needs in various consumer markets, while our business opportunity is designed to empower you to create the lifestyle you desire, tailored to your preferences.</p>
                <p>With a focus on your individual needs, our leadership has set out to create a company that stands out, whether you're a customer or a distributor. This commitment to customization drives everything we do, shaping our present and future endeavors.</p>

                <ImageSection 
                    img1="home.avif"
                    img2="apartment.avif"
                />
                
            </div>
        </>
    )
}

export default ServicesBody;