import React from 'react';
import './TitleDesc.css';

export default function TitleDesc({title, children}) {
    return (
        <div className='TitleDesc'>
            <h2 className='TitleDesc__title'>{title}</h2>
            <p className='TitleDesc__text'>{children}</p>
        </div>
    )
}
