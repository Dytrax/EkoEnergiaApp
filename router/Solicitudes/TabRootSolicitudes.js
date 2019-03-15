import React from 'react'
import {
    createBottomTabNavigator,
    createStackNavigator,
    NavigationEvents,
    StackActions,
    NavigationActions,
    TabBarBottom
   
  } from 'react-navigation';
import AbiertasScreen from  '../../src/components/Solicitudes/Solicitudes'
import CerradasScreen from  '../../src/components/Solicitudes/SolicitudesCerradas'

import AbiertasIcon from "react-native-vector-icons/Octicons" //issue-opened
import CerradasIcon from 'react-native-vector-icons/Octicons' //issue-closed

import COLOR from '../../config/color'



  const stack1 = createStackNavigator({
    Abiertas:{ screen: AbiertasScreen},
  },{
    navigationOptions: () => ({
        header: null,
        gesturesEnabled: false

      })
  });

const stack2 = createStackNavigator({
    Cerradas:{ screen: CerradasScreen },
    
  },{
    navigationOptions: () => ({
        header: null,
        gesturesEnabled: false

      })
  });



const TabRootSolicitudes = createBottomTabNavigator({
    Tab1:{ screen: stack1,
                navigationOptions: {
                    /* tabBarOnPress: ({ navigation, defaultHandler }) => {
                        defaultHandler();
              
                        const resetAction = StackActions.reset({
                          index: 0,
                          actions: [NavigationActions.navigate({ routeName: 'Tab1' })],
                        });
                        navigation.dispatch(resetAction);
                      }, */
                    tabBarLabel:'Abiertas',
                    tabBarOptions: {
                        showLabel: true, // hide labels
                        activeTintColor: COLOR.green, // active icon color
                        inactiveTintColor: '#586589',  // inactive icon color
                        style: {
                            //backgroundColor: '#171F33' // TabBar background
                            backgroundColor:"rgb(243,243,243)",
                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                            shadowOffset: { height: 1, width: 1 }, // IOS
                            shadowOpacity: 1, // IOS
                            shadowRadius:6, //IOS
                        }
                    },
            
                    tabBarIcon: ({tintColor}) => (
                        
                            <AbiertasIcon
                            name="issue-opened"
                            color={tintColor}
                            size={20}
                            />

                            )
                }
            
            },
    Tab2:{ screen: stack2,
        navigationOptions: {
            /* tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
      
                const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'Tab2' })],
                });
                navigation.dispatch(resetAction);
              }, */
            tabBarLabel:'Cerradas',
            tabBarOptions: {
                showLabel: true, // hide labels
                activeTintColor: COLOR.red, // active icon color
                inactiveTintColor: '#586589',  // inactive icon color
                style: {
                    //backgroundColor: '#171F33' // TabBar background
                    backgroundColor:"rgb(243,243,243)",
                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                    shadowOffset: { height: 1, width: 1 }, // IOS
                    shadowOpacity: 1, // IOS
                    shadowRadius:6, //IOS
                }
            },
    
            tabBarIcon: ({tintColor}) => (
                
                    <CerradasIcon
                    name="issue-closed"
                    color={tintColor}
                    size={20}
                    />

                    )
        }    
    },
    
    


  
},{
    //order:['Contactos','Clientes','Oportunidades'],
    animationEnabled:true,
    
}   
);

export default TabRootSolicitudes;