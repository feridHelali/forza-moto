import { useEffect, useState } from "react";
import api from "../../api/common.http";
import './ProductCatalogPage.css'
import getPhotoUrl from '../../utilities/getPhotoUrl'
import { Typography } from "@mui/material";

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
          <Typography variant='h2' w={20} m={2} >{motorbike?.label}</Typography>
          <Typography variant="h2" m={2}>{motorbike?.brand}</Typography>
          <Typography variant="h2" m={2}>{motorbike?.price?.toFixed(3)}</Typography>
        </div>
      </div>))}
    </div>
  )
}

export default ProductCatalogPage

