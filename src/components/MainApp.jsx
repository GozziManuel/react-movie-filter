// imports elements
import { useEffect, useState } from "react";

const filmsElements = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];
const noDuplicateFilm = [];
// for cycle for eliminating duplicates
for (const element of filmsElements) {
  const indexArray = element.genre;
  const test = indexArray.indexOf(noDuplicateFilm);
  if (noDuplicateFilm.indexOf(indexArray) === -1) {
    noDuplicateFilm.push(indexArray);
  }
  console.log(test);
}

// Usestate to trace value

export default function MainApp() {
  const [films, setFilms] = useState(filmsElements);

  const [userChoice, setUserChoice] = useState("");
  const [filteredFilm, setFilteredFilms] = useState(films);
  console.log(userChoice);
  console.log(films.includes(userChoice));

  useEffect(() => {
    const uptadedFilms = films.filter(
      (element) => element.genre === userChoice,
    );
    setFilteredFilms(uptadedFilms);
  }, [userChoice]);

  return (
    <>
      {/* Select */}
      <div className="mx-5 mt-5">
        <select
          className="form-select form-select-lg mb-3 "
          aria-label="Large select example"
          onChange={(e) => setUserChoice(e.target.value)}
          value={userChoice}
        >
          <option selected>Scegli il genere</option>
          {noDuplicateFilm.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </select>
      </div>

      {/* result of selecting buttons */}
      <h1 className="mx-5 mb-4">Results:</h1>
      <div className="row justify">
        {filteredFilm.map((element, index) => (
          <div key={index} className="col-2 ">
            <p className="text-center">{element.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
