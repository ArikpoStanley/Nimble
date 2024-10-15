import React from 'react'
import {View, Text, StyleSheet,} from 'react-native'

const Line = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20, width: 250, alignSelf: 'center'}}>
      <View style={styles.line} />
      <Text style={{marginHorizontal: 10, color: '#9C9393', fontSize: 20,}}>Or</Text>
      <View style={styles.line} />
    </View>
  )
}
const styles = StyleSheet.create({
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#9C9393',
      width: 10
    },
  });
export default Line