import React, { FC } from "react";


type Position = "absolute" | "relative"

interface ButtonProps {
    children: React.ReactNode;
    bgColor?: string;
    color?: string;
    radius?: string;
    padding?:string;
    margin?:string;
    onClick?: () => void;
    fontSize?: number;
    border?:string;
    width?:number;
    height?:number;
    className?:string;
    bottom?:number;
    position?:Position;
}


export const Button: FC<ButtonProps> = (props) => {

    const {children, onClick, bgColor, color, fontSize,  margin,  padding, radius, border, height, width, className, position, bottom} = props;

    return ( 
        <button 
            style={{
                backgroundColor :bgColor || "#0984e3",
                border:border,
                color:color||"#ffffff",
                width:width || "100%",
                height:height,
                borderRadius:radius || '5px',
                padding:padding || '.7rem .6rem' ,
                fontSize:fontSize,
                cursor:'pointer',
                margin:margin,
                bottom:bottom,
                position:position
            }}
            onClick={onClick}
            className={className}
            >
            {children}
        </button>
     );
}
 