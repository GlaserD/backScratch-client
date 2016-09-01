/* @flow */

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  // container: {
  //   paddingLeft: 4,
  //   paddingRight: 4,
  //   backgroundColor: 'rgb(233, 233, 233)',
  //   borderWidth: 1,
  //   borderColor: 'rgb(213, 213, 213)',
  // },
  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  listView: {
    top: 60,
    backgroundColor: '#F5FCFF'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  sperator: {
    height: 5,
    backgroundColor: 'black'
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  author: {
    color: '#656565'
  }
})

export default styles
