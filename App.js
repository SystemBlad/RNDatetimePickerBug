/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Modal from "react-native-modal";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        isDateTimePickerVisible: false,
        isModalVisible: false,
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

  render() {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._showDateTimePicker}>
                <Text>Show DatePicker</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleModal}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
            />
            <Modal isVisible={this.state.isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text>Hide me!</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
