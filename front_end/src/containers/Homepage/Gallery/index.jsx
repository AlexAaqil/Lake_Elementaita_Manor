import './gallery.scss'

import images from '../../../assets/images'

export default function Gallery() {
    return (
        <section className="Gallery" id="Gallery">
            <h1>Gallery</h1>
            <div className="gallery_wrapper">
                <div className="gallery">
                    <img src={images.logo} alt="Logo" />
                </div>

                <div className="gallery">
                    <img src={images.hero} alt="Entrance" />
                </div>

                <div className="gallery">
                    <img src={images.zenGarden} alt="Zen Garden" />
                </div>

                <div className="gallery">
                    <img src={images.meal} alt="Meal" />
                </div>

                <div className="gallery">
                    <img src={images.horseRide} alt="Horse Ride" />
                </div>

                <div className="gallery">
                    <img src={images.sunset} alt="Sunset" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_1} alt="Swimming Pool" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_2} alt="Swimming Pool" />
                </div>

                <div className="gallery">
                    <img src={images.swimming_pool_3} alt="Swimming Pool" />
                </div>
            </div>
        </section>
    );
}
