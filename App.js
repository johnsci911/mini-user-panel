import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const users = [
  { id: '1', name: 'John Karlo', email: 'johnkarlo@example.com', role: 'admin' },
  { id: '2', name: 'Jane Doe', email: 'janedoe@example.com', role: 'user' },
  { id: '3', name: 'Mike Smith', email:'mikesmith@example.com', role: 'user' },
  { id: '4', name: 'Sarah Johnson', email:'sarahjohnson@example.com', role: 'developer' },
  { id: '5', name: 'David Wilson', email:'davidwilson@example.com', role: 'manager' },
  { id: '6', name: 'Emily Davis', email:'emilydavis@example.com', role: 'chef' },
  { id: '7', name: 'Daniel Brown', email:'danielbrown@example.com', role: 'engineer' },
  { id: '8', name: 'Olivia Wilson', email:'oliviawilson@example.com', role: 'receptionist' },
  { id: '9', name: 'Christopher Thompson', email:'christopherthompson@example.com', role: 'secretary' },
  { id: '10', name: 'Joshua Taylor', email:'joshua@example.com', role: 'engineer' },
]

const UserItem = ({ user, onUserPress }) => (
  <TouchableOpacity onPress={onUserPress} className="p-4 border-b border-slate-800">
    <Text className="text-xl font-bold text-slate-400">{user.name}</Text>
    <Text className="text-sm text-slate-500">{user.email}</Text>
    <Text className="text-sm text-slate-600">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Text>
  </TouchableOpacity>
)

export default function App() {
  const [selectedRole, setSelectedRole] = useState('All');

  const filteredUsers = users.filter(user => user.role === selectedRole || selectedRole === 'All');


  return (
    <SafeAreaView className="flex flex-col flex-1 bg-slate-900 py-4">
      <Text className="text-2xl text-center font-bold text-slate-300">User Panel</Text>

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
            className="bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('All')}
          >
            <Text className="text-slate-50">All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('admin')}
          >
            <Text className="text-slate-50">Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('user')}
          >
            <Text className="text-slate-50">User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('developer')}
          >
            <Text className="text-slate-50">Developer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('manager')}
          >
            <Text className="text-slate-50">Manager</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('chef')}
          >
            <Text className="text-slate-50">Chef</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('engineer')}
          >
            <Text className="text-slate-50">Engineer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md"
            onPress={() => setSelectedRole('secretary')}
          >
            <Text className="text-slate-50">Secretary</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={user => user.id}
        renderItem={({ item }) => (
          <UserItem user={item} onUserPress={() => console.log('User pressed:', item.name)} />
        )}
      />
    </SafeAreaView>
  );
}
