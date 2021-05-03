import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
// Create the state var/access
const [result, setResult] = useState({});

// This asynchronous method call the REST API 
// and set the result in the state when data is retrieved
async function fetchData() {
  const { data } = await axios.patch("https://jsonplaceholder.typicode.com/users/1",
  {
    name: 'Walter'
  }
  );
  setResult(data);
  console.log(data.data);
}

// This method is executed after the component is mounted
useEffect( () => {
  fetchData();
}, []);

  return (
    <div>
      <h1>Updated User</h1>
          User Id: {result.id}, 
          User Name: {result.name}      
    </div>
  );
}

export default App;
