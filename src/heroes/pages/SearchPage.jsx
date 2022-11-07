import { useSearchParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHerosByName } from "../helpers/getHerosByName";

export const SearchPage = () => {

    const [searchParams, setSearchParams ] = useSearchParams();
    const q = searchParams.get( 'q' ) ?? '' ;
    const heroes = getHerosByName( q );

    const { searchText, onInputChange } = useForm({
      searchText: q 
    })

    const showSearch = q.length === 0;
    const showError = !showSearch && heroes.length === 0

    const onSearchSubmit = (e)=>{
      e.preventDefault();
      // if( searchText.trim().length <= 1 ) return;
      setSearchParams({q: searchText});
    }

    return (
      <>
        <h1>SearchPage</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Searching...</h4>
            <hr />
            <form onSubmit={ onSearchSubmit } >
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText" 
                autoComplete="off"
                value={searchText}
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-2">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Result</h4>
            <hr />

            {/* {
              ( q.length === 0 )
              ? <div className="alert alert-primary"> Search a hero </div>
              : ( heroes.length === 0 ) && <div className="alert alert-danger"> No hero with <b>{ searchParams.get('q') }</b></div>
            } */}

            <div 
              className="alert alert-primary animate__animated animate__fadeIn" 
              style={{display: showSearch? '': 'none'}}
            > 
              Search a hero
            </div>

            <div 
              className="alert alert-danger animate__animated animate__fadeIn" 
              style={{display: showError? '': 'none'}}
            > 
              No hero with <b>{ searchParams.get('q') }</b>
            </div>

            <div className="row g-3">
              {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero} />
                ))
              }
            </div>
          </div>
        </div>
      </>
    )
  }
  