import UserTestimonial from "../../components/Testimonial/UserTestimonial";

function Testimonial () {
    return (
        <section className="testimonial-one pbmit-bg-color-light">
        <div className="container">
            <div className="pbmit-heading-subheading text-center animation-style2">
                <h4 className="pbmit-subtitle">Testimonial</h4>
                <h2 className="pbmit-title">Our customer reviews</h2>
            </div>
            <div className="swiper-slider" data-loop="false" data-autoplay="false" data-dots="true" data-arrows="false" data-columns="3" data-margin="30" data-effect="slide">
                <div className="swiper-wrapper">
                    <UserTestimonial
                        img="user-5.avif"
                        username="Ogboni"
                        clienttype="happy customer"
                        comment="I dreaded my period due to severe symptoms, but after trying Iroko drink, these symptoms disappeared despite other medications failing"
                    />
                    <UserTestimonial
                        img="user-4.avif"
                        username="Jordan"
                        clienttype="software developer"
                        comment="Using pure virgin has revitalized my marriage again, my husband and I live as though we are in our youthful age and the experience is epic"
                    />
                    <UserTestimonial
                        img="user-6.avif"
                        username="Tomiwa"
                        clienttype="programmer"
                        comment="Iroko drink has helped me alot as regards my waist pain which had persistently troubled me and reduced my sports activities due"
                    />
                    <UserTestimonial
                        img="user-1.avif"
                        username="Nathaly"
                        clienttype="graphics and UI designer"
                        comment="For me, Iroko worked wonders on a persistent toothache that didn't improve with other toothpaste, and now the pain has subsided"
                    />
                    <UserTestimonial
                        img="user-3.avif"
                        username="Adedeji"
                        clienttype="Machine Learning Specialist"
                        comment="I have had intense digestive system issues for quite a while now, but ever since I started using Iroko drink, my apetite had been way different"
                    />
                    <UserTestimonial
                        img="user-2.avif"
                        username="James"
                        clienttype="Vendor"
                        comment="Moving from place to place has not been easy for me, but after being introduced to Iroko, moving around has been more fun for me"
                    />
                    
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonial;