import React from 'react';
import ReactDOMServer from "react-dom/server";
import axios from 'axios'
import Report from './Report'


async function App(props) {
  console.log(props);
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return (<Report posts={resp.data} />);
  } catch (err) {
    console.error(err);
  }
}

export default App;