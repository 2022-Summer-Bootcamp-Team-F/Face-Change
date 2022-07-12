import React from 'react';
import styled from 'styled-components';

const Logo = styled.section`
    padding:30px;
`

export default function Header() {
    return (    
        <Logo>
            <div className="Logo">
                <img className="logoImage" alt="logo" src="images/logo.png"/>
                <img className="paletteImage" alt="palette" src="images/palette.png"/>
            </div>
        </Logo>
    );
}