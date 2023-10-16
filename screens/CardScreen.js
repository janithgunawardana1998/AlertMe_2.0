import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const CardScreen = () => (
    <Card style={styles.card}>
        <Card.Content>

            <Title style={styles.cardTitle}>Emergency Alert</Title>
            <Paragraph style={styles.cardContent}>Flood Warning in Gampaha</Paragraph>
        </Card.Content>
        <Card.Cover
            source={{ uri: 'https://picsum.photos/700' }}
            style={styles.cardCover}
        />
        <Card.Actions style={styles.cardActions}>
            <Button>Dissmiss</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        margin: 10,
    },
    cardTitle: {
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        color: 'red',
    },
    cardContent: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardCover: {
        height: 150,
    },
    cardActions: {
        justifyContent: 'flex-end',
    },
});

export default CardScreen;
