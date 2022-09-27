import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import {IoArrowBack} from 'react-icons/io5';
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import Info from "../components/Info";

const Details = () => {
    const [country, setCountry] = useState(null);
    const {name} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({data}) => setCountry(data[0])
        )
    }, [name])

    return (
        <div>
            <Button onClick={() => {navigate(-1)}}>
                <IoArrowBack /> back
            </Button>
            {country && (
                <Info {...country}/>
            )}
        </div>
    );
};

export default Details;