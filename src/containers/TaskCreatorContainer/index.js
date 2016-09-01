/* @flow */

import React, { Component } from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';
import { Actions } from 'react-native-router-flux'
import Container from '@components/Container'

import styles from './styles'

class TaskManagerContainer extends Component<void, void, void> {
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }
  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
    taskName:"",
    desc:"",
    type: '',
    difficulty: "",
    deadlineDate: Date,
    }
    */

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }

  render() {
    return (<ScrollView keyboardShouldPersistTaps={true} style={{paddingLeft:10,paddingRight:10, marginTop:60, height:200}}>
      <Form
        ref='taskForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        >
        <Separator />
        <InputField 
          style={styles.input}
          ref='taskName' 
          placeholder='Task Name'
          helpText='Give your task a short but informative name, like "Need help mowing my lawn".'
          />
        <InputField
          multiline={true}
          ref='desc'
          placeholder='Task Description'
          helpText='Add a short descripition of what the task will entail. Be straightforward so other users can see if they can help!' 
          />
        <PickerField ref='type'
          label='Task Type'
          options={{
            "": '',
            handyman: 'Handyman',
            errands: 'Errands',
            domestic: 'Domestic',
            physicalLabor: 'Physical Labor',
            informative: 'Informative',
            misc: 'Miscellaneous',
          }}
          helpText='Pick the type that your task best falls under.' 
          />
        <PickerField ref='difficulty'
          label='Difficulty Level'
          options={{
            "": '',
            easy: 'Easy',
            medium: 'Medium',
            hard: 'Hard',
          }}
          helpText="Choose the difficulty level that best fits your task. Remember, the more difficult the task is the more coins it will cost. But be honest! No one will want to do a task for you if it is ranked easier than it actually is."
          />
        <Separator />
        <InputField
          multiline={true}
          ref='address'
          placeholder='Task Location'
          />
        <DatePickerField ref='deadlineDate'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()} mode="datetime" placeholder='Start Time'/>
        </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>
        <TouchableOpacity onPress={Actions.taskList} style={styles.container}>
          <Text style={styles.text}>Add this task!</Text>
        </TouchableOpacity>
      </ScrollView>);
  }
}

export default TaskManagerContainer
