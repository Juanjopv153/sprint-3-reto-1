import styled, { createGlobalStyle } from 'styled-components'

const A = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
`

const Image = styled.img`
margin: 0 25% 0 25%;
width: 50%;
`

const DivBottom = styled.div`
margin: 5% 25% 0 25%;
width: 50%;
text-align: center;
display: flex;
flex-direction: column;
gap: 35px;
color: whitesmoke;
align-items: center;
font-family: Raleway, 'Helvetica';
h1{
    font-size: 40px;
}
p{
    font-size: 25px;
}
button{
    width: 40%;
    padding: 2% 5% 2% 5%;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    color: whitesmoke;
    background-color: hsl(198, 60%, 50%);
    transition: all 0.5s;
    cursor: pointer;
}
button:active{
    background-color: hsl(176, 68%, 64%);
}
`


export { Image, DivBottom }