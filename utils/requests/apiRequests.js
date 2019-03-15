import CONFIG from '../../config/config'
import  DB from '../datastore/function'
import Moment from 'moment';
const URL_SOLICITUDES = `${CONFIG.URL_BASE}:${CONFIG.PORT_CRM}/${CONFIG.VERSION_API}/pqr/pqrs`
const URL_TIPO_SOLICITUD = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/data-empresa?module=27&permission=0&data=clasesproceso`
const URL_CONTRATOS = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/measurers/contracts`
class apiRequests{

  async getList(){
    try{
    
    const query = await fetch(URL_SOLICITUDES ,{  
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

  async getListTipoSolicitud(){
    try{
    
    const query = await fetch(URL_TIPO_SOLICITUD ,{  
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

  async getListContratos(){
    try{
    
    const query = await fetch(URL_CONTRATOS ,{  
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