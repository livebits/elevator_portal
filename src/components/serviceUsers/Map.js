import React, { Component } from 'react';
import { withState, withHandlers } from 'recompose';
import { InfoWindow } from 'react-google-maps';
import { Typography, IconButton } from '@material-ui/core';
import MessageRounded from '@material-ui/icons/MessageRounded';


const _ = require("lodash");
const { debounce } = require("lodash");
const { compose, withProps, lifecycle, withStateHandlers } = require("recompose");

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

// const google = window.google;

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfBJtD9Nbg5QG1gpo0X0NeAxwRJ9ijlJE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 12),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom())
      }
    }
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => {
        return {
          isOpen: !isOpen,
        }
      }
    }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultCenter={{ lat: 29.5918, lng: 52.5837 }}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onZoomChanged={props.onZoomChanged}
  >

  {/* {props.users && props.users.map(user => <SafirMarker key={user.id} user={user} onMessageBtnClick={props.handleSendSMS} />)} */}
  {props.users && props.users.map(user => <UserMarker key={user.id} user={user} />)}

  </GoogleMap>
);


// UserMarker.
class UserMarker extends React.Component {

  // State.
  state = {open: false}

  onToggleOpen = () => {
    this.setState(state => ({open: !state.open}))
  }

  // Render.
  render() {

    // Extract Props.
    const {user, latitude, longitude} = this.props

    // Return user Marker Component.
    return (
      <Marker
        position={{ lat: user.latitude !== "" ? parseFloat(user.latitude) : '', lng: user.longitude !== "" ? parseFloat(user.longitude) : '' }}
        onClick={this.onToggleOpen.bind(this)}
        >
        {this.state.open && <InfoWindow onCloseClick={this.onToggleOpen.bind(this)}>
          <div>
            <Typography variant="caption">
              {user.firstname + " " + user.lastname}
              <br/>
              {user.mobile}
            </Typography>
            {/* <IconButton onClick={this.props.onMessageBtnClick.bind(this, user)} color="secondary" aria-label="Add">
              <MessageRounded />
            </IconButton > */}
          </div>
        </InfoWindow>}
    </Marker>
    )

  }

}

export default Map;