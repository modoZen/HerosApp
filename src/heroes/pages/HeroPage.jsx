import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const heroById = useMemo( () => getHeroById( id ), [id] );

  const onNavigateBack = ()=>{

    let publisher = '';
    
    // if(heroById.publisher === "DC Comics") publisher = '/dc';
    // if(heroById.publisher === "Marvel Comics") publisher = '/marvel';

    navigate( -1 );
  }

  if( !heroById ) {
    return <Navigate to={ -1 } /> 
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`/img/${id}.jpg`} 
            alt={ heroById.superhero }
            className="img-thumbnail animate__animated animate__fadeInLeft" 
          />
        </div>

        <div className="col-8">
          <h3>{ heroById.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego: </b>{ heroById.alter_ego }</li>
            <li className="list-group-item"><b>Publisher: </b>{ heroById.publisher }</li>
            <li className="list-group-item"><b>First appearance: </b>{ heroById.first_appearance }</li>
          </ul>
          <h5 className="mt-3">Characters</h5>
          <p>{ heroById.characters }</p>

          <button
            className="btn btn-outline-primary"
            onClick={ onNavigateBack }
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  )
}


