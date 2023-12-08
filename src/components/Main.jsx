import React from "react";
import Constants from "expo-constants";
import {Text, View} from "react-native";
import RepositoryList from "./RepositoryList.jsx";
import StyledText from "./StyledText.jsx";


const Main= () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}} >
            <StyledText > Repositories</StyledText>
            <RepositoryList />
        </View>
    );
    }

    export default Main;