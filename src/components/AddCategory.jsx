import { useState } from "react"
import PropTypes from 'prop-types';


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
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChage}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}