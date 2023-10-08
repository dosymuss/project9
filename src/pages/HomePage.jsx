import { Link } from "react-router-dom"

const HomePage = ()=>{
    return(
        <div>
            <Link to={"/art"}>articles</Link>
        </div>
    )
}

export default HomePage