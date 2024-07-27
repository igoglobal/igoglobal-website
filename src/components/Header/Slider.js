import Swiper from '../../core/utils/Swiper';

function Slider () {
    return (
        <div className="pbmit-slider-area pbmit-slider-one">
            <div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
                <div className="swiper-wrapper">
                    <Swiper
                        // img="slider-5.avif"
                        img="./assets/img/slider/slider-2.avif"
                        customImg={true}
                        minTitle="Join our community"
                        title="Find"
                        subTitle="Happiness"
                        text="Register &"
                        subText="Find out more"
                    />
                    <Swiper
                        customImg={true}
                        // img="slider-4.avif"
                        img="/assets/img/slider/slider-3.avif"
                        minTitle="Change your world"
                        title="Small"
                        subTitle="impacts"
                        text="Take charge"
                        subText="and redefine your health"
                    />
                    <Swiper
                        img="slider-1.avif"
                        minTitle="Improve your health"
                        title="Iroko"
                        subTitle="Drink"
                        text="Be sure of good living"
                        subText="to ensure logevity"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider;