import { useState } from 'react'


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); // Para evitar que se refresque la página

        if( inputValue.trim().length <= 1) return; // si no hay caracteres, sale

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    );
};
