import React from 'react';
import './item-list.css';
import PropTypes from "prop-types";

const ItemList = (props) => {

    const renderItems = () => {

        const {data: items, onSelectItem, children: renderItemLabel = item => item.name} = props;

        return items.map(({id, ...item}) => <li
            key={id}
            className="list-group-item"
            onClick={() => onSelectItem(id)}
        >{renderItemLabel(item)}</li>);
    }

    return (
        <ul className="item-list list-group">
            {renderItems()}
        </ul>
    );
}

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectItem: PropTypes.func.isRequired,
    renderItemLabel: PropTypes.func
}

export default ItemList;
