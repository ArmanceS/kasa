import React from "react"
import { useState } from "react"
import "./Collapse.css"

export default function Dropdown (props) {
    const [open, setOpen] = useState(false)
    const name = props.name
    const data = props.data

    return (
            <div className="explanations">
                <div className="dropdown" onClick={()=> {
                setOpen(!open)
                }}>
                    <p><strong className="title">{name}</strong></p>
                    {open ? (<i className="fa-solid fa-angle-up open"></i>) : (<i className="fa-solid fa-angle-down close"></i>)}
                </div>
                {open && name === "Équipements" && (<div className="description">{data}</div>)}
                {open && name !== "Équipements" && (<p className="description">{data}</p>)}
            </div>
        )
}