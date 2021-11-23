import { StyleSheet,Dimensions } from "react-native";

const style = StyleSheet.create({
    carcontainer:{
        height:'100%',
        width:"100%",
        height:Dimensions.get('window').height
      },
      title:{ 
        fontSize:40,
        fontWeight:'500'
      },
      titles:{
        marginTop:80,
        width:'100%',
        alignItems:"center"
      },
      subtitle:{
        fontSize:16,
        color:"#5c5e62"
      },
      Image:{
        width:"100%",
        height:"100%",
        resizeMode:'cover',
        position:"absolute"
      },
      buttoncontainer:{
        position:"absolute",
        bottom:50,
        width:"100%"
      }
})
export default style