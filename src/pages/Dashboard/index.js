import axios from 'axios'
import moment from 'moment'
import React,{ useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import Footer from '../../components/Footer/Footer'
import NavAdmin from '../../components/NavAdmin'
import './Dashboard.css'







const Dashboard = ()=> {
    const {data} = useSelector((state) => state.auth);
    const [search, setSearch] = useState('title')

    const [movieDetails, setMovieDetails] = useState({
        loading: 'false',
        results: {
            data: []
        }
    })
    
    //add
    const [refetch, setRefetch] = useState(false)
    const [formAdd, setFormAdd] = useState({})
    const [formEdit, setFormEdit] = useState({})
    
    const formData = new FormData()
    formData.append("cover", formEdit.cover || formAdd.cover)
    formData.append("title", formEdit.title || formAdd.title)
    formData.append("categories", formEdit.categories || formAdd.categories)
    formData.append("release_date", formEdit.release_date || formAdd.release_date)
    formData.append("director", formEdit.director || formAdd.director)
    formData.append("duration", formEdit.duration || formAdd.duration)
    formData.append("casts", formEdit.casts || formAdd.casts)
    formData.append("synopsis", formEdit.synopsis || formAdd.synopsis)


    
    const [query, setQuery] = useState ({})

    useEffect( () => {
        const {title = '', order = 'title', categories = '', release_date = '', sortBy='ASC'} = query
        setMovieDetails((prevState) => ({
            ...prevState,
            loading: true
        }))
        axios({
            method: 'GET',
            url: `https://tickitz-backend-dio.herokuapp.com/api/v1/movies/?title=${title}&categories=${categories}&release_date=${release_date}&order=${order}&sortBy=${sortBy}`
        }).then((res) => {
            setMovieDetails ({
                loading: false,
                results: res.data
            })
        })
    }, [refetch, query])

    const handleAdd = async(date) => {
        setFormAdd({
            release_date: date
        })
    }

    const handleAddMovies = async(e) => {
        e.preventDefault()
        try {
            const result = await axios ({
                method: 'POST',
                data: formData,
                url: 'https://tickitz-backend-dio.herokuapp.com/api/v1/movies/',
                headers: {
                    authorization: data.token
                }
            })
            if(result.data.status === 200) {
                alert('succesfully Added')
                setRefetch(!refetch) //refetch data
            } else {
                alert('failed, try again')
            }
        } catch(err) {
            alert(err.response.data.message)
            console.log(err)
        }
    }
    const handleDelete = async(id_movies) => {
        if(window.confirm('Are you sure?')) {
            axios({
                method: 'DELETE',
                url: `https://tickitz-backend-dio.herokuapp.com/api/v1/movies/${id_movies}`,
                headers: {
                    authorization: data.token
                }
            }).then((res)=> {
                alert(res.data.message)
                setRefetch(!refetch)
            }).catch((err)=> {
                alert(err.response.data.message)
            })
        }
    }
    
    const [idMovies, setIdMovies] = useState(0)
    const handleEdit = async(prevData, date) => {
        setFormEdit({
            ...prevData,
            release_date: date
        })
    }

    const handleUpdateMovies = async(e) => {
        e.preventDefault()
        try {
            const result = await axios ({
                method: 'PATCH',
                data: formData,
                url: `https://tickitz-backend-dio.herokuapp.com/api/v1/movies/${idMovies}`,
                headers: {
                    authorization: data.token
                }
            })
            if(result.data.status === 200) {
                alert('succesfully Updated')
                setRefetch(!refetch) //refetch data
            } else {
                alert('failed, try again')
            }
        } catch(err) {
            alert(err.response.data.message)
            console.log(err)
        }
    }
    return(
        <>
        <NavAdmin/>
        <div className="form-filter m-5 mx-auto px-4 main-parent">
            <div className="row mb-3">
                <div className="col-4">
                <input placeholder='Search Movies' onChange={(e) => {
                    setRefetch(!refetch)
                    if (search === 'title') {
                        setQuery({
                            title: e.target.value,
                            order: 'title'
                        })
                    } else if(search === 'categories') {
                        setQuery({
                            categories: e.target.value,
                            order: 'categories'
                        })
                    } else if(search === 'release_date') {
                        setQuery({
                            release_date: e.target.value,
                            order: 'release_date'
                        })
                    }
                }} />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-4">
                <select className="form-select" aria-label="Default select example" onChange={(e) => {
                    setSearch(e.target.value)
                }}>
                    <option defaultValue="title">Title</option>
                    <option value="categories">Genre</option>
                    <option value="release_date">Date</option>
                </select>
                </div>
            </div>
            <div className="row mb-2">
            <div className="col-4">
                <select className="form-select" aria-label="Default select example" onChange={(e) => {
                    setQuery(prevData => ({
                        ...prevData,
                        sortBy: e.target.value
                    }))
                    setRefetch(!refetch)
                    console.log("haloooo")
                }}>
                    <option defaultValue="ASC">ASC</option>
                    <option value="DESC">DSC</option>
                </select>
            </div>
            </div>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNewMovies">Add new Movies</button>
                <div className="cards-movie d-flex flex-wrap justify-content-between">
                    {movieDetails.results.data.map((movies, index) => {
                        var curr = new Date(movies.release_date);
                        var date = curr.toISOString().substr(0,10);
                        return (
                        <div className="card-size card-movie d-flex flex-column mt-5 border p-2 justify-content-center align-items-center rounded-3" key={index}>
                            <img className="card-movie-list image-size rounded-3 mt-2" src={`https://tickitz-backend-dio.herokuapp.com/uploads/${movies.cover}`} alt={movies.title}/>
                            <p className="text-center mt-2 mx-2">{movies.title}</p>
                            <p className="text-center mx-1">{movies.categories}</p>
                            <p className="text-center">{moment(movies.release_date).format('DD MMMM YYYY')}</p>
                            <div className="d-flex justify-content-center mt-2">
                                <button className="btn btn-primary m-2" onClick={() => {
                                    setIdMovies(movies.id_movies)
                                    handleEdit(movies, date)
                                }}
                                 data-bs-toggle="modal" data-bs-target="#editMovies">Edit</button>
                                <button className="btn btn-primary m-2" onClick={() => handleDelete(movies.id_movies)}>Delete</button>
                            </div>
                        </div>
                        )
                    })}
                </div>
                {/* Add Movies */}
                <div className="modal fade" id="addNewMovies" tabIndex="-1" aria-labelledby="addNewMoviesLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addNewMoviesLabel">Add New Movies</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> handleAdd()}></button>
                            </div>
                            <form onSubmit= {(e) => handleAddMovies(e)}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="cover" className="form-label">Cover</label>
                                        <input type="file" className="form-control" id="cover" onChange={(e) => {setFormAdd(prevState => ({...prevState, cover: e.target.files[0] }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">title</label>
                                        <input type="text" className="form-control" id="title" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, title: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="categories" className="form-label">Categories</label>
                                        <input type="text" className="form-control" id="categories" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, categories: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="release_date" className="form-label">Release Date</label>
                                        <input type="date" className="form-control" id="release_date" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, release_date: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="director" className="form-label">Director</label>
                                        <input type="text" className="form-control" id="director" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, director: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="duration" className="form-label">Duration</label>
                                        <input type="text" className="form-control" id="duration" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, duration: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="casts" className="form-label">Casts</label>
                                        <input type="text" className="form-control" id="casts" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, casts: e.target.value }))
                                    }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="synopsis" className="form-label">Synopsis</label>
                                        <input type="text" className="form-control" id="synopsis" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, synopsis: e.target.value }))
                                    }} />
                                    </div>  
                                </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={(e) => handleAddMovies(e)}>Save changes</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            {/* edit movies */}
            <div className="modal fade" id="editMovies" tabIndex="-1" aria-labelledby="editMoviesLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-cover" id="editMoviesLabel">Edit Movies</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={(e) => handleUpdateMovies(e)} encType='multipart/form-data'>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="cover" className="form-label">cover</label>
                                        <input type="file" className="form-control" id="cover" defaultValue={formEdit.cover} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, cover: e.target.files[0] }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">title</label>
                                        <input type="text" className="form-control" id="title" value={formEdit.title} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, title: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="categories" className="form-label">Categories</label>
                                        <input type="text" className="form-control" id="categories" value={formEdit.categories} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, categories: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="release_date" className="form-label">release_date</label>
                                        <input type="date" className="form-control" id="release_date" defaultValue={formEdit.release_date} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, release_date: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="director" className="form-label">director</label>
                                        <input type="text" className="form-control" id="director" value={formEdit.director} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, director: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="duration" className="form-label">duration</label>
                                        <input type="text" className="form-control" id="duration" value={formEdit.duration} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, duration: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="casts" className="form-label">casts</label>
                                        <input className="form-control" id="casts" value={formEdit.casts} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, casts: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="synopsis" className="form-label">Synopsis</label>
                                        <textarea rows={10} className="form-control" id="synopsis" value={formEdit.synopsis} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, synopsis: e.target.value }))
                                        }} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={(e) => handleUpdateMovies(e)}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Dashboard