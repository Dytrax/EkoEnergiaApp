const typeSolicitud = (state = {} , action) => {
    switch (action.type) {
        case 'SET_TIPO_SOLICITUD':
            return action.payload 
        case 'EMPTY_TIPO_SOLICITUD':
            return action.payload    
    default:
        return state;
    }
  };

  export default typeSolicitud;


  /* 
  
  <View style={[{flexDirection:"row",backgroundColor:"white",marginBottom:5,padding:10},styles.sombra]}>
        <View style={{alignSelf:"center",width:"90%"}}>
            
            <Text style={{color:'rgb(99,99,99)',fontWeight:"bold", fontSize:16,}}>{`${item.codigo} - ${item.descripcion}`}</Text>
            
        </View>
        
            
            {
                this.props.typeSolicitud.codigo === item.codigo ? (
                    <View style={{justifyContent:"center",alignItems:"center",width:"10%"}}>
                        <Icon name={'ios-checkmark'} color={Color.primary}/>
                    </View>
                ) :  (null)
            }
            
        </View>*/