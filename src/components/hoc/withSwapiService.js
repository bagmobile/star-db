import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

const withSwapiService = (mapMethodToProps) => (Component) => {

    const WithSwapiService = (props) => {
        return (
            <SwapiServiceConsumer>
                {swapiService => <Component {...props} {...mapMethodToProps(swapiService, props.id)}/>}
            </SwapiServiceConsumer>
        );
    }

    return WithSwapiService;
}

export default withSwapiService;
