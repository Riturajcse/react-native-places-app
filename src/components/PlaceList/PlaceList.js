import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    return (
        <FlatList style={styles.textView} data={props.places} renderItem={(info) => (
            <ListItem placeName={info.item.value} placeImage={info.item.image} onPressItem={() => props.selectItem(info.item.key)}/>
          )}/>
    )
}

const styles = StyleSheet.create({
    textView: {
      width: "100%"
    }
  });

export default PlaceList;