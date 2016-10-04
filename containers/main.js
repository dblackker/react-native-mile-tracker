/**
 * @flow
 */

import React, { Component } from 'react';
import { Text, Navigator } from 'react-native';
import LogList from '../components/loglist';
import LogForm from '../components/logform';
import store from '../stores/logstore';

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  onAddStarted() {
    console.log('onaddstarted clicked');
    this.nav.push({
      name: 'logform',
    });
  }

  onAdd(log) {
    store.dispatch({
      type: 'ADD_LOG',
      log,
    });
    // this.state.logs.push({
    //   date: log.date,
    //   miles: log.miles,
    // });
    // this.setState({ logs: this.state.logs });
    this.nav.pop();
  }

  onCancel() {
    console.log('on cancel clicked');
    this.nav.pop();
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'logform':
        return (
          <LogForm
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
          />
        );
      default:
        return (
          <LogList
            onAddStarted={this.onAddStarted.bind(this)}
            logs={this.state.logs}
          />
      );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'loglist', index: 0 }}
        ref={(nav) => {
          this.nav = nav;
        }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
