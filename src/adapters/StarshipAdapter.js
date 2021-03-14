import BaseSwapiAdapter from "./BaseSwapiAdapter";

export default class StarshipAdapter extends BaseSwapiAdapter {

    _imgPrefix = 'starships';

    _transformData(starship) {
        const id = this._getId(starship);
        const img = this._getImage(id, this._imgPrefix);

        return {
            id,
            img,
            name: starship.name,
            MGLT: starship.MGLT,
            crew: starship.crew,
            passengers: starship.passengers
        }
    }
}
