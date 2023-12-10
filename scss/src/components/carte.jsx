import styled from 'styled-components';
import Star from './Star'

const Carte = () => {

    const Img = styled.img` 
width:300px; 
height:auto;`

const Divi = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
border: solid;
`

const Para = styled.p`
width:300px`
    return (
    <Divi>
      <Img src='https://i.ytimg.com/vi/5qBP3AJ-jgI/maxresdefault.jpg'></Img>
      <h1>JJK</h1>
      <Star/>
      <h2>Description</h2>
      <Para>A ce stade du combat, nos 3 combattants Mahito, Aoi Todo, et Itadori Yuji libéraient chacun une puissance phénoménale, déployant sans réserve 120% de leur potentiel.</Para>
    </Divi>
    )
}

export default Carte;