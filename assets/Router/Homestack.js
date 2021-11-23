import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from '@react-navigation/native'
import Online from '../Component/Online'
import Shopping from '../Component/Shopping'
import Payment from '../Component/Payment'

const screens = {
    Home : {
        screens : Online
    },
    Shopping :{
        screens : Shopping
    },
    Payment :{
        screens : Payment
    }
}


const Homestack = createStackNavigator(screens);

export default createAppContainer(Homestack)