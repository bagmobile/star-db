import React from "react";
import withSwapiService from "../hoc/withSwapiService";
import withApiData from "../hoc/withApiData";
import ItemList from "../item-list";
import ApiTypes from "../../dictionary/api";
import ItemDetail from "../item-detail";
import {compose} from "../../utils";
import {withRouter} from "react-router-dom";
import withChildFunction from "../hoc/withChildFunction";
import withAdditionalProps from "../hoc/withAdditionalProps";

const fields = {
    gender: 'Gender',
    height: 'Height',
    mass: 'Mass',
    hairColor: 'Hair color',
    skinColor: 'Skin color'
}

const renderItemLabel = ({name, gender}) => `${name} [ ${gender} ]`

const mapMethodToPropsList = (swapiService) => ({
    getData: swapiService.getAllEntity(ApiTypes.PEOPLE)
});

const mapMethodToPropsDetail = (swapiService, id) => ({
    getData: swapiService.getEntity(ApiTypes.PEOPLE, id)
});

const PeopleItemList = compose(
    withSwapiService(mapMethodToPropsList),
    withApiData,
    withChildFunction(renderItemLabel)
)(ItemList);


export const PeopleDetails = compose(
    withSwapiService(mapMethodToPropsDetail),
    withApiData,
    withAdditionalProps({fields})
)(ItemDetail);


const PeoplePage = ({history}) => {

    return <PeopleItemList
        onSelectItem={id => history.push(id)}
    />
}

export default withRouter(PeoplePage);
