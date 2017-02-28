import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from './actions';

import List from './components/List';
import Title from './components/Title';
import Input from './components/Input';


class App extends Component {
  onAddTodo = (text) => {
    this.props.addTodo(text);
  }

  onRemoveTodo = (index) => {
    this.props.removeTodo(index);
  }

  render() {
    console.log(this.props);
    const { todos } = this.props;
    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    );
  }
}

const mapStateToProps = ({todos}) => {
  return { todos };
};

export default connect(mapStateToProps, actions)(App);
