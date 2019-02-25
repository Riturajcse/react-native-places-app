import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressItem}>
            <View style={styles.listItem}>
                <Image source={props.placeImage} style={styles.listImage}/>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        margin: 5,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    listImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});

export default listItem;

