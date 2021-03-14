import PageTypes from "../dictionary/pages";
import ApiTypes from "../dictionary/api";

const pageToApiTypeMapping = {
    [PageTypes.PEOPLE]: ApiTypes.PEOPLE,
    [PageTypes.PLANETS]: ApiTypes.PLANETS,
    [PageTypes.STARSHIPS]: PageTypes.STARSHIPS
}

export default pageToApiTypeMapping;
