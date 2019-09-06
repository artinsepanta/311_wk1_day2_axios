// import axios here
 let axios = require("axios");

const api_key = 'd771b19ef336ed8381def3a60b574464'

const discoverMovie = () => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=${api_key}'
  return axios.get(url)
   .then((response)=>{
    return response;
  })
}

const getMovieById = (id) => {
 const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  return axios.get(url)
    .then((result) => {
     return result.data;
    })
 }
  const getMovieByIdFailure = () => {
   const fakeId = 5783, 
   const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
    return axios.get(url)
      .then((response) => {
       return response.status;
    })
 }


module.exports = {
   discoverMovie,
 getMovieById,
 getMovieByIdFailure
 }

