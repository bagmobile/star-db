import React from 'react';

const withAdditionalProps = (addProps) => (Component) => {

    const WithAdditionalProps = (props) => {
        return <Component {...props} {...addProps} />;
    }

    return WithAdditionalProps;
};

export default withAdditionalProps;
