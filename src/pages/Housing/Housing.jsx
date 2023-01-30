import Apparts from "./../../data/dataList.json"
import { useParams } from "react-router-dom"
import Rating from "../../components/Rating/Rating" 
import Collapse from "./../../components/Dropdown/Collapse"
import Tag from "../../components/Tag/Tag"
import Gallery from "../../components/Carousel/Carousel"
import Error from "../Error/Error"
import "./Housing.css"

export default function Housing() {

    let housingId = useParams().id
    const appart = Apparts.find((appart) => appart.id === housingId)

    if(!appart) {
        return <Error />
    }
   
    return (

        <main className="housing">
            <section id="carousel">
                <Gallery pictures={appart.pictures}/>
            </section>
            <article className="descriptions">
                <section className="information">
                    <h1 className="lodge-title">{appart.title}</h1>
                    <p className="location">{appart.location}</p>
                    <Tag className="tag" tagValue={appart.tags}/>
                </section>
                <div className="stickers">
                    <div className="author">
                        <p className="name">{appart.host.name}</p>
                        <img src={appart.host.picture} alt="utilisateur" className="picture"/>
                    </div>
                    <Rating starsValue={appart.rating}/>
                </div>
                    
                <div className="explanations-container">
                    <Collapse name="Description" data={appart.description}/>
                    <Collapse name="Équipements" data={
                        <ul>
                            {appart.equipments.map((equipement, i) => ( <li key={i}>{equipement}</li> ))}
                        </ul>
                    }/>
                </div>
            </article>
        </main> 
    )
    
}

