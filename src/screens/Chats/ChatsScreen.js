import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function ChatsScreen() {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const validateEmail = () => {
    // Esta regex verifica que el formato del email sea similar a "nombre@dominio.com"
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validTest= regex.test(email);
    if(validTest){
      setValid(true)
    }
    else{
      setValid(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        {isFocused && (
          <Text style={styles.inputLabel}>Correo electrónico</Text>
        )}
        <TextInput
          placeholder={isFocused ? '' : 'Escribe tu correo electrónico'}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#54537C"
          onFocus={() => setIsFocused(true)}
          onBlur={() => validateEmail(email)}
          value={email}
          onChangeText={setEmail}
        />
        {isFocused && email.length > 0 && (
          <Pressable onPress={() => setEmail('')} style={styles.clearButton}>
            <View style={styles.iconBackground}>
              <Icon name='close' size={24} color="#fff" />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141534',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1D1C47',
    paddingHorizontal: 16,
    paddingVertical: 16,
    position: 'relative',
  },
  inputFocused: {
    borderColor: '#7F5AF0',
  },
  inputLabel: {
    position: 'absolute',
    left: 16,
    top: -10,
    color: '#8B6EE7',
    fontSize: 9,
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderRadius: 4,
    paddingTop: 11,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    padding: 0,
    backgroundColor: 'transparent',
  },
  clearButton: {
    marginLeft: 10,
  },
  iconBackground: {
    backgroundColor: '#30305e',
    borderRadius: 24,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});