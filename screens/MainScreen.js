import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme'
export default function MainScreen() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-5"

                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}
