import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome} from '@expo/vector-icons'; // Assuming you're using Expo

const CustomInput = ({ placeholder, iconName, }) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name={iconName} size={20} color="#8c8c8c" style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor="#8c8c8c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#252535', // Set your preferred background color
    borderRadius: 20, // Adjust for rounded edges
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff', // Text color
    fontSize: 16,
  },
});

export default CustomInput;
