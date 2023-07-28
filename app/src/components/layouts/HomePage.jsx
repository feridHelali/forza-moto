// get All Motorbike from API -- done
// pass motrbike(single) in Motrobike Card Component-- done
// add Button [AddToCart] if qte of one product is null
// add + / - and quantity if qte in cart of that product !=0

import { useEffect, useState } from "react";
import api from "../../api/common.http";
import MotorbikeCard from "../Motorbike/MotorbikeCard";
import "./HomePage.css";
import Banner from "./Banner";

function HomePage() {
  const [motorbikes, setMotorbikes] = useState([]);

  async function getMotorbikes() {
    await api
      .get(`/motor/all`)
      .then((response) => response.data)
      .then((data) => {
        setMotorbikes(data.data);
      })
      .catch((error) => console.error(error.message));
  }

  useEffect(() => {
    getMotorbikes();
  }, []);

  return (
    <>
    <Banner />
      <div className="home">
        {motorbikes.map((motorbike) => (
          <MotorbikeCard
            key={motorbike._id}
            id={motorbike._id}
            coverUrl={motorbike.cover_url}
            label={motorbike.label}
            brand={motorbike.brand}
            price={motorbike.price}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
