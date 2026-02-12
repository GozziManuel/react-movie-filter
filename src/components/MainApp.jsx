import { useState, useEffect } from "react";

// imports elements

export default function MainApp({ films }) {
  return (
    <>
      {/* Select */}
      <div className="mx-5 mt-5">
        <select
          className="form-select form-select-lg mb-3 "
          aria-label="Large select example"
        >
          <option selected>Scegli il genere</option>
          <option value="1">Romantico</option>
          <option value="3">Azione</option>
          <option value="3">Fantascienza</option>
          <option value="4">Thriller</option>
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
