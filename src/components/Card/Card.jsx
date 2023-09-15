import "./card.css"
const Card = ({ props }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <img src={props.imageUrl} alt={props.title} className="card-image" />
                <div className="card-content">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-description">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
