import React from 'react';
import Card from './Card';
import CardA from './CardA';

const ReciveCard = () => {
    let cardObj = {
        title: "Birinchi Karta",
        description: "Bu birinchi karta.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Uzbekistan.png"
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Card props={cardObj} />
                    <CardA props={cardObj} />
                </div>
            </div>
        </>
    );
};

export default ReciveCard;