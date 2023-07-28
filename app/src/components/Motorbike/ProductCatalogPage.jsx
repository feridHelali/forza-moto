import { useEffect, useState } from "react";
import api from "../../api/common.http";
import './ProductCatalogPage.css'
import getPhotoUrl from '../../utilities/getPhotoUrl'
import { Typography } from "@mui/material";
import AddToCart from "../cart/AddToCart";

function ProductCatalogPage() {
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
    <div className="productCatalog">
      {motorbikes?.map((motorbike) => (<div key={motorbike._id}>
        <div className="motorbike__line">
          <img src={getPhotoUrl(motorbike?.cover_url)} alt={motorbike.label} />
          <Typography variant='h5' m={2} >{motorbike?.label}</Typography>
          <Typography variant="h6" m={2}>{motorbike?.brand}</Typography>
          <Typography variant="h5" m={2}>{motorbike?.price?.toFixed(3)}</Typography>
          <AddToCart id={motorbike?._id} />
          </div>
      </div>))}
    </div>
  )
}

export default ProductCatalogPage

