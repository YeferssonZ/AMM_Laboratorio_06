import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../assets/login.png')} style={styles.image} />
        <Text style={styles.title}>Detalles del Usuario</Text>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Correo:</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.label}>Teléfono:</Text>
          <Text style={styles.text}>{user.phone}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  userInfo: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555555',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default UserDetailScreen;
