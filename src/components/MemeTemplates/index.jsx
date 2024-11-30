import React from 'react'
import { Link } from "react-router-dom";
import {Wrapper, Content, Template} from './MemeTemplates.styles'

const MemeTemplate = ({allMemes, setMeme }) => {
    const memes = allMemes?.map((meme) => {
        return(
            <Template key={meme.id}>
                <Link 
                    to={`/meme/${meme.id}`}
                    onClick={()=>{setMeme(meme)}} 
                >
                    <div className='border-4'>
                        <img src={meme.url} alt={meme.name} />
                    </div>
                    <div className=''>
                        <h4>{meme.name}</h4>
                    </div>
                </Link>
            </Template>
        );
    });
  return (
    <Wrapper>
        <h1>Pick Your Meme</h1>
        <Content>{memes}</Content>
    </Wrapper>
  )
}

export default MemeTemplate