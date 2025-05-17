import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex flex-col flex-1 bg-slate-900 y-4">
      <Text className="text-2xl text-center font-bold text-white">User Panel</Text>

      <View className="flex-row mt-4 bg-slate-800">
        <View>
          <Text className="text-slate-100 ml-4 my-auto text-xl font-bold">Role:</Text>
        </View>

        <View className="flex flex-row m-4">
          <TouchableOpacity
            className="bg-slate-700 py-2 px-4 rounded-md border border-slate-100"
          >
            <Text className="text-slate-50">All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md border border-slate-100"
          >
            <Text className="text-slate-50">Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="ml-4 bg-slate-700 py-2 px-4 rounded-md border border-slate-100"
          >
            <Text className="text-slate-50">User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
