import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { database } from '../database/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateUserScreen = (props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        if (state.name === '') {
            alert('Por favor, ingresa un nombre');
        } else {
            await addDoc(collection(database, 'usuarios'), state);
            alert('Usuario guardado');
            props.navigation.navigate('UsersList');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nombre del Usuario"
                onChangeText={(value) => handleChangeText('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                onChangeText={(value) => handleChangeText('email', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                onChangeText={(value) => handleChangeText('phone', value)}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('UsersList')} style={styles.link}>
                <Text style={styles.linkText}>Ver Lista de Usuarios</Text>
            </TouchableOpacity>
            <Button title="Guardar Usuario" onPress={() => saveNewUser()} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    link: {
        marginBottom: 20,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    linkText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CreateUserScreen;
