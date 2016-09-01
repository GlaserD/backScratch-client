/* @flow */

import React, { Component } from 'react'
import { Text, Image, View, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'

import styles from './styles'

class TaskDetailContainer extends Component<void, void, void> {
  render() {
    var task = this.props.task;
    var imageURI = (typeof task.volumeInfo.imageLinks !== 'undefined') ? task.volumeInfo.imageLinks.thumbnail : '';
    var description = (typeof task.volumeInfo.description !== 'undefined') ? task.volumeInfo.description : '';
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageURI}} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default TaskDetailContainer
