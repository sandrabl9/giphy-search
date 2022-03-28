import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";
import "./ListOfGifs.css";

const ListOfGifs = ({ params }) => {
  const { keyword } = params;  
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  return (
    <div className="card">
      {gifs.map((gif) => (
        <Gif 
        id={gif.id} 
        key={gif.id} 
        title={gif.title} 
        url={gif.url} />
      ))}
    </div>
  );
};

export default ListOfGifs;
