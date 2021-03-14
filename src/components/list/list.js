import React from 'react';
import ErrorBoundary from "../error-boundry";
import Row from "../row";


const List = ({list, details}) => {
    return <Row
        left={<ErrorBoundary>{list}</ErrorBoundary>}
        right={<ErrorBoundary>{details}</ErrorBoundary>}
    />;
}
export default List;
