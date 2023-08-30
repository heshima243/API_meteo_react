import axios from "axios";
import Sirch from "./Sirch";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import { useState } from "react";

const Home = () => {
  const [data, setdata] = useState([
    {
      celcius: 10,
      name: "London",
      humidity: 10,
      speed: 2,
      image: "/image/weather.png",
    },
  ]);

  const [name, setname] = useState("");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c374c851e529f93bcde4b517e396a9aa&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let pathImage = "";

          if (res.data.weather[0].main.includes("Clouds")) {
            pathImage = "/image/cloud.webp";
          } else if (res.data.weather[0].main.includes("Clear")) {
            pathImage = "/image/clear.png";
          } else if (res.data.weather[0].main.includes("Drizzle")) {
            pathImage = "/image/drizzle.webp";
          } else if (res.data.weather[0].main.includes("Mist")) {
            pathImage = "/image/mist.png";
          } else {
            pathImage = "/image/weather.png";
          }

          setdata([
            {
              celcius: res.data.main.temp,
              name: res.data.name,
              humidity: res.data.main.humidity,
              speed: res.data.wind.speed,
              image: pathImage,
            },
          ]);
          console.log(res.data);
        })
        .catch((err) => console.log("erreur"));
    }
  };

  return (
    <div className="container">
      <div className="weather">
        <Sirch setname={setname} name={name} handleClick={handleClick} />

        <div className="zinfo">
          <Temperature data={data[0]} />

          <div className="details">
            <Humidity data={data[0]} />
            <Wind data={data[0]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
