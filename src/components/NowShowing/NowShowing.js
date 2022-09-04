import React, { useEffect } from "react";
import { GetMovies } from "../../redux/action/Movies";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./NowShowing.css";

const NowShowing = () => {

  const getMovies = useSelector((state) => state.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMovies());
  }, []);

  return (
    <>
      <div className="toogle" style={{ paddingTop: 10 }}>
        <section className="heading">
          <h3><Link to="/">Now Showing</Link></h3>
          <h5><Link to="/movies">View All</Link></h5>
        </section>
      <div className="card-movie">
        {getMovies.data.data.map((movies, index) => {
          return (
            <div className="card-info" key={index}>
              <img src={`${process.env.REACT_APP_URL_BE}/uploads/${movies.cover}`} alt={movies.title}/>
              <h3>{movies.title}</h3>
              <h4 style={{textAlign: 'center'}}>{movies.categories}</h4>
              <button className="showing-button"><Link to={`/details/${movies.id_movies}`}>Details</Link></button>
            </div>
          );
        })}
      </div>
    </div>
      {/* <div className="toogle" style={{ paddingTop: 10 }}>
      <section>
        <p>
          <Link to="#">Now Showing</Link>
        </p>
        <p>
          <Link to="/movies">view all</Link>
        </p>
      </section>
      <div className="card-movie">
        <ul>
          {getMovies.data.data.map((movies, index) => {
            return (
              <li>
                <div className="image-card items" key={index}>
                  <img
                    src={`${process.env.REACT_APP_URL_BE}/uploads/${movies.cover}`}
                    alt={movies.title}
                  />
                  <p>{movies.title}</p>
                  <p>{movies.categories}</p>
                  <button className="rounded-2 button-showing"><Link to="/movies/details/">Details</Link></button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div> */}
    </>

  );
};
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
//         url: '${process.env.REACT_APP_URL_BE}/api/v1/movies/',
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
