import React, {useState} from "react";
function Categories() {
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = ['All', 'Meat', 'Vegans', 'Grill', 'Spaci', 'close']
    const onClickCategory = (index) => {
        setActiveCategory(index)
    }
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li 
                            onClick={() => onClickCategory(index)} 
                            key={index} className={activeCategory === index ? 'active': ''}
                        >
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;