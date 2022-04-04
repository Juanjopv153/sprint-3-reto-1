import styled, {createGlobalStyle} from 'styled-components'

const A = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
`
const DivHeader = styled.div`
    margin: 2% 5% 5% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`

const DivNavbar = styled.div`
display: flex;
gap: 55px;
.titulos{
    color: white;
    font-family: Raleway, 'Helvetica';
    font-weight: 400;
    font-size: 20px;
}
`

export {DivHeader, DivNavbar}