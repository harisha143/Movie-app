// api_key
const api_key= "1e38e775490536c084d8121418650b7d";
const url='https://api.themoviedb.org/3/search/movie?api_key=1e38e775490536c084d8121418650b7d';
const imgUrl='https://image.tmdb.org/t/p/w500';

// selecting elements
const buttonElement=document.querySelector('#search');
const inputElement=document.querySelector('#inputName');
const movieSearchable=document.querySelector('#movie-searchable');

function movieSection(movies){
    return movies.map((movie) =>{
        if(movie.poster_path){
            return `
            <img src=${imgUrl +movie.poster_path} data-movie-id=${movie.id}/>
            `; 
        }
    })
}

function createMovieContainer(movies){
const movieElement = document.createElement('div');
movieElement.setAttribute('class','movie');

 const movieTemplate=`
 <section class="section">
 ${movieSection(movies)}
 </section>
 `;

 movieElement.innerHTML=movieTemplate;
 return movieElement;

}

// button function
buttonElement.onclick= function(event){
    event.preventDefault();
    const value=inputElement.value;

    const newurl= url + '&query='+value;

    fetch(newurl)
    .then((res) => res.json())
    .then((data) => {
        // data. results
        const movies=data.results;
        const movieBlock= createMovieContainer(movies);
        movieSearchable.appendChild(movieBlock);
        console.log('data:',data);
    })
    .catch((error) => {
        console.log('error:',error);
    });
    
    console.log(value);
}