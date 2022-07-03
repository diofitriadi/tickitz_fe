
import axios from 'axios'
import moment from 'moment'
import React,{ useState, useEffect } from 'react'
import './Dashboard.css'



const Dashboard = ()=> {
    const [movieDetails, setMovieDetails] = useState({
        loading: 'false',
        results: {
            data: []
        }
    })
    
    //add
    const [refetch, setRefetch] = useState(false)
    const [formAdd, setFormAdd] = useState({
        cover: "",
        title: "",
        categories: "",
        release_date: "",
        director: "",
        duration: "",
        casts: "",
        synopsis: "",
    })

    const [formEdit, setFormEdit] = useState({})
        const [query, setQuery] = useState ({
        title: "",
        sortBy: "",
        orderBy: "",
    })
    console.log(formEdit, 'check')

    useEffect( () => {
        const {title} = query
        setMovieDetails((prevState) => ({
            ...prevState,
            loading: true
        }))
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/v1/movies/
            ${title ? `?title=${title}` : ''}`,
        }).then((res) => {
            setMovieDetails ({
                loading: false,
                results: res.data
            })
        })
    }, [refetch, query])

    const handleAddMovies = async(e) => {
        e.preventDefault()
        try {
            const result = await axios ({
                method: 'post',
                data: formAdd,
                url: 'http://localhost:3000/api/v1/movies/',
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
                url: `http://localhost:3000/api/v1/movies/${id_movies}`
            }).then((res)=> {
                alert(res.data.message)
                setRefetch(!refetch)
            }).catch((err)=> {
                alert(err.response.data.message)
            })
        }
    }
    
    const handleEdit = async(prevData) => {
        setFormEdit({
            ...prevData,
            release_date: moment(prevData.release_date).format('YYYY-MM-DD')
        })
    }

    const handleUpdateMovies = async(e) => {
        e.preventDefault()
        try {
            const result = await axios ({
                method: 'put',
                data: formEdit,
                url: `http://localhost:3000/api/v1/movies/${formEdit.id_movies}`,
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
    console.log(formEdit, 'edit')
    return(
        <>
        <div className="form-filter">
            <input placeholder='Search Movies' onChange={(e) => {
                    console.log(e, 'cekcekcek')
                    setQuery(prevData => ({
                    ...prevData,
                    title: e.target.value
                    }))
            }} />
                <select className="form-select" aria-label="Default select example" onSelect={(e) => {
                    setQuery(prevData => ({
                        ...prevData,
                        sorBy: e.target.value
                    }))
                }}>
                    <option defaultValue>Title</option>
                    <option value="1">Genre</option>
                    <option value="2">Date</option>
                </select>
                <select className="form-select" aria-label="Default select example" onSelect={(e) => {
                    setQuery(prevData => ({
                        ...prevData,
                        orderBy: e.target.value
                    }))
                }}>
                    <option defaultValue>ASC</option>
                    <option value="1">DSC</option>
                </select>
                <button className="btn" data-bs-target="#addNewMovies">Add new Movies</button>
                <div className="cards-movie">
                    {movieDetails.results.data.map((movies, index) => {
                        return (
                        <div className="card-movie" key={index}>
                            <img className="card-movie-list" src={`${movies.cover}`} alt={movies.title}/>
                            <button className="btn-1" onClick={() => handleEdit(movies)} data-bs-toogle="modal" data-bs-target="#editMovies">Edit</button>
                            <button className="btn-2" onClick={() => handleDelete(movies.id_movies)}>Delete</button>
                        </div>
                        )
                    })}
                </div>
                {/* Add Movies */}
                <div className="modal fade" id="addNewMovies" tabIndex="-1" aria-labelledby="addNewMovieLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addNewMovieLabel">Add New Movies</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit= {(e) => handleAddMovies(e)}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="cover" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="cover" onChange={(e) => {setFormAdd(prevState => ({...prevState, cover: e.target.value }))
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
                                        <input type="text" className="form-control" id="release_date" onChange={(e) => {setFormAdd(prevState => ({ ...prevState, release_date: e.target.value }))
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
            <div className="modal fade" id="editMovie" tabIndex="-1" aria-labelledby="editMovieLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-cover" id="editMovieLabel">Edit Movies</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form onSubmit={(e) => handleUpdateMovies(e)}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="cover" className="form-label">cover</label>
                                        <input type="text" className="form-control" id="cover" value={formEdit.cover} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, cover: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">title</label>
                                        <input type="text" className="form-control" id="title" value={formEdit.title} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, title: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="categories" className="form-label">Release Date</label>
                                        <input type="text" className="form-control" id="categories" value={formEdit.categories} onChange={(e) => {
                                            setFormEdit(prevState => ({ ...prevState, categories: e.target.value }))
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="release_date" className="form-label">release_date</label>
                                        <input type="text" className="form-control" id="release_date" value={formEdit.release_date} onChange={(e) => {
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
        </>
    )
}

export default Dashboard