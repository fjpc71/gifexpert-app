import React from 'react';


export const GifGrid = ({image}) => {


    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ image.images.downsized.url } alt={ image.title } />
            <p> { image.title } </p>
        </div>
    )
}
