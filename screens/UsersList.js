import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from '../database/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const collectionRef = collection(database, 'usuarios');
      const q = query(collectionRef, orderBy('name', 'desc'));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
        }));
        setUsers(userData);
      });

      return () => {
        unsubscribe();
      };
    };

    fetchUsers();
  }, []);

  const handleUserPress = (user) => {
    navigation.navigate('UserDetailScreen', { user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleUserPress(item)} style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UsersList;
