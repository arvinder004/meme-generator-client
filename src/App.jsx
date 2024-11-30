import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useMatch, Link } from 'react-router-dom'
import Meme from './components/Meme'
import MemeTemplate from './components/MemeTemplates'

const App = () => {

  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState(JSON.parse(localStorage.getItem("MEME")));
  const location = useLocation();

  if (useMatch('/')) {
    localStorage.setItem("MEME", null);
  } else {
    localStorage.setItem("MEME", JSON.stringify(meme));
  }

  useEffect(() => {
    getMemes('http://localhost:8000/')
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    localStorage.setItem("MEME", JSON.stringify(meme));
    document.title = meme ? `Meme Generator - ${meme.name}` : "Meme Generator";
  }, [meme]);


  const getMemes = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      const memesData = json.data.memes;

      setAllMemes(memesData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Routes>
        {useMatch("/") && (
          <Route
            index
            path='/'
            element={<MemeTemplate allMemes={allMemes} setMeme={setMeme} />}
          />
        )}
        <Route
          path='/meme/:id'
          element={<Meme meme={meme} setMeme={setMeme} />}
        />
      </Routes>
    </>
  )
}

export default App