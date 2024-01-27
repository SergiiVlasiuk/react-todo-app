const apiUrl = 'https://jsonplaceholder.typicode.com' // Ваш URL API

export const fetchDataFromServer = async () => {
  try {
    const response = await fetch( `${apiUrl}/todos?_limit=5` )
    if ( !response.ok ) {
      throw new Error( 'Network response was not ok' )
    }

    const data = await response.json()
    return data
  } catch ( error ) {
    console.error( 'Error fetching data:', error )
    throw error
  }
}