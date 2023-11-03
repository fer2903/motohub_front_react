import React, { useState } from 'react'
import Search from './Search'
import Results from './Results'
import Popup from './Popup'
import axios from 'axios'

const FirstView = () => {
  const apiurl = "api/v1/show_motorcycles";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "?q=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return(
    <>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </>
  )
}

export default FirstView
