
import './App.css';
import Search from './Components/Search';
import { moviesData } from './data';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import MovieAdd from './Components/MovieAdd';
import {BrowserRouter, Switch } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Info from './Components/Info';


function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchValue, setSearchValue]= useState("");
  const [searchRating, setSearchRating]= useState(0);

  //let's add new movies to the list
  const handleAdd = (newMovie)=> setMovies([...movies,newMovie])
  //let's handle search the movie via its rating
  const handleRating =(rate)=> setSearchRating (rate);
  //let's handle search the movie via its name value 
  const handleSearch =(e)=> setSearchValue (e.target.value);
  return (
    <div className="App">

      <BrowserRouter>
      <Search 
         searchValue  = {searchValue}
         searchRating = {searchRating}
         handleRating = {handleRating}
         handleSearch = {handleSearch} 
      />
       <Switch>
         <Route exact path='/' render={()=>
      <MovieList movie={movies.filter((movie)=> 
        movie.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase().trim())&& movie.rating>= searchRating)} />
      }
      />
      
      <Route  exact path='/Info/:name' render={(props)=>
      <Info data={movies} {...props}/>
      }
      />
        

      </Switch>
      
      <MovieAdd handleAdd={handleAdd}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
