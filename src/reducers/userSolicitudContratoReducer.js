const Contrato = (state = {} , action) => {
    switch (action.type) {
        case 'SET_TIPO_CONTRATO':
            return action.payload 
    default:
        return state;
    }
  };

  export default Contrato;