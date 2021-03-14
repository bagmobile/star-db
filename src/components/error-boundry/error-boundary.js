import React, {Component} from 'react';
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorBoundary extends Component {

    state = {
        renderError: null
    }

    static getDerivedStateFromError(error) {
        return {renderError: error};
    }

    render() {
        return this.state.renderError
            ? <ErrorIndicator/>
            : this.props.children;
    }
}
