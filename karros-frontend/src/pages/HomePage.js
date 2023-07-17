import { useEffect, useState } from "react";
import { getCarListRequest } from "../services/carServicers";
import CarContainer from "../components/car/CarContainer";
import { getAmountFormat } from "../stringHelper";

function HomePage() {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    getCarListRequest()
      .then((response) => setCarList(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="image-block">
      {carList.length > 0 ? (
        carList.map((car) => {
          return (
            <CarContainer
              key={car.id}
              name={car.name}
              brand={car.brand}
              model={car.model}
              year={car.year}
              amount={getAmountFormat(car.amount)}
              image={car.base_64_image}
              kilometers={car.kilometers}
            />
          );
        })
      ) : (
        <p>Nenhum carro disponível no momento</p>
      )}
    </div>
  );
}

export default HomePage;
