/* @flow */

import React, { Component } from 'react'
import { Text, TouchableOpacity, Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import styles from './styles'

class ProfileContainer extends Component<void, void, void> {
  render() {
    return (
      <Container>
        <Title>UserName</Title>
      </Container>
    )
  }
}

export default ProfileContainer
