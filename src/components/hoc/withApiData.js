import React from "react";
import ErrorIndicator from "../error-indicator/error-indicator";
import Loader from "../loader";


const withApiData = (Component) => {

    class WithApiData extends React.Component {

        state = {
            data: null,
            loading: true,
            error: false
        }

        onDataLoaded = (data) => {
            this.setState({
                data,
                loading: false
            });
        }

        onError = (error) => {
            this.setState({
                loading: false,
                error: error
            });
        }

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {

            if (prevProps.id !== this.props.id) {
                this.setState({loading: true, error: false});
                this.updateItem();
            }
        }

        updateItem() {
            this.props.getData().then(this.onDataLoaded).catch(this.onError);
        }


        componentWillUnmount() {
            console.log(`unmount ` + Component.name);
        }

        render() {
            const {data, error, loading} = this.state;

            if (error) {
                return <ErrorIndicator/>
            }
            if (loading) {
                return <Loader/>
            }

            return <Component {...this.props} data={data}/>;
        }

    }

    return WithApiData;

};

export default withApiData;
