import "./Rating.css"

export default function Rating(props) {
    const starsValue = props.starsValue

    const rating = [1, 2, 3, 4, 5]
    return(
        <div className="rating">{
            rating.map((stars) =>
                starsValue >= stars ? <i className="fa-solid fa-star red" key={stars}></i> : <i className="fa-solid fa-star grey" key={stars}></i>
            )
        } 
        </div>
    )

}