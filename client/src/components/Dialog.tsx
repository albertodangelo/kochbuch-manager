
import React, {useState} from 'react';
import './Dialog.css';

interface Props {
    open: boolean;
}

export const Dialog: React.FC<Props> = (props) => {
    if(props.open) {
        return (
            
            <div className="modal">
                {props.children}
            </div>
        )
    } else {
        return null;
    }
}
