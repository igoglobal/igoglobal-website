import teamData from "../../core/data/teamData";
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
                            {
                                teamData.map(team => (
                                    <Member 
                                        key={team.name}
                                        title= {team.title}
                                        name={team.name}
                                        img={team.img}
                                    />
                                ))
                            }                            
                        </div>	
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Team;