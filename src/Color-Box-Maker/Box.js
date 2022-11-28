import React, { useState } from "react";
import "./Box.css";

function Box({ id, width, height, bgColor, removeBox }) {
    return (
        <div>
            <div className="Box"
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    backgroundColor: bgColor
                }}
            />
            <br/>
            <button onClick={()=>removeBox(id)}>X</button>
        </div>
    );
}


export default Box;