import React from "react";
import {Text, StyleSheet} from "react-native";
import theme from "../theme.js";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.secondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    title: {
        fontSize: theme.fontSizes.title,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold
    },
    textAlignCenter: {
        textAlign: 'center'
    }

});

export default function StyledText({align, children, color, fontsize, fontWeight, style, ...props}) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.center,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontsize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold
    ]

    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}