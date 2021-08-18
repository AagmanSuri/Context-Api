import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;

// Problem Comes that , I can not send the data to nav without bringing the useState movies in app
