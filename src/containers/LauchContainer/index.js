/* @flow */

import React, { Component } from 'react'
import { Text, TouchableOpacity, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'

import styles from './styles'

class LauchContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>backScratch</Title>
        <TouchableOpacity onPress={Actions.taskManager} style={styles.container}>
          <Text style={styles.text}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.profile} style={styles.container}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </Container>
    )
  }
}

export default LauchContainer
