import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 flex justify-around my-4">
                <Text
                    className="text-white font-bold text-4xl text-center">
                    Alert Me
                </Text>

                <Text style={styles.earlywarning}>"Alert-Me" is a powerful app for instant communication of critical information,
                    ensuring the safety of individuals in emergencies.
                    Quickly share vital alerts to keep those under your care safe.</Text>

                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold" style={styles.Login}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-yellow-400" style={styles.Login}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({

    earlywarning: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff8dc',
        padding: 9,
    },
    earlywarning2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingRight: -50,
        alignContent: 'center',
        paddingRight: 20,
    },
    Login: {
        fontSize: 18,
    }
})