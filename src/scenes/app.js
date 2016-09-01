/* @flow */

import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import { styles } from '@components/NavigationBar'

import LauchContainer from '@containers/LauchContainer'
import CounterContainer from '@containers/CounterContainer'
import ProfileContainer from '@containers/ProfileContainer'
import TaskManagerContainer from '@containers/TaskManagerContainer'
import TaskCreatorContainer from '@containers/TaskCreatorContainer'
import TaskListContainer from '@containers/TaskListContainer'
import TaskDetailContainer from '@containers/TaskDetailContainer'

const scenes = Actions.create(
  <Scene key="app" navigationBarStyle={styles.container}>
    <Scene key="welcome" component={LauchContainer} title="Log In" />
    <Scene key="counter" component={CounterContainer} title="Counter" />
    <Scene key="profile" component={ProfileContainer} title="Profile" />
    <Scene key="taskManager" component={TaskManagerContainer} title="Task Manager" />
    <Scene key="taskCreator" component={TaskCreatorContainer} title="Task Creator" />
    <Scene key="taskList" component={TaskListContainer} title="Task List" />
    <Scene key="taskDetail" component={TaskDetailContainer} title="Task Detail" />
  </Scene>
)

export default scenes
