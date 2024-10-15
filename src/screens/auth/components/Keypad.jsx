import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomKeypad = ({ onKeyPress }) => {
  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <View style={styles.keypadContainer}>
      <View style={styles.keypadRow}>
        <KeypadButton number="1" onPress={handleKeyPress} />
        <KeypadButton number="2" text={"abc"} onPress={handleKeyPress} />
        <KeypadButton number="3" text={"def"} onPress={handleKeyPress} />
      </View>

      {/* Second Row */}
      <View style={styles.keypadRow}>
        <KeypadButton number="4" text={"ghi"} onPress={handleKeyPress} />
        <KeypadButton number="5" text={"jkl"} onPress={handleKeyPress} />
        <KeypadButton number="6" text={"mno"} onPress={handleKeyPress} />
      </View>

      {/* Third Row */}
      <View style={styles.keypadRow}>
        <KeypadButton number="7" text={"pqrs"} onPress={handleKeyPress} />
        <KeypadButton number="8" text={"tuv"} onPress={handleKeyPress} />
        <KeypadButton number="9" text={"wxyz"} onPress={handleKeyPress} />
      </View>

      <View style={styles.keypadRow}>
        <KeypadButton number="*" onPress={() => {}} /> 
        <KeypadButton number="0" onPress={handleKeyPress} />
        <KeypadButton number="⌫" onPress={() => handleKeyPress('delete')} /> 
      </View> 
    </View> 
  );
};

const KeypadButton = ({ number, onPress, text}) => (
  <TouchableOpacity style={styles.keypadButton} onPress={() => onPress(number)}>
    <Text style={styles.keypadText}>{number}</Text>
    <Text style={styles.keypadText1}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  keypadContainer: {
    width: '100%'
  },
  keypadRow: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginTop:10
  },
  keypadButton: {
    width: 100,
    height: 50,
    backgroundColor: '#252535',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    lineHeight: 18
  },
  keypadText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  keypadText1: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CustomKeypad;
