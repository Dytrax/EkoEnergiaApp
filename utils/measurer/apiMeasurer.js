import Config from '../../config/config'
import  DB    from '../datastore/function'


class apiMeasurer{

  async getList(){
    try{
    
    const query = await fetch(Config.base_url+Config.port_measurer+Config.eko_api+'clients/measurers/data' ,{  
          method: 'GET', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ await DB.getData('token'),
          },
        
        })
        let response=[]
        let responseJson = await query.json()

        if(query.status==403){
            return ""+query.status
        }
        else{
          console.log(query.status+response)
          responseJson.map(function(data, i){
              if ( data.load == false ) {
                  response.push(data)
              }
          })
          return [ query.status,response]
        }
        

    }catch(error){
      console.error(error)
    } 
  }

  

  async create(titulo,descripcion){

   
  }
}

export default new apiMeasurer()