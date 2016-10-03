import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default class LogRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ flex: 1 }}>Date: {this.props.log.date}</Text>
        <Text style={{ flex: 1 }}>Miles: {this.props.log.miles}</Text>
      </View>
    );
  }
}

LogRow.propTypes = {
  log: React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    miles: React.PropTypes.number.isRequired,
  }),
};
