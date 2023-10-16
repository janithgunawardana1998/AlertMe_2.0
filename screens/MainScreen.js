import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme'
import CardScreen from './CardScreen';
import { StyleSheet } from 'react-native';
import { ScrollView } from "react-native";

export default function MainScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex" >
                <View className="flex-row justify-start" style={styles.item}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-5"
                    >
                        <ArrowLeftIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                <CardScreen />
                <CardScreen />
                <CardScreen />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 20, 
    },
});
