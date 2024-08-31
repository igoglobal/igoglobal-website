import Member from "../../core/utils/Member";

function Team () {
    return (
        <section className="section-lgx team-one">
        <div className="container">
            <div className="row">
                <div className="pbmit-teambox-left col-md-4">
                    <div className="pbmit-heading-subheading animation-style2">
                        <h4 className="pbmit-subtitle">Meet Our Team</h4>
                        <h2 className="pbmit-title">Meet our team of experts</h2>
                        <div className="pbmit-heading-desc">
                            We welcome and celebrate different perspectives to help our firm, our clients and our people.
                        </div>
                    </div>
                    <div className="team-arrow swiper-btn-custom d-inline-flex flex-row-reverse"></div>
                </div>
                <div className="pbmit-teambox-right col-md-8">
                    <div className="swiper-slider" data-arrows-class="team-arrow" data-loop="false" data-autoplay="false" data-dots="false" data-arrows="true" data-columns="3" data-margin="30" data-effect="slide">
                        <div className="swiper-wrapper">
                            <Member 
                                title="CEO"
                                name="Victor Etukinyang"
                                img="male.avif"
                            />
                            <Member 
                                title="Managing Director"
                                name="Grace Etukinyang"
                                img="female1.webp"
                            />
                            <Member 
                                title="Director of IT"
                                name="Emmanuel Akpan"
                                img="male.webp"
                            />
                            <Member 
                                title="Director of Finance"
                                name="Nathaniel Jimmy"
                                img="male3.png"
                            />
                            <Member 
                                title="Head of IT Operations"
                                name="Victor Otubure"
                                img="male2.webp"
                            />
                            <Member 
                                title="Head of Design"
                                name="Eniola Kwuelum"
                                img="female3.webp"
                            />
                            <Member 
                                title="Sotware Dev"
                                name="Wale Onefesor"
                                img="male4.webp"
                            />
                            <Member 
                                title="Marketing Manager"
                                name="Nnamani Kelvin O."
                                img="male1.jpg"
                            />
                            <Member 
                                title="Mangement Sec"
                                name="Jessica"
                                img="female4.jpg"
                            />
                        </div>	
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Team;