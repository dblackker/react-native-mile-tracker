import React, { Component } from 'react';
import { View, StyleSheet, ListView, TouchableHighlight, Text } from 'react-native';
import LogRow from './logrow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#408AFF',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    height: 60,
    borderColor: '#E4E7EA',
    borderWidth: 2,
    backgroundColor: '#0CCE6C',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class LogList extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.logs),
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this
      .state
      .dataSource
      .cloneWithRows(nextProps.logs);

    this.setState({ dataSource });
  }

  renderRow(log) {
    return (
      <LogRow log={log} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

        <TouchableHighlight
          onPress={this.props.onAddStarted}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LogList.propTypes = {
  logs: React.PropTypes
    .arrayOf(React.PropTypes.object).isRequired,
  onAddStarted: React.PropTypes.func.isRequired,
};
