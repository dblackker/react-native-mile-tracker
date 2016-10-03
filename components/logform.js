import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
  },
  input: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#fb0606',
  },
  label: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default class LogForm extends Component {

  onChangeDateText(date) {
    this.date = date;
  }

  onChangeMileageText(miles) {
    this.miles = miles;
  }

  onAddPressed() {
    this.props.onAdd(
      {
        date: this.date,
        miles: this.miles,
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeDateText.bind(this)}
        />

        <Text style={styles.label}>Miles</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeMileageText.bind(this)}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed.bind(this)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LogForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};
