import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import UserItem from './components/UserItem';
import UserDetails from './components/UserDetails';
import RoleFilter from './components/RoleFilter';

const users = [
  { id: '1', name: 'John Karlo', email: 'johnkarlo@example.com', role: 'admin', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '2', name: 'Jane Doe', email: 'janedoe@example.com', role: 'user', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '3', name: 'Mike Smith', email:'mikesmith@example.com', role: 'user', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '4', name: 'Sarah Johnson', email:'sarahjohnson@example.com', role: 'developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '5', name: 'David Wilson', email:'davidwilson@example.com', role: 'manager', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '6', name: 'Emily Davis', email:'emilydavis@example.com', role: 'chef', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '7', name: 'Daniel Brown', email:'danielbrown@example.com', role: 'engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '8', name: 'Olivia Wilson', email:'oliviawilson@example.com', role: 'receptionist', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '9', name: 'Christopher Thompson', email:'christopherthompson@example.com', role: 'secretary', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '10', name: 'Joshua Taylor', email:'joshua@example.com', role: 'engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

const RoleFilter = ({ selectedRole, onRoleSelect, roles }) => (
  <View className="flex-row mt-4 bg-slate-800">
    <View>
      <Text className="text-slate-300 ml-4 my-auto text-xl font-bold">Role:</Text>
    </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
      }}
      className="flex-1 m-4"
    >
      <TouchableOpacity
        className={`bg-slate-700 mr-2 py-2 px-4 rounded-md ${selectedRole === 'All' ? 'bg-blue-600' : ''}`}
        onPress={() => onRoleSelect('All')}
      >
        <Text className="text-slate-50">All</Text>
      </TouchableOpacity>
      {roles.map((role) => (
        <TouchableOpacity
          className={`bg-slate-700 mr-2 py-2 px-4 rounded-md ${selectedRole === role ? 'bg-blue-600' : ''}`}
          onPress={() => onRoleSelect(role)}
        >
          <Text className="text-slate-50">{role.charAt(0).toUpperCase() + role.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
)

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
