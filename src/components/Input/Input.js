import React from 'react';
import './Input.css';

const Input = (props) => {
    return(
        <div className="input_field_container">
            <input 
                className="input_field" 
                type="text" 
                value={props.searchBox} 
                onChange={props.updateText}/>
            <input 
                className="submit_btn" 
                type="submit" 
                value="Sök" 
                onClick={props.handleSubmit} />
            <h1 className="searchHeader">{props.title}</h1>

        </div>
    )
}

export default Input;