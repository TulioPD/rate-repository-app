import {View, Text, StyleSheet} from "react-native";
import React from "react";
import StyledText from "./StyledText.jsx";
import RepositoryStats from "./RepositoryStats.jsx";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    otherInfo: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // Añadido para separar los elementos
    }
})

const otherInfo = (props) => {
    return (
        <View style={styles.otherInfo}>
            <StyledText> {props.description}</StyledText>
            <StyledText> {props.language}</StyledText>
        </View>
    )
}

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontsize='subheading' fontWeight='bold'> {props.fullName}</StyledText>
        {otherInfo(props)}
        <RepositoryStats {...props} />
    </View>
) 

export default RepositoryItem;