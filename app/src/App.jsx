import "./App.css";
import MotorbikeCard from "./components/Motorbike/MotorbikeCard";

const motorbikes = [
  {
    _id: 1,
    label: "Forza Moto",
    description: "Forza 523 TS",
    brand: "Forza",
    price: 1500,
    coverUrl:'https://www.roadracingworld.com/wp-content/uploads/2022/09/P90479706_The_new_BMW_S_1000_RR_Lightwhite_BMW_M_CROP_1664392856-1536x886.jpg'
  },
  {
    _id: 2,
    label: "Yamaha Moto",
    description: "Yamaha 523 TS",
    brand: "Yamaha",
    price: 7500,
    coverUrl:'https://www.roadracingworld.com/wp-content/uploads/2022/09/P90479706_The_new_BMW_S_1000_RR_Lightwhite_BMW_M_CROP_1664392856-1536x886.jpg'
  },
  {
    _id: 3,
    label: "BMW Motobike",
    description: "BMW Motorbike AS400",
    brand: "BMW",
    price: 7500,
    coverUrl:'https://www.roadracingworld.com/wp-content/uploads/2022/09/P90479706_The_new_BMW_S_1000_RR_Lightwhite_BMW_M_CROP_1664392856-1536x886.jpg'
  },
];

function App() {
  return (
    <div className="app__main">
      {motorbikes.map((motorbike) => (
        <MotorbikeCard
          key={motorbike._id}
          label={motorbike.label}
          description={motorbike.description}
          brand={motorbike.brand}
          price={motorbike.price}
          coverUrl={motorbike.coverUrl}
        />
      ))}
    </div>
  );
}

export default App;
