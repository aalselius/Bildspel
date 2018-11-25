import React from 'react';
import './Bildspel.css';

const Bildspel = (props) => {
    var currentIndex= props.currentIndex;
    console.log("bildspel index", currentIndex);
    if (!props.isLoading) {
        return <div>Loading...</div>
    } else {
    return (
            
        <div className="bildspel_container">
            <div className="bildspel">
                <div className="prev_image image_container">
                    <img src={props.images.results[currentIndex-1].urls.small} alt={props.images.results[currentIndex-1].description} />     
                </div>
                <div className="cur_image image_container">
                    <img src={props.images.results[currentIndex].urls.small}  alt={props.images.results[currentIndex].description} />                    
                </div>
                <div className="next_image image_container">
                    <img src={props.images.results[currentIndex+1].urls.small}  alt={props.images.results[currentIndex+1].description} />                    
                </div>
            </div>
            <div className="pagination">
                <div 
                    className="prev"
                    onClick={props.prev}
                >
                &lt;
                </div>
                <div 
                    className="next"
                    onClick={props.next}
                >
                &gt;
                </div>
            </div>
        </div>
    );
}
}

export default Bildspel;