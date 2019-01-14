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

const UsersMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAfBJtD9Nbg5QG1gpo0X0NeAxwRJ9ijlJE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 8),
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

  {props.Users && props.Users.map(User => <UserMarker key={User.id} User={User} onMessageBtnClick={props.handleSendSMS} />)}

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
    const {User, latitude, longitude} = this.props

    // Return User Marker Component.
    return (
      <Marker
        position={{ lat: User.latitude !== "" ? parseFloat(User.latitude) : '', lng: User.longitude !== "" ? parseFloat(User.longitude) : '' }}
        onClick={this.onToggleOpen.bind(this)}
        >
        {this.state.open && <InfoWindow onCloseClick={this.onToggleOpen.bind(this)}>
          <div>
            <Typography variant="caption">
              {User.firstname + " " + User.lastname}
              <br/>
              {User.mobile}
            </Typography>
            <IconButton onClick={this.props.onMessageBtnClick.bind(this, User)} color="secondary" aria-label="Add">
              <MessageRounded />
            </IconButton >
          </div>
        </InfoWindow>}
    </Marker>
    )

  }

}

export default UsersMap;