import React, {useState} from 'react'
import axios from 'axios'


const MoviesList = () => {

    let [Movie,setMovie] = useState([''])

    const fetchMovie = async()=>{
        const data =  await axios.get('http://localhost:5000/api/getMovies')
        setMovie(data.data.message)

    }

    
    return (
        <div  style={{textAlign:"Center"}}>
            <h2>Movie list will render here:-</h2>
            <div className="button">
                <button onClick={fetchMovie}>Get Movies</button>
                
                  {Movie[0] && Movie.map((item,key)=>{
                    return(
                        <div className="cards">
                            <h3>item.title</h3>
                        </div>
                    )
                })}
               

                
                
            </div>

        </div>
    )
}

export default MoviesList
