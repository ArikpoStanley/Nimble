import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Animated , StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import CustomKeypad from '../components/Keypad'; // Import the custom keypad
import Logo from '../components/Logo';
import * as Animatable from 'react-native-animatable';
import check from '../../../../assets/img/check.png'

const OTPVerificationScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;


  const handleKeyPress = (key) => {
    if (key === 'delete') {
      if (currentIndex > 0) {
        const newOtp = [...otp];
        newOtp[currentIndex - 1] = '';
        setOtp(newOtp);
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex < otp.length) {
        const newOtp = [...otp];
        newOtp[currentIndex] = key;
        setOtp(newOtp);
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const showModal = () => {
    setModalVisible(true);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000, // Animation duration
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    setTimeout(() => {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }, 3000); // Modal will close after 3 seconds
  };

  useEffect(() => {
    if (modalVisible) hideModal();
  }, [modalVisible]);

  const [timer, setTimer] = useState(30); // Initial countdown value in seconds
  const [isActive, setIsActive] = useState(true); // Timer active state

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000); // Countdown by 1 second
    } else if (timer === 0) {
      clearInterval(interval); // Stop countdown when it reaches 0
      setIsActive(false);
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isActive, timer]);

  const resetTimer = () => {
    setTimer(30); // Reset the timer to 30 seconds
    setIsActive(true); // Start the timer again
  };
  return (
    <View style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* <Logo /> */}
      <Text style={{   color: '#fff', fontSize: 25, fontWeight: '600', textAlign: 'center', marginVertical: 20}}>OTP Verification</Text>
      <Text style={{color: "white", textAlign: "center", fontSize: 17, marginHorizontal: 20}}>A one time code will be sent to your registered phone number . Verify phone to continue.</Text>
      
      <View style={styles.line} />
      <Text style={{color: "white", textAlign: "center"}}>Enter code</Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={value}
            editable={false} // Non-editable since input comes from the keypad
          />
        ))}
      </View>
      {timer > 0 ? (
          <Text style={{color: "white", textAlign: "center", fontSize: 15, marginHorizontal: 20, alignItems: "center"}}> 
          Didnt receive a code ? Resend code in <Text style={{color: "blue", alignItems: "center"}}>{timer + "s"}</Text> 
          </Text>
        ) : (
      <TouchableOpacity onPress={resetTimer} >
        <Text style={{  color: '#fff', fontSize: 15, textAlign: "center", fontWeight: "bold"}}>Resend Code</Text>
      </TouchableOpacity>
        )
      }
      <View style={{marginTop: 20}}>
      <TouchableOpacity style={styles.button1} onPress={showModal}>
        <Text style={{  color: '#fff', fontSize: 30, textAlign: "center", fontWeight: "bold"}}>Verify</Text>
      </TouchableOpacity>
      </View>

      <Text style={{color: "white", textAlign: "center", marginTop: 20}}>From messages</Text>
      <Text style={{color: "white", textAlign: "center", fontSize: 20}}>****</Text>

      {/* Custom Keypad */}
      <CustomKeypad onKeyPress={handleKeyPress} />

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Animatable.Image
              animation="bounceIn"
              duration={1500}
              source={check} // Replace with your checkmark image
              style={styles.icon}
            />
            <Text style={styles.title}>Verification Successful!</Text>
            <Text style={styles.message}>
              Dear User, your Email Address has been successfully verified.
            </Text>

            <TouchableOpacity
              style={styles.okButton}
              onPress={() => {
                navigation.navigate("Login")
                setModalVisible(false)
              }}
            >
              <Text style={styles.okButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  line: {
    height: 1,            // Line height (thickness)
    backgroundColor: '#333', // Color of the line (adjust based on your design)
    marginVertical: 20,    // Space above and below the line (adjust as needed)
    width: '90%',          // Adjust the width of the line to fit the container
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: '#252535',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: '#252535',
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#44466F',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#0A0F77',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 8,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default OTPVerificationScreen;



