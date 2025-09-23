import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function ChatsScreen() {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);

    // Función para validar el formato del correo electrónico
    const validateEmail = (text) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(text);
    };

    // Maneja el cambio de texto y actualiza el estado del correo
    const handleTextChange = (text) => {
        setEmail(text);
        // Borra el estado de error si el usuario empieza a escribir
        if (hasError) {
            setHasError(false);
        }
    };

    // Valida el correo electrónico al salir del campo
    const handleBlur = () => {
        setIsFocused(false);
        if (email.length > 0) {
            setHasError(!validateEmail(email));
        } else {
            setHasError(false); // No muestra error si el campo está vacío
        }
    };

    // Define los estilos dinámicos basados en el estado
    const borderColor = hasError ? '#FF6B6B' : (isFocused ? '#7F5AF0' : '#1D1C47');
    const textColor = hasError ? '#FF6B6B' : 'white';
    const labelColor = hasError ? '#FF6B6B' : '#8B6EE7';
    const inputBgColor = hasError ? '#fff' : '#141534';
    const iconBgColor = hasError ? '#30305e' : '#30305e';

    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.inputContainer,
                    { borderColor: borderColor, backgroundColor: inputBgColor }
                ]}
            >
                {(isFocused || hasError) && (
                    <Text style={[styles.inputLabel, { color: labelColor, backgroundColor: 'transparent' }]}>
                        {hasError ? 'Correo electrónico incorrecto' : 'Correo electrónico'}
                    </Text>
                )}
                <TextInput
                    placeholder={isFocused || hasError ? '' : 'Escribe tu correo electrónico'}
                    style={[styles.input, { color: textColor }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={hasError ? '#FF6B6B' : '#54537C'}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(text) => handleBlur(text)}
                    value={email}
                    onChangeText={handleTextChange}
                />
                {(isFocused || email.length > 0) && (
                    <Pressable onPress={() => { setEmail(''); setHasError(false); }} style={styles.clearButton}>
                        <View style={[styles.iconBackground, { backgroundColor: iconBgColor }]}>
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
        borderRadius: 16,
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 16,
        position: 'relative',
    },
    inputLabel: {
        position: 'absolute',
        left: 16,
        top: -10,
        fontSize: 9,
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 4,
        paddingTop: 11,
    },
    input: {
        flex: 1,
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