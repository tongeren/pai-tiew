import React from 'react'

const SVG_SPRITE_SHEET_LOCATION = "img/svg/icon-defs.svg"

interface SVGProps {
    classes: string,
    sprite: string
}

export const SVG: React.FunctionComponent<SVGProps> = ({ classes, sprite }):React.ReactElement => (
    <svg className={ classes } aria-label={ sprite } > 
        <use href={ SVG_SPRITE_SHEET_LOCATION.concat("#", sprite) } />      
    </svg>
);
