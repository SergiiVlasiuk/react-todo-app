export default function ( storageName, defaultValue = '' ) {
  return () => {
    const data = window.localStorage.getItem( storageName )
    if ( data ) {
      return JSON.parse( data )
    } else {
      window.localStorage.setItem( storageName, defaultValue )
    }
    return defaultValue
  }
}
