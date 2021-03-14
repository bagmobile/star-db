import React from 'react';
import './random-planet.css'
import ApiTypes from "../../dictionary/api";
import withApiData from "../hoc/withApiData";
import {compose, getRandomArrayElement} from "../../utils";
import withSwapiService from "../hoc/withSwapiService";


const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllEntity(ApiTypes.PLANETS)
    }
}

const RandomPlanet = (props) => {
    const planet = getRandomArrayElement(props.data);

    return (
        <div className="random-planet jumbotron rounded">
            <PlanetView {...planet}/>
        </div>
    );

}

const PlanetView = ({id, name, population, rotationPeriod, diameter}) => {

    return (
        <>
            <img alt={name} className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default compose(
    withSwapiService(mapMethodToProps),
    withApiData
)(RandomPlanet);
