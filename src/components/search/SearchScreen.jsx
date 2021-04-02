import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import { useCustomForm } from "../../hooks/useCustomForm";
import HeroCard from "../heroes/HeroCard";
import getHeroesByName from "../selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange, reset] = useCustomForm({
    searchHero: '',
  });

  const { searchHero } = formValues;

  const heroesFilted = useMemo(() => getHeroesByName(q), [q]);

  const HandleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchHero}`);
    console.log(searchHero)
    reset();
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row animate__animated animate__fadeIn">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={HandleSearch}>
            <input
              autoComplete="off"
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchHero"
              onChange={handleInputChange}
              value={searchHero}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFilted.length === 0 && <div className="alert alert-danger">There is no a hero with {q}</div>}
          {heroesFilted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
