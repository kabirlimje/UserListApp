import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'UserDetail'>;

const UserDetailScreen = ({ route }: Props) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Info</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="mail" size={20} color="#0066cc" style={styles.icon} />
            <Text style={styles.rowText}>{user.email}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Ionicons name="call" size={20} color="#0066cc" style={styles.icon} />
            <Text style={styles.rowText}>{user.phone}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Ionicons name="globe" size={20} color="#0066cc" style={styles.icon} />
            <Text style={styles.rowText}>{user.website}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="business" size={20} color="#0066cc" style={styles.icon} />
            <Text style={[styles.rowText, styles.bold]}>{user.company.name}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.subText}>"{user.company.catchPhrase}"</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="location" size={20} color="#0066cc" style={styles.icon} />
            <View>
              <Text style={styles.rowText}>{user.address.street}, {user.address.suite}</Text>
              <Text style={styles.rowText}>{user.address.city}</Text>
              <Text style={styles.zipcode}>{user.address.zipcode}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    padding: 16,
  },
  headerCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: '#636e72',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
    width: 24,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  bold: {
    fontWeight: '700',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 8,
    marginLeft: 36,
  },
  zipcode: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f2f6',
    marginVertical: 12,
    marginLeft: 36,
  },
});

export default UserDetailScreen;
