const Medidor = (state = {} , action) => {
    switch (action.type) {
        case 'SET_MEDIDOR':
            return action.payload 
    default:
        return state;
    }
  };

  export default Medidor;