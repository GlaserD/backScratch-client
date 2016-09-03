/* @flow */

import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'

import styles from './styles'

class TaskDetailContainer extends Component<void, void, void> {
  render() {
    const task = this.props.task
    const imageURI = (typeof task.volumeInfo.imageLinks !== 'undefined') ?
      task.volumeInfo.imageLinks.thumbnail : ''
    const description = (typeof task.volumeInfo.description !== 'undefined') ?
      task.volumeInfo.description : ''
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }
}

export default TaskDetailContainer
