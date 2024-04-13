import React, {useState} from "react";

function PizzaCard({title, price, imageUrl, sizes, types}) {
    const [pizzaCount, setPizzaCount] = useState(0);
    const [active, setActive] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const typeNames = ['тонкое', 'традиционное']
    const onClickAddPizza = () => {
        setPizzaCount(pizzaCount + 1)
    }
    return (
        <div className="card">
            <img src={imageUrl} alt="" />
            <div className="card__body">
                <h4>{title}</h4>
                <div className="action-block">
                    <div className="choose-type-dough">
                    {
                            types.map(val => (
                                <div onClick={() => setActive(val)} className={`dough ${active === val ? 'active' : ''}`} >{typeNames[val]}</div>
                            ))
                        }
                    </div>
                    <div className="choose-type-size">
                        {
                            sizes.map((val, index) => (
                                <div onClick={() => setActiveSize(index)} className={`size ${activeSize === index ? 'active' : ''}`}>{val}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="card__footer">
                <div className="card-price">{price}</div>
                <button onClick={onClickAddPizza} className="add-to-cart">Add to basket {pizzaCount}</button>
            </div>
        </div>
    )
}

export default PizzaCard;