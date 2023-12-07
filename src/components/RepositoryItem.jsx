import {View, Text, StyleSheet} from "react-native";
import React from "react";
import StyledText from "./StyledText.jsx";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
    <StyledText fontsize='subheading' fontWeight='bold'>fullName: {props.fullName}</StyledText>
    <StyledText >language: {props.language}</StyledText>
    <StyledText >forksCount: {props.forksCount}</StyledText>
    <StyledText >stargazersCount: {props.stargazersCount}</StyledText>
    <StyledText >ratingAverage: {props.ratingAverage}</StyledText>
    <StyledText >reviewCount: {props.reviewCount}</StyledText>
    <StyledText >ownerAvatarUrl: {props.ownerAvatarUrl}</StyledText>
</View>
) 

export default RepositoryItem;
