import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {

    // {id:uuid(),width:"200",height:"200",bgColor:"purple"}
    const [boxList, setBoxList] = useState([]);

    const addBoxes = (newBox) => {
        setBoxList(box => [...box, { ...newBox, id: uuid() }]);
    }

    const removeBox = (id) => {
        setBoxList(box => box.filter((b => b.id !== id)));
    }

    return (
        <div className="BoxList">
            <h2>Color Box Maker</h2>
            <NewBoxForm addBoxes={addBoxes} />
            <div>
                {boxList.map(({ id, width, height, bgColor })=>(
                    <Box id={id}
                        width={width}
                        height={height}
                        bgColor={bgColor}
                        removeBox={removeBox}
                        key={id} />
                ))}
            </div>
        </div>
    );
}


export default BoxList;