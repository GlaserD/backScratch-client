/* @flow */

import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'

import styles from './styles'

class TaskManagerContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <TouchableOpacity onPress={Actions.taskList} style={styles.container}>
          <Text style={styles.text}>Task List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.taskCreator} style={styles.container}>
          <Text style={styles.text}>Add a task</Text>
        </TouchableOpacity>
      </Container>
    )
  }
}

export default TaskManagerContainer
