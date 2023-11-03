import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardMotorcycle from '../CardMotorcycle'

const UserMotorcycle = () => { 
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885"; // cambiar por la ruta general  // index mis motocicletas
  const [results, setResults] = useState([])
  
  useEffect(() =>{
    axios.get('/api/v1/client_motorcycles')
    .then(res =>{
      console.log(res)
      setResults(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <section className="results">
      {results.map(result => (
        <CardMotorcycle result={result}/>
      ))}
    </section>
  )
}

export default UserMotorcycle
