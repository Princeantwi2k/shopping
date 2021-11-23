import React from "react";
import { Text,View,FlatList ,Dimensions} from "react-native";
import House from "./House";
import styles from './Styles'
import Class from '../Component/Class'





const Phonelist = (props) => {
return(
    <View style={styles.Phonecontainer}>
        <FlatList  
        data={House}
        renderItem={({item})=> < Class House={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        />
        
         
    </View>
)

}

export default Phonelist