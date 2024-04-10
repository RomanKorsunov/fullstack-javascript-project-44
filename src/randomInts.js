#!/usr/bin/env node

const getRandomInts = () => {
    const randomNumber1 = Math.floor(Math.random() * (101 - 1) + 1);
    const randomNumber2 = Math.floor(Math.random() * (101 - 1) + 1);
    return [randomNumber1, randomNumber2];
  };

  export default getRandomInts;
  