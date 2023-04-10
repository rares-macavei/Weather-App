import React from "react";
import "./descriptions.css";

import { FaWind, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";


const Descriptions = ({ weather }) => {

  const cards = [
    {
      id: 1,
      icon: <BiHappy />,
      title: "Feels Like",
      data: weather.feels_like.toFixed(),
      unit: "°C",
    },
    {
      id: 2,
      icon: <MdCompress />,
      title: "Pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 3,
      icon: <MdOutlineWaterDrop />,
      title: "Humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 4,
      icon: <FaWind />,
      title: "Wind Speed",
      data: weather.speed.toFixed(),
      unit: "m/s",
    }
  ];
  return (
    <div>
      <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <p>{title}</p>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Descriptions;
