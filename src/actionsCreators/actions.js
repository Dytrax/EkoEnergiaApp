export const setTipoSolicitud = tipoSolicitud => ({
    type: 'SET_TIPO_SOLICITUD',
    payload: tipoSolicitud,
  });

  export const setContrato = contrato => ({
    type: 'SET_TIPO_CONTRATO',
    payload: contrato,
  });

export const emptySolicitud = () => ({
    type: 'EMPTY_TIPO_SOLICITUD',
    payload: [],
  });

export const setUser = user => ({
    type: 'SET_USER',
    payload: user,
});

export const setMedidor = medidor => ({
  type: 'SET_MEDIDOR',
  payload: medidor,
});
  
  