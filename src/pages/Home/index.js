import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import NowShowing from '../../components/NowShowing/NowShowing'
import MainSection from '../../components/MainSection/MainSection'
import UpcomingMovies from '../../components/UpcomingMovies/UpcomingMovies'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'



const Home = ()=> {
    // const dispatch = useDispatch()
    // useEffect(()=> {
    //     dispatch(GetMovies())
    // }, [])
    // const navigate = useNavigate()
    // const {data, error, loading } = useSelector((state) => state.movies);
    // const {isLogin} = useSelector((state) => state.auth); //required
    // useEffect(()=> {
    //     if(isLogin == false) {
    //     navigate('/', {replace: true})
    //     }
    // },[isLogin])

    // if(loading) {
    //     return <div>loading...</div>
    // }
    // if(error) {
    // return  <div>error...</div>
    // }
    return(
        <>
        <Navbar />
        <MainSection />
        <NowShowing />
        <UpcomingMovies />
        <Subscribe /> 
        <Footer />
        </>
    )
}

export default Home