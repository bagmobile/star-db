import BaseSwapiAdapter from "./BaseSwapiAdapter";
import {getRandomArrayElement} from "../utils";

export default class PlanetAdapter extends BaseSwapiAdapter {

    _imgPrefix = 'planets';

    getRandomPlanet(arr) {
        return this._transformData(getRandomArrayElement(arr))
    }

    _transformData(planet) {
        const id = this._getId(planet);
        const img = this._getImage(id, this._imgPrefix);

        return {
            id,
            img,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            url: planet.url
        }
    }
}
