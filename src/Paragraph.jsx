import { useState } from "react";
import Paragraphs from "./data";
import { nanoid } from 'nanoid'



let Paragraph = () => {

    let [value, setValue] = useState(0);
    let [para, setPara] = useState([]);

    let ChangeHandler = (e) => {
        setValue(e.target.value);
    }


    let submitHandler = (e) => {
        e.preventDefault();

        setValue(value)

        let count = parseInt(value);
        // console.log(typeof count);
        setPara(Paragraphs.slice(0, count))
    }


    return (

        <div className="container">
            <h2>TIRED OF BORING LOREM IPSUM?</h2>
            <form action="" className="form-control" onSubmit={submitHandler}>
                <label htmlFor="paragraph">Paragraph :</label>
                <input type="number" value={value} id="paragraph" min={1} max={8} onChange={ChangeHandler} />
                <button type="submit" className="btn">Generate</button>
            </form>

            <div className="paragraph-container">
                {para.map((item) => {
                    return (
                        <div key={nanoid()}>
                            <p>{item}</p>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}


export default Paragraph;