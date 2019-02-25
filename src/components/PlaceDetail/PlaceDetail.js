import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';

const PlaceDetail = (props) => {
    const modalDetail = props.selectedPlace ? (
        <View>
            <Image source={props.selectedPlace.image} style={styles.modalImage}/>
            <Text style={styles.modalText}>{props.selectedPlace.value}</Text>
        </View>
     ) : null;
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalView}>
                {modalDetail}
                <View>
                    <Button title="Delete" color="red" onPress={() => props.deletePlace(props.selectedPlace.key)}/>
                    <Button title="Cancel" onPress={props.closeModal}/>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    modalView: {
        marginTop: 22
    },
    modalImage: {
        marginTop: 50,
        width: "100%",
        height: 200
    },
    modalText: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center"
    }
})

export default PlaceDetail;