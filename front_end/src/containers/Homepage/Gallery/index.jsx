import './gallery.scss'

import logo from '../../../assets/logo.png'
import entrance01 from '../../../assets/entrance01.png'
import entrance02 from '../../../assets/entrance02.png'
import lovers from '../../../assets/zenGarden.png'
import horse_ride from '../../../assets/horseRide.png'
import meal from '../../../assets/meal.png'
import sunset from '../../../assets/sunset.png'
import images from '../../../assets/images'

export default function Gallery() {
    return (
        <section className="Gallery" id="Gallery">
            <h1>Gallery</h1>
            <div className="gallery_wrapper">
                <div className="gallery">
                    <img src={logo} alt="" />
                </div>

                <div className="gallery">
                    <img src={entrance01} alt="" />
                </div>

                <div className="gallery">
                    <img src={entrance02} alt="" />
                </div>

                <div className="gallery">
                    <img src={lovers} alt="" />
                </div>

                <div className="gallery">
                    <img src={meal} alt="" />
                </div>

                <div className="gallery">
                    <img src={horse_ride} alt="" />
                </div>

                <div className="gallery">
                    <img src={sunset} alt="" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_1} alt="" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_2} alt="" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_3} alt="" />
                </div>
            </div>
        </section>
    );
}
