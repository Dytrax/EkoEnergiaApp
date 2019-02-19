import  React,{ Component } from 'react'
import  {StyleSheet,Text,View,Image} from 'react-native'

function Logo(props){
    
        return (
                
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../../../assents/img/logo.png')}
                        />
                        
                    </View>
            
        )   
    
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column'
    },
    logoContainer:{
        marginTop:-310,
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    logo:{
        width:300,
        height:70,
        resizeMode:'contain'
    },
   

})

export default Logo