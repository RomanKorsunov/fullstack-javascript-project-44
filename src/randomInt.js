#!/usr/bin/env node

const getRandomInt = () => {
  const randomNumber = Math.floor(Math.random() * (101 - 1) + 1);
  return randomNumber;
};

export default getRandomInt;
