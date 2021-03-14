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
    climate: 'Climate',
    diameter: 'Diameter',
    gravity: 'Gravity',
    rotationPeriod: 'Rotation',
    population: 'Population'
}

const renderItemLabel = ({name, population}) => `${name} [ ${population} ]`;

const mapMethodToPropsList = (swapiService) => ({
    getData: swapiService.getAllEntity(ApiTypes.PLANETS)
});

const mapMethodToPropsDetail = (swapiService, id) => ({
    getData: swapiService.getEntity(ApiTypes.PLANETS, id)
});

const PlanetItemList = compose(
    withSwapiService(mapMethodToPropsList),
    withApiData,
    withChildFunction(renderItemLabel)
)(ItemList);


const PlanetDetails = compose(
    withSwapiService(mapMethodToPropsDetail),
    withApiData
)(ItemDetail);


const PlanetsPage = ({history, match}) => {
    return <List
        list={<PlanetItemList onSelectItem={id => history.push(id)}/>}
        details={<PlanetDetails
            id={match.params.id}
            fields={fields}
        />}
    />
}

export default withRouter(PlanetsPage);
