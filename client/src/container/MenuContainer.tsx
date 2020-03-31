import React, { useState } from 'react';
import { Button } from 'antd';

export const MenuContainer: React.FC = (props) => {
    
    
    return (
        <>
            
            <Button className="menuButtons" style={{margin: "10px"}}  shape="round"  href="/kochbuch" >
                <span>Kochbuch</span>
            </Button>
            <Button className="menuButtons" shape="round"   href="/users">
                <span>Benutzer</span>
            </Button>
        </>
    ) 
}
