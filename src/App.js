import "./styles.css";
import React, { useState } from "react";

const hpDb = {
  Temples: [
    {
      name: "Tara Devi Temple",
      description:
        "Tara Devi is one of the oldest temples in Shimla and one of the important religious sites in Himachal Pradesh. This temple is 250 years old."
    },
    {
      name: "Jakhoo Templee",
      description:
        "It is at a height of 8000-feet from the sea level in Shimla and has a huge Hanuman Temple. The statue of Lord Hanuman is an important landmark here."
    },
    {
      name: "Hidimba Temple",
      description:
        "One of the most famous temples to visit in Manali is the Hidimba Temple. In fact, this temple is also a popular tourist attraction for international and national tourists. It is famous for photography, pristine natural beauty, and religious institutions."
    },
    {
      name: "Vashisht Temple",
      description:
        "Vashisht Temple in Himachal Pradesh is famous for its natural hot springs or sulphur springs. This temple is said to be dedicated to sage Vashisht who came here to meditate. This temple provides separate bathing zones both for men and women."
    },
    {
      name: "Naina Devi Ji",
      description:
        "It is said that in order to pacify Lord Shiva, Lord Vishnu cut Maa Durga (Sati) into 50 pieces and one of her eyes fell here and this is the exact place where the shrine of Naina Devi Ji was built."
    }
  ],
  Cafes: [
    {
      name: "Café 1947- Manali",
      description:
        "Located in the quite lanes of Old Manali, decorated with dimly-lit lighting the Café 1947 is famous for serving the delectable continental, Indian, and Israeli cuisines. It is one of the oldest music cafés of Manali which hosts live performances quite frequently.."
    },
    {
      name: "Hangout-Rooftop Bar & Restaurant- Kasauli",
      description:
        "Located on the roof top of the Hotel Kasauli Regency, with a serene seating. The ambiance and the décor of the café are amazing lit-up with sparkling lighting arrangements. The place is best for its different types of domestic, imported, mixed, brewed, red and white drinks"
    },
    {
      name: "Jim Morrison Cafe - Kasol",
      description:
        "If you like artwork on walls, cheap food, chilling, lying down in one place for a long time, ginger black tea, a decent WiFi connection right in the middle of the picturesque Kasol, then this is your hide"
    },
    {
      name: "Cafe Simla Times - Shimla",
      description:
        "The ambience is artsy and will surely transport you to a different world all together."
    },
    {
      name: " Shiva Cafe - McLeod Ganj",
      description:
        "I haven't known a single person who has been to McLeod Ganj and hasn't been to Shiva Cafe."
    }
  ],
  Treks: [
    {
      name: "Kheerganga Trek",
      description:
        "Trekking Days: 1-2 days,  Maximum-Altitude 9,711ft ,  Difficulty Level: Easy"
    },
    {
      name: "Malana Village Trek",
      description:
        "Trekking Days: 6 days , Maximum Altitude: 10,000 ft , Difficulty Level: Moderate"
    },
    {
      name: "Prashar Lake Trek",
      description:
        "Trekking Days: 1-2 days , Maximum Altitude: 8,960 ft, Difficulty Level: Easy"
    },
    {
      name: "Chandrakhani Pass Trek",
      description:
        "Trekking Days: 3 days , Maximum Altitude: 12,000 ft , Difficulty Level: Easy."
    },
    {
      name: " Hampta Pass Trek",
      description:
        "Trekking Days: 5 days ,Maximum Altitude: 13,500 ft ,Difficulty Level: Easy to Moderate."
    }
  ]
};

export default function App() {
  const goPlaces = Object.values(hpDb)[0];

  const [visitPlace, setvisitPlace] = useState([
    goPlaces.map((Activities) => {
      return (
        <div key={Activities.name} className="block">
          <h2>{Activities.name}</h2>
          <p>{Activities.description}</p>
        </div>
      );
    })
  ]);
  const visitPLaceClickHandler = (e) => {
    const selectedActivityList = hpDb[e.target.innerText];
    const block = selectedActivityList.map((selectedActivity) => {
      return (
        <div key={selectedActivity.name} className="block">
          <h2>{selectedActivity.name}</h2>
          <p>{selectedActivity.description}</p>
        </div>
      );
    });
    return setvisitPlace(block);
  };
  return (
    <div>
      <h1>Planning a visit to Himachal 🏕️</h1>
      <h4>These are the places i would recommend you to visit !! .</h4>
      <main>
        <div className="buttons">
          <button class="current" onClick={visitPLaceClickHandler}>
            Temples
          </button>
          <button onClick={visitPLaceClickHandler}>Cafes</button>
          <button onClick={visitPLaceClickHandler}>Treks</button>
        </div>
      </main>
      <div>{visitPlace}</div>
    </div>
  );
}
