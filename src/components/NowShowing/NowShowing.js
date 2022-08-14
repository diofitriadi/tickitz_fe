import React, {useEffect, useState} from 'react'
import { GetMovies } from '../../redux/action/Movies';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './NowShowing.css';


const NowShowing = ()=> {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(GetMovies())
    },[])
    const getMovies = useSelector((state)=> state.movies)
    console.log(getMovies.data.data, 'tesss')
    return(
        <div className="toogle" style={{paddingTop: 10}}>
            <section>
                <p><Link to="#">Now Showing</Link></p>
                <p><Link to="#">view all</Link></p>
            </section>
            <div className="card-movie">
                <ul>
                    {getMovies.data.data.map((movies, index) => {
                        return (
                            <li>
                                <div className="image-card items" key={index}>
                                    <img src={`http://localhost:3000/uploads/${movies.cover}`}  alt={movies.title}/>
                                    <button>Details</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    </div>
    )
}
export default NowShowing;    
    // const [movies, setMovies] = useState({
    //     loading: 'false',
    //     results: {
    //         data: []
    //     }
    // })
    // useEffect(()=> {
    //     setMovies((prevState) => ({
    //         ...prevState,
    //         loading: true
    //     }))
    //     axios({
    //         method: 'GET',
    //         url: 'http://localhost:3000/api/v1/movies/',
    //     }).then((res)=> {
    //         setMovies ({
    //             loading: false,
    //             results: res.data
    //         })
    //     })
    // },[])
/*
    const [query, setQuery] = useSearchParams('')
    const [paginate, setPaginate] = useState({
        page: query.get('page') || 1,
        limit: 10
    })
 */