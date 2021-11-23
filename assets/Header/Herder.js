import React from 'react';
import {View,Text,Image} from 'react-native';
import style from './Styles';
import { Entypo } from '@expo/vector-icons';

const Herder = () => {
    return (
        <View style={style.containerimg}>
            <Text style={style.Text}>Bluelet</Text>
            <Entypo name="menu" size={39} color="black"  style={style.icon} />
        </View>
    );
}



export default Herder;
