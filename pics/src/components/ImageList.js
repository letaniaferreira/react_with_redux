import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = props => {
    const carimages = props.carimages.map((image) => {
        // why would you pass image as a prop for image itself in the next line?
        return <ImageCard key={image.id} image={image} />;
    })
    return <div className='image-list'>{carimages}</div>;
};

export default ImageList;