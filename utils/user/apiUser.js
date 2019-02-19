import Config from '../../config/config'

class apiUser{

  async getAuth(correo,contrasena,sub){
      try{
          const query = await fetch(Config.Base_api_usuario_login+'login' ,{  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'usuario@avofruit.com',//correo
                password: 'Hola@321',
                subdomain:'ekoenergia' 
                //agua es 1 energia 2
            })
          })
          let responseJson = await query.json()
          return [ query.status,responseJson]

      }catch(error){
        console.error(error)
      } 
  }

  async recover(correo){

      
      try{
          const query = await fetch(Config.Base_api_usuairo+'leadis/recover-pass-mobile' ,{  
                                    method: 'POST',
                                    headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        email: correo,//'fabiomayorgad@hotmail.com',
                                        service: Config.service,
                                        //agua es 1 energia 2
                                    })
                                  })
          let responseJson = await query.json()
          
          return [ query.status,responseJson]

      }catch(error){
        console.error(error)
      } 
  }///ekosave-api/v1/configuration-image/1:id_empresa
  
  
  async imgUser(company){
    try{
        const query = await fetch(Config.Base_api_usuairo_img+'configuration-image/'+company ,{  
                                  method: 'GET',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                  })
                                })
        let responseJson = await query.json()
        
        return [ query.status,responseJson]

    }catch(error){
      console.error(error)
    } 
}
}

export default new apiUser()