// imports elements
import { useState, useEffect } from "react";

// Usestate to trace value

export default function MainApp({ films }) {
  const [userChoice, setUserChoice] = useState("");
  return (
    <>
      {/* Select */}
      <div className="mx-5 mt-5">
        <select
          className="form-select form-select-lg mb-3 "
          aria-label="Large select example"
          onChange={(e) => setUserChoice(e.target.value)}
        >
          <option selected>Scegli il genere</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>

      {/* result of selecting buttons */}
      <h1 className="mx-5 mb-4">Results:</h1>
      <div className="row justify">
        {films.map((element, index) => (
          <div key={index} className="col-2 ">
            <p className="text-center">{element.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
