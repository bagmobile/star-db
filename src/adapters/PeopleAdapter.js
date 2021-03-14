import BaseSwapiAdapter from "./BaseSwapiAdapter";

export default class PeopleAdapter extends BaseSwapiAdapter {

    _imgPrefix = 'characters';

    _transformData(person) {
        const id = this._getId(person);
        const img = this._getImage(id, this._imgPrefix);
        return {
            id,
            img,
            name: person.name,
            gender: person.gender,
            weight: person.weight,
            height: person.height,
            mass: person.mass,
            hairColor: person.hair_color,
            skinColor: person.skin_color,
            url: person.url
        }
    }
}
