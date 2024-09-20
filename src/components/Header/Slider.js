import swiperData from '../../core/data/swiperData';
import Swiper from '../../core/utils/Swiper';

function Slider () {
    return (
        <div className="pbmit-slider-area pbmit-slider-one">
            <div className="swiper-slider" data-autoplay="true" data-loop="true" data-dots="false" data-arrows="true" data-columns="1" data-margin="0" data-effect="fade">
                <div className="swiper-wrapper">
                    {
                        swiperData.map(swiper => (
                            <Swiper
                                key={swiper.title}
                                img={swiper.img}
                                minTitle={swiper.minTitle}
                                title={swiper.title}
                                subTitle={swiper.subTitle}
                                text={swiper.text}
                                subText={swiper.subText}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider;