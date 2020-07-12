import React from 'react';

const ImageList = props => {
    const carimages = props.carimages.map(({ alt_description, id, urls }) => {
        return <img alt={alt_description} key={id} src={urls.regular} />;
    })
    return <div>{carimages}</div>;
};

export default ImageList;