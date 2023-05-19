import React from 'react'

export default function CommonButton({children, height, borderRadius, width, color, background, fontWeight, title, onClick, border, borderColor }) {

    const styles = {
        button: {
            height: height && height,
            minHeight: "38px",
            width: width && width,
            minWidth: !width && '170px',
            color:color,
            fontWeight: fontWeight && fontWeight,
            borderRadius: borderRadius ? borderRadius : "5px",
            border: border,
            background: background,
            borderColor: borderColor,
            padding: 10,
            textAlign: 'center',
            fontSize: '15px',
            cursor: 'pointer',
            onClick:onClick
            
            
        }
    }

    return (
        <button
            style={styles.button}
            className='d-flex align-items-center justify-content-center'
        >
            {title}{children}
        </button>
    )

}