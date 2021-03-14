import React from "react";

const withItemListSelect = (Component) => {

    class WithItemListSelect extends React.Component {

        state = {
            id: null
        }

        onSelectItem = (id) => {
            this.setState({id: id});
        }

        render() {
            return <Component
                {...this.props}
                id={this.state.id}
                onSelectItem={this.onSelectItem}
            />
        }
    }

    return WithItemListSelect;
}

export default withItemListSelect;
