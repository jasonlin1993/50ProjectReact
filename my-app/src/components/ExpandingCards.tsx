// components/ExpandingCards.tsx
import { useState } from "react";
import styles from "@/styles/expanding-cards.module.css";

interface PanelData {
  title: string;
  image: string;
}

const panels: PanelData[] = [
  {
    title: "Explore The World",
    image:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Wild Forest",
    image:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Sunny Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80",
  },
  {
    title: "City on Winter",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Mountains - Clouds",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80",
  },
];

export default function ExpandingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`${styles.panel} ${
            index === activeIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${panel.image})` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}
