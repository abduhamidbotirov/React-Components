const CardA = ({ props }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
                <img src={props.imageUrl} alt={props.title} className="card-image" />
                <div className="card-content">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-description">{props.description}</p>
                    <div className="card-icons">
                        <i className="fas fa-thumbs-up"></i> {/* Like */}
                        <i className="fas fa-thumbs-down"></i> {/* Dislike */}
                        <i className="fas fa-comment"></i> {/* Comment */}
                        <i className="fas fa-share"></i> {/* Share */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardA;
