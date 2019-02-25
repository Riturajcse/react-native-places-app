/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';

import { addPlace, deletePlace, selectPlace, deSelectPlace } from './src/store/actions/index';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

type Props = {};
class App extends Component<Props> {

  handlePlaceSubmit = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  handleSelectedPlace = (key) => {
    this.props.onSelectPlace(key);
  }

  handleCloseModal = () => {
    this.props.onDeSelectPlace();
  }

  handleDeletePlace = (key) => {
    this.props.onDeletePlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ToDo App</Text>
        <PlaceDetail selectedPlace={this.props.selectedPlace} closeModal={this.handleCloseModal} deletePlace={this.handleDeletePlace}/>
        <PlaceInput addPlaceName={this.handlePlaceSubmit}/>
        <PlaceList places={this.props.places} selectItem={this.handleSelectedPlace}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  textView: {
    width: "100%"
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.placeSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeSelectPlace: () => dispatch(deSelectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
