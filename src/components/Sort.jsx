import React, {useState} from 'react';
function Sort() {
    const [isVisible, setIsVisible] = useState(false);
    const [selected, setSelected] = useState(0);

    const list = ['популярности', 'цене', 'алфавиту']
    const sortName = list[selected]

    const onClickListItem = (index) => {
        setSelected(index)
        setIsVisible(false)
    }
    return (
        <div className='sort'>
            <div className='sort_labet'>
                <b>сортировка по:</b>
                <span onClick={() => setIsVisible(!isVisible)}>{sortName}</span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((name, index) => (
                            <li 
                                key={index} 
                                onClick={() => onClickListItem(index)} 
                                className={selected === index ? 'active' : ''}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Sort;