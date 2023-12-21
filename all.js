const result=document.querySelector('.movieList');

//window responsive
window.onresize=function(){
    const indexBanner=document.querySelector('.cover').style.width=window.innerWidth+'px'   
};




//TMDB API
const imgURL='https://image.tmdb.org/t/p/w500/';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTZhMWZkZTE4Mjg1NmY4MTRiZjRiZmQ2ZDVmYjkxZCIsInN1YiI6IjY1ODE1NGU3YmYwZjYzMDhhZTYyNTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4R4M4rGwITGpRm4g9SviJFTUEt0tLAr11G-vdy6Up68'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc', options)
    .then(res => res.json())
    //call back movieResult
    .then(data =>{movieResult(data.results)
    return data;})



   

   //get Data value and put on movie List
  function movieResult(data){
    result.innerHTML='';
    data.forEach(movie=>{
        const  {title, poster_path, vote_average, overview}=movie;
        const addEl=document.createElement('li');
        addEl.classList.add('movie');
        addEl.innerHTML=`     
        <div class="imgcover">
        <p class="overview">${overview}
        </p>
        <img class="poster" src="${imgURL+poster_path}"  alt="${title}">
        </div>
        <div class="info">
          <h3>${title}</h3>
          <span class="rate">${vote_average}</span>
         </div>`
         result.appendChild(addEl);   
    })

  }





  
