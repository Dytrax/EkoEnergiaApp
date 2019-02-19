import Config from '../../config/config'
import  DB from '../datastore/function'
import Moment from 'moment';

class apiRequests{

  async getList(){
    try{
    
    const query = await fetch(Config.base_url+Config.port_request+Config.v1_api+'pqr/pqrs' ,{  
          method: 'GET', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ await DB.getData('token'),
          },
        
        })
        let responseJson = await query.json()
        
        return [ query.status,responseJson]

    }catch(error){
      console.error(error)
    } 
  }

  

  async create(titulo,descripcion){

    console.log(titulo+" "+descripcion)
    try{
     // POST	7002		/v1/pqr/pqrs	
          const query = await fetch(Config.base_url+Config.port_request+Config.v1_api+'pqr/pqrs' ,{  
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ await DB.getData('token'),
          },
          body: JSON.stringify({
            title: titulo,
            description: descripcion,
            dateInit:Moment().format()
            
          })
      
        })
        let responseJson = await query.json()
        console.log(query.status)
        return [ query.status,responseJson]

    }catch(error){
      console.error(error)
    } 
  }
}

export default new apiRequests()