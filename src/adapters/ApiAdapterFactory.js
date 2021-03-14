import PageTypes from "../dictionary/pages";
import PeopleAdapter from "./PeopleAdapter";
import PlanetAdapter from "./PlanetAdapter";
import StarshipAdapter from "./StarshipAdapter";


export default class ApiAdapterFactory {

    getInstance(type) {

        switch (type) {
            case PageTypes.PEOPLE:
                return new PeopleAdapter();
            case PageTypes.PLANETS:
                return new PlanetAdapter();
            case PageTypes.STARSHIPS:
                return new StarshipAdapter();
            default:
                return null;
        }
    }
}
