import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {

  const { id } = useParams();

   const heroById = getHeroById( id );

  if( !heroById ) {
    return <Navigate to={ -1 } /> 
  }



  return (
    <>
      <h1>{ heroById.superhero }</h1>
    </>
  )
}


