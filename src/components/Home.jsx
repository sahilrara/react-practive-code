import React, { useEffect, useState, useContext } from "react";
import { DataTransferProvider } from "../contexts/DataTransfer";

const Home = () => {
  const { showData, show, setShow } = useContext(DataTransferProvider);

  const [dogImage, setDogImage] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setDogImage(data.message));
  }, []);
  return (
    <div>
      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"100px"} src={dog}></img>
        ))}
    </div>
  );
};

export default Home;
