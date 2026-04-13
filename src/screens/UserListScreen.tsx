import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { User } from '../types';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type UserListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserList'>;

interface Props {
  navigation: UserListScreenNavigationProp;
}

const UserListScreen = ({ navigation }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
      setFilteredUsers(data);
      setError(null);
    } catch (err) {
      setError('Could not load users. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadUsers();
    setSearchQuery('');
    setRefreshing(false);
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (!text.trim()) {
      setFilteredUsers(users);
      return;
    }
    
    const lowercasedQuery = text.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
  };

  const renderItem = ({ item }: { item: User }) => (
    <UserCard 
      user={item} 
      onPress={() => navigation.navigate('UserDetail', { user: item })} 
    />
  );

  if (loading) {
    return <Loader />;
  }

  if (error && !refreshing) {
    return <ErrorView message={error} onRetry={loadUsers} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            colors={['#0066cc']} 
            tintColor="#0066cc" 
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default UserListScreen;
