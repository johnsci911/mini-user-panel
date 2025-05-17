import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex flex-col flex-1 bg-slate-900 y-4">
      <Text className="text-2xl text-center font-bold text-white">User Panel</Text>

      <View className="flex-row mt-4 bg-slate-800">
        <Text className="text-slate-100 ml-4 my-3 text-lg">Role:</Text>
      </View>
    </SafeAreaView>
  );
}
