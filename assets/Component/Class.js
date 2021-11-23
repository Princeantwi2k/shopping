import React from "react";
import { Text,View ,ImageBackground} from "react-native";
import styles from './styles'
import Button from "../Buttom/Button";


const Class = (props)=>{

    const {name,tagline,image} = props.House


    return (
        
             <View style={styles.carcontainer}>
    <ImageBackground source={image} style={styles.Image} />
   <View style={styles.titles}>
   <Text style={styles.title}>{name}</Text>
   <Text style={styles.subtitle}>{tagline}</Text>
   </View>
   <View style={styles.buttoncontainer}>
   <Button  type="primary" content={'BUY'} onPress={()=>{
       console.warn("you just placed your other")
   }} />
      <Button  type="secondry" content={'ADD TO CHART'} onPress={()=>{
       console.warn("you have added to chart")
   }} />

</View>
        </View>
    )
   
}

export default Class