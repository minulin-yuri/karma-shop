import './style.scss';

export default function BannerBig() {
    return (
        <section className="bannerBg">
            <div className="container bannerBg__container">
                <div className="bannerBg__content">
                    <div className="bannerBg__text">
                        <h1 className="bannerBg__title">Nike New <br />Collection!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div className="bannerBg__image"></div>
                </div>
            </div>
        </section>
    )
}