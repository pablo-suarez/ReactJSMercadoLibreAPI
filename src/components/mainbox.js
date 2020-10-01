import React, { useState } from "react";
import logo from "./assets/Logo_ML.png";
import search from "./assets/ic_Search.png";
import "./styles.css";
import { Link } from "react-router-dom";
/**
 * @constant MainBox toma el dato y lo envía como parametro a search para su búsqueda
 */
const MainBox = () => {
  /**
   * @constant query guarda el input que se quiere buscar
   */
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="mainbox">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <input
          type="text"
          className="inputbox"
          placeholder="Nunca dejes de buscar"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Link to={"/search/" + query}>
          <button type="submit" onClick={() => {}}>
            <img src={search} alt="Buscar" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default MainBox;
