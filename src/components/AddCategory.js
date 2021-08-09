import React, { useState } from "react";
//import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrid } from "./GifGrid";
import { obtenerGifs } from "./HttpProvider";

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState("");
  const [categories, setCategories] = useState("");
  const [images, setImages] = useState({
    data: [],
    loading: "",
  });

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(inputValue);

      setImages({
        data: [],
        loading: "Cargando!",
      });

      obtenerGifs(inputValue)
        .then((data) => {
            setImages({
            data: data,
            loading: "Cargado!",
            });
      }, function(error) {
        console.log(error); // Error!
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>

      <h3>Categoría seleccionada: {categories}</h3>

      <div className="card-grid">
        <p className="loading">{images.loading}</p>
        {images.data.map((image) => (
          <GifGrid key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};
