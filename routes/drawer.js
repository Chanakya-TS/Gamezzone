import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import homeStack from './homeStack'
import aboutStack from './aboutStack'

const screens = {
    Home: {
        screen: homeStack
    },
    About: {
        screen: aboutStack
    }
}

const rootDrawerNavigator = createDrawerNavigator(screens)

export default createAppContainer(rootDrawerNavigator)