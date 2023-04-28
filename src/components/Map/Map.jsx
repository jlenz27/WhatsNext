import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const isMobile = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    const coordinates = {lat: 0, lng: 0};

        return (
            <div className={classes.mapContainer}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD7nvEsIId1Zg5Sh4BNNTL_1iG0Q5i7cwg' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
              >
                </GoogleMapReact>
            </div>
        );
}          
        
        export default Map;