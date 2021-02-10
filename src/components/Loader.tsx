import React from 'react'
import { useSelector } from 'react-redux';

export default function Loader() {
    const loaderStyles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: "flex",
        justifyContent: 'center',
        alignItems:'stretch',
        background: '#0009',
        color : '#fff'
    } as React.CSSProperties;
    
    const loadingMessage = useSelector((state : any) => state.loadingMessage)

    return (
        <div className="spinner-container" style={loaderStyles}>
            <div className="d-flex flex-row justify-content-center">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <span className="p-3">{loadingMessage || "Mensaje aquí!"}</span>
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            </div>
        </div>
    )
}
