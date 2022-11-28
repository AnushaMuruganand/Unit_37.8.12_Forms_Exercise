import React, {useState} from "react";

function NewBoxForm({ addBoxes }) {

    const INITIAL_STATE = {
        width: "",
        height: "",
        bgColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBoxes({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="width">Width : </label>
                <input id="width"
                    type="text"
                    name="width"
                    placeholder="Enter width of box"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="height">Height : </label>
                <input id="height"
                    type="text"
                    name="height"
                    placeholder="Enter height of box"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="bgColor">Background Color : </label>
                <input id="bgColor"
                    type="text"
                    name="bgColor"
                    placeholder="Enter color of box"
                    value={formData.bgColor}
                    onChange={handleChange}
                />
            </div>            
            <button>Add a Box</button>
        </form>
    );
}


export default NewBoxForm;