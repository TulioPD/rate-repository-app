import React from "react";
import {View} from "react-native";
import StyledText from "./StyledText.jsx";


const ParseThousands = value => {
    return value > 1000 ? `${(value/1000).toFixed(1)}k` : value;
}

const RepositoryStats = (props) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
                <StyledText fontWeight='bold' align='center'>Stars: </StyledText>
                <StyledText>{ParseThousands(props.stargazersCount)} </StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' align='center'>Forks: </StyledText>
                <StyledText>{ParseThousands(props.forksCount)} </StyledText>
            </View>
            <View>
                <StyledText fontWeight='bold' align='center'>Reviews: </StyledText>
                <StyledText>{ParseThousands(props.reviewCount)} </StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats;