import React from "react";
import "./OneTenant.css";
import TenantImg from './Images/TenantImg.png';

const OneTenant = (props) => {
    const placeholderImage = TenantImg;

    return (
        <div className="tenant-container">
            <h2 className="tenant-header">Tenant Details for {props.tenant.name}</h2>
            <div className="tenant-card">
                <img
                    src={placeholderImage}
                    className="card-img-top"
                    alt={props.tenant.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.tenant.name}</h5>
                    <p className="card-text">{props.tenant.description}</p>
                    <p className="card-text">Phone: {props.tenant.phone}</p>
                    <p className="card-text">Suite: {props.tenant.suite}</p>
                    <ul className="card-services">
                        <li>{props.tenant.serviceOne}</li>
                        <li>{props.tenant.serviceTwo}</li>
                        <li>{props.tenant.serviceThree}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OneTenant;
