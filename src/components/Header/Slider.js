import { Link } from 'react-router-dom';
import Swiper from '../../core/utils/Swiper';

function Slider () {
    return (
        <div className="pbmit-slider-area pbmit-slider-one">
            <div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
                <div className="swiper-wrapper">
                    <Swiper
                        img="slider-3.avif"
                        minTitle="Join our community"
                        title="Network"
                        subTitle="with others"
                        text="subscribe"
                        subText="refer and earn"
                    />
                    <Swiper
                        img="slider-1.avif"
                        minTitle="Improve your health"
                        title="Iroko"
                        subTitle="Drink"
                        text="Be sure of good living"
                        subText="to ensure logevity"
                    />
                    <Swiper
                        img="slider-4.avif"
                        minTitle="Change your world"
                        title="Small"
                        subTitle="impacts"
                        text="Take charge"
                        subText="and redefine your health"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider;