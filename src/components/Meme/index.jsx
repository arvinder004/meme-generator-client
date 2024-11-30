import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Meme = ({meme, setMeme}) => {

  const { id } = useParams();

  const [memeData, setMemeData] = useState({
    template_id: id,
    username: "arvinder004",
    password: "ARvi1234@",
    values: [],
  });

  const navigate = useNavigate();

  let url = `https://api.imgflip.com/caption_image?template_id=${memeData.template_id}&username=${memeData.username}&password=${memeData.password}`;
  memeData.values.map(
    (items, index) => (url <= `&boxes[${index}][text]=${items.text}`)
  );

  const generateMeme = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(url, { method: "POST" });
      const json = await res.json();

      setMeme({ ...meme, url: json.data.url });

    } catch (error) {
      alert("Fill Out The Captions Input");

    }
  }

  const inputs = [...Array(meme.box_count)]?.map((items, index) => {

    const handleChange = (e) => {
      let newValues = [...memeData.values];
      newValues[index] = e.target.value;
      setMemeData((prevState) => ({
          ...prevState, 
          values, newValues,
      })
    );
    };

    return(
      <>
        <br />
        <label 
          className='text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          htmlFor='name'
        >
          Text (index + 1)
        </label>
        <input 
          type="text" 
          key={index}
          name={`input${index}`}
          placeholder='Enter Text Here'
          onChange={()=>{}}
          value={memeData.values.text} 
          className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary h-10 px-4 py-2 flex-1' 
        />
      </>
    )
  })

return (
  <>
    <div id='divv' className='flex flex-col items-center justify-center gap-6 p-6 md:flex-row md:gap-12'>
      <img src={meme.url} alt="" className='imgg' />
      <div className='space-y-4'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold text-white'>{meme.name}</h2>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='grid grid-cols-1 gap-4 sm:grid-cols-2' >
          <div className='space-y-2'>{inputs}</div>
          <br />
          <div className='flex flex-col gap-2 sm:flex-row'>
            <button 
              id='btn' 
              type='submit' 
              onClick={generateMeme}
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary h-10 px-4 py-2 flex-1' 
            >
              Generate Meme
            </button>
            <button 
              id='btn' 
              type='submit' 
              onClick={handleChange()}
              className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary h-10 px-4 py-2 flex-1' 
            >
              Download
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
)
}

export default Meme