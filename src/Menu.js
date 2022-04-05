import React from 'react';
import {
    View,
    Text,
    Animated,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Easing
} from 'react-native';
import Skeleton, { Thumbnail } from "./Skeleton-placeholder";
import get from "lodash/get";
import PropTypes from "prop-types";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerWidth: new Animated.Value(0),
            
        };
    }
    render() {
        const fullWidth = Dimensions.get('window').width;
        const halfWidth = Dimensions.get('window').width / 2;

        const anim = this.state.drawerWidth.interpolate({
            inputRange: [0, 1, 2],
            outoutRange: [fullWidth - 60, 80, 0],
        });

        return (
            <>
                <Text>{fullWidth}</Text>
            </>
        );
    };


};


