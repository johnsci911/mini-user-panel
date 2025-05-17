import { Modal, Text, TouchableOpacity, View } from'react-native';

const UserDetails = ({ user, onModalClose }) => (
  <Modal visible={!!user} onRequestClose={onModalClose} transparent>
    <View className="flex-1 justify-center items-center bg-slate-900 bg-opacity-25">
      {user && (
        <View className="w-3/4 py-4 bg-slate-200 rounded-lg shadow-md">
          <View className="px-4">
            <Text className="text-2xl font-bold">{user.name}</Text>
            <Text className="text-slate-500">{user.email}</Text>
            <Text className="text-lg font-medium text-slate-600">Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Text>

          </View>
          <View className="mt-1 p-4 bg-slate-300">
            <Text className="text-md font-medium text-slate-800">Description:</Text>
            <Text className="font-normal text-sm text-slate-700">{user.description}</Text>
          </View>
          <View className="flex items-end px-4">
            <TouchableOpacity onPress={onModalClose} className="mt-4 bg-slate-300 px-4 py-3 rounded-lg">
              <Text className="text-red-400 font-bold text-lg">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  </Modal>
)

export default UserDetails;
