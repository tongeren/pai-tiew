import React from 'react'
import { SVG } from '../SVG/SVG'

export interface SVGButtonProps {
    classes: string
    svgclasses: string
    sprite: string
    url: string
}

export const SVGButton:React.FunctionComponent<SVGButtonProps> = ({ classes, svgclasses, sprite, url }):React.ReactElement => (    
    <div className={ classes } onClick={ () => window.location.href = url.toString() }>
        <SVG classes={ svgclasses } sprite={ sprite } />
    </div>
)