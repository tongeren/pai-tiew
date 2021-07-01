import React from 'react'
import { SVGButton } from '../SVGButton/SVGButton'
import styles from './SocialMedia.module.scss'

const media = [
    { sprite: "linkedin", url: "#" },
    { sprite: "youtube", url: "#" },
    { sprite: "facebook", url: "#" },
    { sprite: "instagram", url: "#" },
    { sprite: "twitter", url: "#" }
]

interface SocialMediaProps {
    classes: string
}

export const SocialMedia:React.FunctionComponent<SocialMediaProps> = ({ classes }) => (
    <div className={ classes }>
        { 
            media.map(ele => (
                <SVGButton 
                    key={ ele.sprite }
                    classes={ styles.smbutton } 
                    svgclasses={ styles.smsvg } 
                    { ...ele }
                />
            ))
        }
    </div>
)