import React from "react";
import withSwapiService from "../hoc/withSwapiService";
import withApiData from "../hoc/withApiData";
import ItemList from "../item-list";
import ApiTypes from "../../dictionary/api";
import List from "../list";
import ItemDetail from "../item-detail";
import {compose} from "../../utils";
import withChildFunction from "../hoc/withChildFunction";
import {withRouter} from "react-router-dom";


const fields = {
    MGLT: 'MGLT',
    crew: 'Crew',
    passengers: 'Passengers'
}
const renderItemLabel = ({name, passengers}) => `${name} [ ${passengers} ]`;

const mapMethodToPropsList = (swapiService) => ({
    getData: swapiService.getAllEntity(ApiTypes.STARSHIPS)
});

const mapMethodToPropsDetail = (swapiService, id) => ({
    getData: swapiService.getEntity(ApiTypes.STARSHIPS, id)
});

const StarshipItemList = compose(
    withSwapiService(mapMethodToPropsList),
    withApiData,
    withChildFunction(renderItemLabel)
)(ItemList);


const StarshipDetails = compose(
    withSwapiService(mapMethodToPropsDetail),
    withApiData
)(ItemDetail);

const StarshipsPage = ({history, match}) => {

    return <List
        list={<StarshipItemList onSelectItem={id => history.push(id)}/>}
        details={<StarshipDetails id={match.params.id} fields={fields}/>}
    />
}

export default withRouter(StarshipsPage);
