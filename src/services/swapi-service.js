import ApiAdapterFactory from "../adapters/ApiAdapterFactory";

export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}. Status code - ${response.status}`);
        }
        return await response.json();
    }

    /* async getAllEntity(type) {
         const data = await this.getResource(`/${type}/`);
         return data.results;
     }

     getEntity(type, id) {
         return this.getResource(`/${type}/${id}/`);
     }*/

    getAllEntity(type) {
        const adapter = (new ApiAdapterFactory()).getInstance(type);
        const data = this.getResource(`/${type}/`)
            .then(data => data.results)
            .then((items) => adapter.getList(items));
        return () => data;
    }

    getEntity(type, id) {
        const adapter = (new ApiAdapterFactory()).getInstance(type);
        const data = id
            ? this.getResource(`/${type}/${id}/`).then((item) => adapter.getItem(item))
            : new Promise((resolve) => {
                resolve(null);
            });
        return () => data;
    }

}
