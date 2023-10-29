import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const CardScreen = () => {
    const [isCardVisible, setCardVisible] = useState(true);

    const Dissmiss = () => {
        setCardVisible(false);
    };

    const [date, setDate] = useState(null);
    const [dateTime, setDateTime] = useState(null);

    useEffect(() => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setDate(date);
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setDateTime(date + ' ' + time);
    }, []);


    return isCardVisible ? (
        <Card style={styles.card}>
            <Card.Content>
                <Title style={styles.cardTitle}>Emergency Alert !</Title>
                <Paragraph style={styles.cardContent}>Flood Warning in Gampaha</Paragraph>

            </Card.Content>
            <Card.Cover
                source={{ uri: 'https://picsum.photos/700' }}
                style={styles.cardCover}
            />
            <Card.Actions style={styles.cardActions}>

                <Text style={styles.paragraph}> {dateTime}</Text>
                <Button style={styles.button} onPress={Dissmiss}>
                    Dismiss
                </Button>
            </Card.Actions>
        </Card>
    ) : null;
};

const styles = StyleSheet.create({
    card: {
        margin: 16,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    cardContent: {
        fontSize: 18,
    },
    cardCover: {
        height: 200,
    },
    cardActions: {
        justifyContent: 'flex-end',
    },
    paragraph: {
        margin: 4,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    button: {
        color: 'red'
    }

});

export default CardScreen;