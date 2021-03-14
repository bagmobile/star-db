import React from 'react';
import './item-detail.css'

const ItemDetail = (props) => {
    const {data: item, fields = {}} = props;

    const renderView = () => {
        const {name, img} = item;

        return (
            <>
                <img className="item-image" alt={name} src={img}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {renderItems()}
                    </ul>
                </div>
            </>
        );
    }

    const renderItems = () => {
        const {id, ...rest} = item;

        return Object.entries(fields).map(([field, label]) => (
            <li key={`${id}-${field}`} className="list-group-item">
                <span className="term">{label}</span>
                <span>{rest[field]}</span>
            </li>));
    }

    return (
        <div className="item-detail card">
            {item ? renderView() : <strong>Please select item</strong>}
        </div>
    );

};

export default ItemDetail;

