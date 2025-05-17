import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import UserItem from './components/UserItem';
import UserDetails from './components/UserDetails';
import RoleFilter from './components/RoleFilter';

import users from './data/users';

export default function App() {
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user => user.role === selectedRole || selectedRole === 'All');

  return (
    <SafeAreaView className="flex flex-col flex-1 bg-slate-900">
      <Text className="mt-4 text-2xl text-center font-bold text-slate-300">User Panel</Text>

      <RoleFilter
        selectedRole={selectedRole}
        onRoleSelect={setSelectedRole}
        roles={Array.from(new Set(users.map(user => user.role))).sort()}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={user => user.id}
        renderItem={({ item }) => (
          <UserItem user={item} onUserPress={() => setSelectedUser(item)} />
        )}
      />

      <UserDetails user={selectedUser} onModalClose={() => setSelectedUser(null)} />
    </SafeAreaView>
  );
}
