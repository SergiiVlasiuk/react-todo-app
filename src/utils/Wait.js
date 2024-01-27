const Wait = ( data, defaultTimeout = 1000 ) => new Promise( resolve =>
  setTimeout( () => {
    if ( typeof data === 'function' ) {
      return resolve( data() )
    }
    return resolve( data )
  }, defaultTimeout )
)

export default Wait
