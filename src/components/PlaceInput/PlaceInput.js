import React, { Components } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'

class PlaceInput extends React.Component {
    state = {
        placeValue: ''
    }
    
    handleInputChange = (val) => {
        this.setState({placeValue: val});
    }

    handlePlaceSubmit = () => {
        if (this.state.placeValue.trim() === '')
            return ;
        this.props.addPlaceName(this.state.placeValue);
        this.setState({placeValue: ''});
    }
    render() {
        return (
            <View style={styles.containerInput}>
                <TextInput
                style={styles.placeInput}
                onChangeText={this.handleInputChange}
                placeholder='Add a task'
                value={this.state.placeValue}
                />
                <Button 
                    title="Add" 
                    onPress={this.handlePlaceSubmit}
                    style={styles.placeButton}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
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
})

export default PlaceInput;