/* @flow */

import React from 'react'
import { TabBarIOS } from 'react-native'

import Featured from './Featured.js'
import Search from './Search.js'


class TabBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'featured',
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          title="Featured"
          systemIcon="featured"
          selected={this.state.selectedTab === 'featured'}
          onPress={() => {
            this.setState({
              selectedTab: 'featured',
            })
          }}
        >
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab === 'search'}
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'search',
            })
          }}
        >
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = TabBar
