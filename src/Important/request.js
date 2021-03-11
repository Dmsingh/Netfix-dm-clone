const Api_Key='51f7347a1867461e4bd9893e8b188fd6'

const request={
    fetchTrending:`/trending/all/week?api_key=${Api_Key}&include_video=true`,
    fetchNetflixOriginal:`/discover/tv?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&include_video=true`,
    fetchTopRated:`/movie/top_rated?api_key=${Api_Key}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2`,
    fetchThrillerMovies:`/discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=5`,
    fetchRomanceMovie:`/discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=60`,
    fetchComedyMovie:`/discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=110`,
    fetchMovieById:`/`

}
export default request