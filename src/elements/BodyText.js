import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

Class BodyText extends React.Componet {
  render() {
    return (
      <View>
        <Text style={Styles.text}>Hello!</Text>
          {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

export default BodyText;
