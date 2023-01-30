import React from "react"
import { useNavigate } from "react-router-dom"
import Housing from "./../../data/dataList.json"
import "./Home.css"

export default function Home (){

    let navigate = useNavigate()
    return(
        <>
            
            <section className="section_1">
                <h1 id="index-title">Chez vous, partout et ailleurs</h1>
            </section>
            <main className="gallery">
                {
                    Housing.map(data => {
                        const cover = {
                            backgroundImage: `url(${data.cover})`,
                            backgroundSize: 'cover'
                        }
                        return (
                            <div onClick={() => {navigate('/housing/'+ data.id)}} className="renting" key={data.id} style={cover}>
                                <h2 className="renting-title">{data.title}</h2>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}