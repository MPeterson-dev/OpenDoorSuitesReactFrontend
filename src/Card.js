import React from "react";
import './Card.css';
import TenantImg from './Images/TenantImg.png';

const Card = (props) => {
    const placeholderImage = TenantImg;

    const onButtonClick = (event, uri) => {
        console.log('tenantId is ' + props.tenantId);
        props.onClick(props.tenantId, uri);
    };

    const onDelete = (uri) => {
        console.log('Deleting tenantId: ' + props.tenantId);
        props.onDelete(props.tenantId, uri);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={placeholderImage}
                alt="Tenant"
                className="card-img-top"
            />
            <div className="card-body">
                <h5>{props.tenantName}</h5>
                <p><strong>Profession:</strong> {props.tenantProfession}</p>
                <p><strong>Description:</strong> {props.tenantDescription}</p>
                <p><strong>Phone:</strong> {props.tenantPhone}</p>
                <p><strong>Suite:</strong> {props.tenantSuite}</p>
                <p><strong>Service 1:</strong> {props.tenantServiceOne}</p>
                <p><strong>Service 2:</strong> {props.tenantServiceTwo}</p>
                <p><strong>Service 3:</strong> {props.tenantServiceThree}</p>
                <div className="d-flex justify-content-between mt-3">
                    <button
                        className="btn btn-primary"
                        onClick={() => onButtonClick(props.tenantId, "/show/")}
                    >
                        Read
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => onButtonClick(props.tenantId, "/edit/")}
                    >
                        Update
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => onDelete(props.tenantId, "/delete/")}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
