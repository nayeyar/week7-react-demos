import { useState } from "react";

// you can also destructure the props object using {data, setData}
const Form = (props) => {
    const [formTitle, setFormTitle] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [formTime, setFormTime] = useState("");

    const handleSubmit = (e) => {
        // prevent default event behavior
        e.preventDefault();
        // data processing
        props.setData([...props.data, { title: formTitle, description: formDescription, time: formTime }])
        // reset the states
        setFormTitle("");
        setFormDescription("");
        setFormTime("");
    }

    return (<form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={formDescription} onChange={(e) => setFormDescription(e.target.value)} />
        <input type="text" placeholder="Time" value={formTime} onChange={(e) => setFormTime(e.target.value)} />
        <button type="submit">Submit</button>
    </form>)
}

export default Form;