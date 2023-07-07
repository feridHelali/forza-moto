import "./App.css";
import MotorbikeCard from "./components/Motorbike/MotorbikeCard";
import yamaha from './assets/yamaha.png'
import yamaha2 from './assets/yamaha_2.png'

const motorbikes = [
  {
    _id: 1,
    label: "Forza Moto",
    description: "Forza 523 TS",
    brand: "Forza",
    price: 1500,
    coverUrl:yamaha
  },
  {
    _id: 2,
    label: "Yamaha Moto",
    description: "Yamaha 523 TS",
    brand: "Yamaha",
    price: 7500,
    coverUrl:yamaha2
  },
  {
    _id: 3,
    label: "BMW Motobike",
    description: "BMW Motorbike AS400",
    brand: "BMW",
    price: 7500,
    coverUrl:yamaha
  },
];

function App() {
  return (
    <div className="app">
      <div className="app__body">
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
    </div>
  );
}

export default App;
