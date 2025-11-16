import { useState } from "react";
function ArrayDestruct() {
  const [movies, setMovies] = useState(["Iron Man", "Captain America"]);
  const [textInput, setTextInput] = useState("");

  const handleAddMovie = (e) => {
    e.preventDefault();

    textInput
      ? setMovies((m) => [...m, textInput])
      : console.log("Enter some value");
    setTextInput("");
  };

  const handleDeleteMovie = (indexOfMovie) => {
    setMovies((movies) => movies.filter((_, index) => index !== indexOfMovie));
  };

  return (
    <>
      <h1>My Favourite Movies</h1>
      <ul>
        {movies.map((movie, index) => {
          return (
            <li key={index} onClick={() => handleDeleteMovie(index)}>
              {movie}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Enter Movie Name"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      {!textInput && <p>Enter Some Movie</p>}
      {/* Sometimes i surprise myself 
      the above code displays the text is there is no Input */}
    </>
  );
}

export default ArrayDestruct;
