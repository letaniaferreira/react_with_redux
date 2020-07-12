import React from 'react';

const ImageList = props => {
    const carimages = props.carimages.map((image) => {
        return <img alt={image.alt_description} key={image.id} src={image.urls.regular} />;
    })
    return <div>{carimages}</div>;
};

export default ImageList;