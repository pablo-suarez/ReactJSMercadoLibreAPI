import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [features, setFeatures] = useState([]);
  const [description, setDescription] = useState([]);
  const [attrib, setAttrib] = useState([]);
  const { id } = useParams();
  const [categ, setCateg] = useState([]);
  /**
   * @constant features contiene las características el producto de las cuales obtendremos información de él
   * @constant description contiene la descripción del producto obtenida del api id/description
   * @constant attrib obtiene el arreglo de los atributos del producto, filtrado aparte para obtener el estado del producto Ejm:(Nuevo)
   * @constant id es el parámetro identificador del producto selecionado para traer sus datos
   * @constant categ contiene los atributos del producto obtenidos de la API categories para el breadcrumb
   */
  /**
   * Se obtiene cada dato necesario de su respectivo API y algunos se filtran para obtener un dato más complejo
   * de obtener.
   * Una vez obtenidos se imprimen en el HTML
   */
  useEffect(() => {
    fetch(`/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.author = {
          name: "Juan Pablo",
          lastname: "Suarez Soler",
        };
        setAttrib(data.attributes);
        setFeatures(data);
        /**
         * Se obtiene el id de la categoria y se busca sus detalles en el API para
         * llenar el breadcrumb
         */
        fetch("/categories/" + data.category_id)
          .then((resp) => resp.json())
          .then((datac) => {
            datac.author = {
              name: "Juan Pablo",
              lastname: "Suarez Soler",
            };

            setCateg(datac.path_from_root);
          });
      });
    /**
     * Se obtiene la descripción del producto desde su API
     */
    fetch(`/items/${id}/description`)
      .then((resd) => resd.json())
      .then((datad) => {
        datad.author = {
          name: "Juan Pablo",
          lastname: "Suarez Soler",
        };

        setDescription(datad);
      });
  }, []);

  return (
    <div>
      <div className="bread">
        {categ
          .filter((attr) => attr)
          .map((filAttr, index) => (
            <span key={filAttr.id}>
              {" "}
              {filAttr.name}
              {categ.length - 1 !== index ? <span>></span> : <></>}
            </span>
          ))}
      </div>

      <div className="row detail">
        <div key={features.id}>
          <div className="column leftdet">
            <img
              className="imgdet"
              src={features.thumbnail}
              alt={features.thumbnail}
            />
          </div>
          <div className="column rightdet">
            {attrib
              .filter((attr) => attr.id === "ITEM_CONDITION")
              .map((filAttr) => (
                <span className="att" key={filAttr.id}>
                  {" "}
                  {filAttr.value_name}
                </span>
              ))}
            <span className="att"> - {features.sold_quantity} vendidos</span>
            <p className="titdet">{features.title}</p>
            <p className="pricedet">$ {features.price}</p>
            <button className="butbuy">Comprar</button>
          </div>
        </div>
      </div>
      <div className="description">
        <p className="titledes">Descripción del producto</p>
        <p className="desc">{description.plain_text}</p>
      </div>
    </div>
  );
};

export default Details;
