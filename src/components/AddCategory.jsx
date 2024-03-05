import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChage = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories(categories => [...categories, inputValue])
        onNewCategory(inputValue);
        setInputValue('');
        // console.log(setCategories);

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Bucar gifs"
                value={inputValue}
                onChange={onInputChage}
            />
        </form>
    )
}