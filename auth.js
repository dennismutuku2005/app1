import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';  // Use expo-checkbox

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Initial state for the checkbox

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Welcome Back" : "Create Account"}</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#B0BEC5" />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          placeholderTextColor="#B0BEC5" 
          secureTextEntry={!passwordVisible} 
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconContainer}>
          <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      {!isLogin && (
        <>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Confirm Password" 
              placeholderTextColor="#B0BEC5" 
              secureTextEntry={!passwordVisible} 
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconContainer}>
              <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Terms and Conditions checkbox */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}  // Correct handling of checkbox state
              style={styles.checkbox}
            />
            <Text style={styles.termsText}>
              I agree to the <Text style={styles.linkText}>Terms and Conditions</Text>
            </Text>
          </View>
        </>
      )}
      
      <TouchableOpacity style={[styles.button, isLogin ? styles.loginButton : styles.registerButton]}>
        <Text style={styles.buttonText}>{isLogin ? "Login" : "Register"}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.switchButton}>
        <Text style={styles.switchText}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Dark sleek UI
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 40,
    fontFamily: "System",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333333",
    paddingHorizontal: 14,
    marginVertical: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    paddingVertical: 5,
  },
  iconContainer: {
    padding: 5,
    marginLeft: 10,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 12,
  },
  loginButton: {
    backgroundColor: "#00A8E8",
    shadowColor: "#0077B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  registerButton:{
    backgroundColor: "#00A8E8",
    shadowColor: "#0077B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  switchText: {
    color: "#00A8E8",
    marginTop: 15,
    textDecorationLine: "none",
    fontSize: 16,
  },
  switchButton: {
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  checkbox: {
    marginRight: 10,
    borderColor: "#00A8E8",
    backgroundColor: "#1E1E1E",
  },
  termsText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  linkText: {
    color: "#00A8E8",
    textDecorationLine: "underline",
  },
});
