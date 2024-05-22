import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties data from the backend when the component mounts
        axios.get('http://localhost:5000/properties')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []); // Empty dependency array to fetch data only once when the component mounts

    return (
        <div>
            <h2>Property List</h2>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>
                        <h3>{property.title}</h3>
                        <p>Description: {property.description}</p>
                        <p>Location: {property.location}</p>
                        <p>Bedrooms: {property.bedrooms}</p>
                        <p>Bathrooms: {property.bathrooms}</p>
                        <p>Rent: {property.rent}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
