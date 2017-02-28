import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class List extends Component {
  renderItem = (text, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress = {() => this.props.onPressItem(i)}
      >
        <Text>{ text }</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.props.list.todos.map(this.renderItem)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15
  }
});

export default List;
