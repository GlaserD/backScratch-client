/* @flow */

import React, { Component } from 'react'
import { Text, TouchableOpacity, Platform, Image, View, ListView, TouchableHighlight, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'

import TaskDetail from '@containers/TaskDetailContainer/index.js'

import Container from '@components/Container'
import Title from '@components/Title'
import Link from '@components/Link'
import TabBar from '@components/TabBar'

import styles from './styles'

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';


class TaskListContainer extends Component<void, void, void> {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.items),
          isLoading: false
        });
      })
    .done();
  }

  renderLoadingView() {
    return(
      <View style={styles.loading}>
        <ActivityIndicator
          size='large'/>
        <Text>
          Loading tasks...
        </Text>
      </View>
    );
  }

  renderTask(task) {
  return (
    <TouchableHighlight onPress={() => this.showTaskDetail(task)}  underlayColor='#dddddd'>
      <View>
        <View style={styles.container}>
          <Image
            source={{uri: task.volumeInfo.imageLinks.thumbnail}}
            style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{task.volumeInfo.title}</Text>
            <Text style={styles.author}>{task.volumeInfo.authors}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    </TouchableHighlight>
  );
 }

 showTaskDetail(task) {
  this.props.navigator.push({
    title: task.volumeInfo.title,
    component: TaskDetail,
    passProps: {task}
  });
 }

 render() {

    return (
      <Container>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTask.bind(this)}
        style={styles.listView}
      />
      </Container>
    );
  }
}

export default TaskListContainer
