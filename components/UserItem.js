import React from 'react';
import { Text, TouchableOpacity } from'react-native';

const UserItem = ({ user, onUserPress }) => (
  <TouchableOpacity onPress={onUserPress} className="p-4 border-b border-slate-800">
    <Text className="text-xl font-bold text-slate-400">{user.name}</Text>
    <Text className="text-sm text-slate-500">{user.email}</Text>
    <Text className="text-sm text-slate-600">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Text>
  </TouchableOpacity>
)

export default UserItem;
