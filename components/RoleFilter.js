import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';


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
        key="all"
        className={`bg-slate-700 mr-2 py-2 px-4 rounded-md ${selectedRole === 'All' ? 'bg-blue-600' : ''}`}
        onPress={() => onRoleSelect('All')}
      >
        <Text className="text-slate-50">All</Text>
      </TouchableOpacity>
      {roles.map((role) => (
        <TouchableOpacity
          key={role}
          className={`bg-slate-700 mr-2 py-2 px-4 rounded-md ${selectedRole === role ? 'bg-blue-600' : ''}`}
          onPress={() => onRoleSelect(role)}
        >
          <Text className="text-slate-50">{role.charAt(0).toUpperCase() + role.slice(1)}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
)

export default RoleFilter;
