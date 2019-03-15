
const config = {
    //DEV
    URL_BASE:"http://138.197.160.240",
    //PROD
    //URL_BASE:"http://18.232.153.150",
    //ipAWS
    //URL_BASE:"http://35.173.36.108",
    VERSION_API:"v1",
    VERSION_API_EKOSAVE:"ekosave-api/v1", //puerto version nombre
    PORT_LOGIN:"3000",
    PORT_CRM:"7002",
    PORT_IMAGE:"5000", //puerto empresa,
    PORT_7000:"7000",
    PORT_7001:"7001",

    //Base_api_usuario_login: 'http://138.197.160.240:3000/v1/',
    Base_api_usuario_login: 'http://138.197.160.240:7000/ekosave-api/v1/clients/',
    Base_api_usuairo: 'http://138.197.160.240:3000/ekosave-api/v1/',
    Base_api_usuairo_img: 'http://138.197.160.240:5000/ekosave-api/v1/configuration-image/',
    empresa:'',
    
  }

  

  /* URL_BASE:'http://138.197.160.240',
  service:'1',
  eko_api:'/ekosave-api/v1/',
  v1_api:'/v1/',
  port_request:':7002',
  port_measurer:':7001', */
  
export default config