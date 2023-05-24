import { useEffect, useState } from 'react';
import Button from '../../components/button/Button.js';
const Hi = () => {
  const hiFn = () => {
    console.log('ㅗㅑㅇ');
    return () => {
      console.log('dkdkdkd');
    };
  };
  useEffect(hiFn, []);
  return <h1>안녕</h1>;
};

const Test = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((a) => a + 1);
  const onchange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('api호출...');
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log(keyword);
    }
  }, [keyword]);

  const [show, setShow] = useState(false);
  const showing = () => setShow((pre) => !pre);
  return (
    <div>
      <h1>{counter}</h1>
      <input
        value={keyword}
        onChange={onchange}
        type="text"
        placeholder="search"
      ></input>
      {show ? <Hi /> : 'show'}
      <button onClick={showing}>{show ? 'hide' : 'show'}</button>
      <Button test={'dhkd'} />
      <Button test={'클릭'} onClick={onClick} />
      <button onClick={onClick}>크를리</button>
    </div>
  );
};
export default Test;
