import styled from 'styled-components'

export const Wrapper = styled.main`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 4rem;
`;

export const Content = styled.div`
a {
    text-decoration: none;
}
.imgWrapper{
    overflow:hidden;
    object-fit: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
img{    
    width: 250px;
    height:250px;
    object-fit: cover;
    transition: all 0.15s ease-in-out;
}
}

img:hover{
    cursor: pointer;
    transform: scale(1.05)
}

.memeName{
    width:100%;
    height:100%;
    max-heigth: 25px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h4{
        font-size: 15px;
        color: var(--white);
        font-weight: 700;
        text-align: center;
    }
}
`;

export const Template = styled.div`
`;