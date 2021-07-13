
export const getElements = async() => {

  const datas = await Promise.all([1,2,3,4,5,6].map(id => fetch(`https://rickandmortyapi.com/api/location?page=${id}`).then(resp => resp.json())))

  function getLocations(datas) {
    let locations = [];
    let NLocations = [];
    for (let index = 0; index < datas.length; index++) {
      let loca = datas[index].results
      locations.push(loca)
    }
    for (let i = 0; i < locations.length; i++) {
      NLocations = NLocations.concat(locations[i])
    }

    return NLocations
  }
  let value = getLocations(datas)

  return value
}

export const getResidents = async(queryTerm) => {

  const url = `https://rickandmortyapi.com/api/location/${queryTerm}`
  const prom = await fetch(url).then(res => res.json())
  const residents = prom

return residents
}

export const getResident = async(urlPer) => {
  
  const promesa = await fetch(urlPer).then(response => response.json())
  const resident = promesa

return resident
}

