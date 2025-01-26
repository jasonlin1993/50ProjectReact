import React, { useState } from "react";

const panelsData = [
  {
    title: "Explore The World",
    image:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Wild Forest",
    image:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Sunny Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    title: "City on Winter",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Mountains - Clouds",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-gray-50">
      {/* 外層容器 */}
      <div className="flex w-11/12 max-w-7xl">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`relative flex-1 m-2 h-[80vh] rounded-2xl bg-cover bg-center bg-no-repeat cursor-pointer transition-all duration-700 ease-in-out ${
              activeIndex === index ? " flex-[5]" : "flex-[0.5"
            }`}
            style={{ backgroundImage: `url(${panel.image})` }}
            onClick={() => setActiveIndex(index)}
          >
            <h3
              className={`text-white text-2xl font-semibold absolute bottom-5 left-5  transition-opacity duration-300 ease-in-out ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
