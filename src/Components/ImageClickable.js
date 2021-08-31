import React, {useState} from 'react';
import '../ImageClickable.css';
import imgDay from '../images/day.jpg';
import imgNight from '../images/night.jpg';

export default function ImageClickable() {
  // дописать код с использованием хука
	let [count, setCount] = useState(true);
	const images = {
	day: imgDay,
	night: imgNight
}
  const handleClick = () => () => {
    // дописать код с использованием хука
    setCount(!count);
  };

  return (
    <div className="ImageClickable" onClick={handleClick()}>
      <img src={count ? images.day: images.night} />
    </div>
  );
}