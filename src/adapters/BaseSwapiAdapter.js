export default class BaseSwapiAdapter {

    _baseImage = `https://starwars-visualguide.com/assets/img/`;

    _getId(entity) {
        const matches = [...entity.url.matchAll(/^.*\/(\d+)\/$/gm)];
        return matches[0].slice(-1)[0];
    }

    _getImage(id, prefix) {
        return `${this._baseImage}${prefix}/${id}.jpg`;
    }

    getList(items, id = null) {

        return items
            .map(item => this._transformData(item))
            .filter(item => id ? item.id === id : item.id !== null);
    }

    getItem(item) {
        return this._transformData(item);
    }

    _transformData() {
        return {}
    }
}
