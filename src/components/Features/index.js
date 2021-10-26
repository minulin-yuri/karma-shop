import './style.scss';
import FeaturesList from './FeaturesList';

export default function Features() {
    return (
        <section className="features">
            <div className="container features__container">
                {FeaturesList.map((item) => (
                    <div className="features__item" key={item.id}>
                        <img src={item.icon} alt={`features${item.id}`} className="features__icon" />
                        <h3 className="features__title">{item.title}</h3>
                        <p className="features__text">{item.text}</p>
                    </div>

                ))}
            </div>
        </section>
    )
}