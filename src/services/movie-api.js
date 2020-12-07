//Defining the variable that I am assigning to the API URL
const BASE_URL='https://api.themoviedb.org/3/movie/now_playing'

const API_KEY='?api_key=1b455a03201a0f93f1df8547d16af104'

const REGION ='&language=en-US&page=1'

//make the function that makes the AJAX request and fetchs data
export function fetchApiData(){
    return fetch(BASE_URL + API_KEY + REGION).then(res=> res.json())
}