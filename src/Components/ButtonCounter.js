import React, {useState} from 'react';
import '../ButtonCounter.css'

export default function ButtonCounter({title="Первый"}) {
  let [count, setCount] = useState(0);

  const handleClick = () => () => {
    console.log(count);
    setCount(count+1);
  }
  return (
    <button onClick={handleClick()}>{title}:{count}</button>
  );
}