import CONFIG from '../../config/config'

const URL_LOGIN = `${CONFIG.URL_BASE}:${CONFIG.PORT_7000}/${CONFIG.VERSION_API_EKOSAVE}/clients/login`
const URL_PASSWORD_RECOVER = `${CONFIG.URL_BASE}:${CONFIG.PORT_LOGIN}/${CONFIG.VERSION_API_EKOSAVE}/leadis/recover-pass`
const URL_IMAGE =`${CONFIG.URL_BASE}:${CONFIG.PORT_IMAGE}/${CONFIG.VERSION_API_EKOSAVE}/configuration-image/`

class apiUser{

  async getAuth(email,password,sub){
      try{
          const query = await fetch(URL_LOGIN,{  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                companyId: 1,
                email: email,//correo
                password: password,
                
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
          const query = await fetch( URL_PASSWORD_RECOVER,{  
                                    method: 'POST',
                                    headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        email: correo,//'fabiomayorgad@hotmail.com',
                                        service: '1',
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
        const query = await fetch(URL_IMAGE+company ,{  
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