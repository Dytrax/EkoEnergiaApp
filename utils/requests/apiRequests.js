import CONFIG from '../../config/config'
import  DB from '../datastore/function'
import Moment from 'moment';
const URL_SOLICITUDES = `${CONFIG.URL_BASE}:${CONFIG.PORT_CRM}/${CONFIG.VERSION_API}/pqr/pqrs`
const URL_TIPO_SOLICITUD = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/data-empresa?module=27&permission=0&data=clasesproceso`
const URL_CONTRATOS = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/measurers/contracts`
const URL_NOTIFICACIONES = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/notifications`
const URL_MEDIDORES = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/measurers`
const URL_TARIFAS_APLICADAS = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/data-empresa?`
const URL_DETALLE_FACTURACION = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/data-empresa?`
const URL_HISTORICOS = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/data-empresa?`
const URL_INDICADORES_GRAFICOS = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/data/dashboard`
const URL_CONSUMO_DIARIO_GRAFICA = `${CONFIG.URL_BASE}:${CONFIG.PORT_7001}/${CONFIG.VERSION_API_EKOSAVE}/clients/measurers/data/`

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

  async getTarifasAplicadas(contract,module,permission,fecha){
    try{
    
    const query = await fetch(URL_TARIFAS_APLICADAS+"contract="+contract+"&module="+module+"&permission="+permission+"&data=tarifa&fechaIni="+fecha+"&fechaFin=",{  
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
  
  async getListMedidores(){
    try{
    
    const query = await fetch(URL_MEDIDORES ,{  
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

  async getListNotificaciones(){
    try{
    
    const query = await fetch(URL_NOTIFICACIONES ,{  
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

  

  async create(titulo,descripcion,codigo,contrato){

   
    try{
     
          const query = await fetch( URL_SOLICITUDES,{  
          method: 'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ await DB.getData('token'),
          },
          body: JSON.stringify({
            codigo:codigo,
            contract:contrato,
            dateInit:Moment().format(),
            description: descripcion,
            title: titulo,
            
            
            
          })
      
        })
        let responseJson = await query.json()
        console.log(query.status)
        return [ query.status,responseJson]

    }catch(error){
      console.error(error)
    } 
  }

  async getMedidoresDataFacturacion(){
    try{
    
    const query = await fetch(URL_MEDIDORES + '/data' ,{  
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

  async getDetalleFacturacion(contract){
    try{
    
    const query = await fetch(URL_DETALLE_FACTURACION + 'contract='+contract+'&module=12&permission=125&meses=6&data=facturas' ,{  
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

  async getHistoricos(contract){
    try{
    
    const query = await fetch(URL_HISTORICOS + 'contract='+contract+'&module=12&permission=125&meses=6&data=historico' ,{  
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


  async getDatosIndicadoresGraficos(){
    try{
    
    const query = await fetch(URL_INDICADORES_GRAFICOS ,{  
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



  async getConsumoDiarioGrafica(id,dateInit,dateEnd){
    try{
    
    const query = await fetch( URL_CONSUMO_DIARIO_GRAFICA+id+"/"+dateInit+"/"+dateEnd+"?startTime=undefined&endTime=undefined&day=undefined",{  
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
}



export default new apiRequests()