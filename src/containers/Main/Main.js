import React from 'react';
import Input from '../../components/Input/Input';
import Bildspel from '../../components/Bildspel/Bildspel';

import './Main.css';



const Main = (props) => {

    return (
        <main className='main'>
            <Input 
                searchBox = {props.searchBox}
                title = {props.title}
                handleSubmit = {props.handleSubmit}
                updateText = {props.updateText}/>
            <Bildspel 
                isLoading={props.isLoading} 
                images={props.images}
                prev={props.prev}
                next={props.next}
                currentIndex={props.currentIndex}/>
            
        </main>
    );
}

export default Main;