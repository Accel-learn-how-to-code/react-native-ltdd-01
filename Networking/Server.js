import React, {Component} from 'react';
const api =
  'https://my-json-server.typicode.com/Accel-learn-how-to-code/react-native-ltdd-01/db';
async function getData() {
  try {
    const data = await fetch(api);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log('Error on Networking: ' + error);
  }
}

module.exports = getData;
