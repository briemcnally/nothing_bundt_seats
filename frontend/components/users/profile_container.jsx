import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { requestReservation, createReservation } from '../../actions/reservations_actions';
import requestRestaurant from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state, ownProps) => ({
  restaurant: state.entities.restaurants,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestReservation: reservationId => dispatch(requestReservation(reservationId)),
  requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId)),
  createReservation: formReservation => dispatch(createReservation(formReservation))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
