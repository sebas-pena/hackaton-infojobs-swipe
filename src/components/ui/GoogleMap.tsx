interface IGoogleMap {
  address: string
  width?: number | string
  height?: number | string
}

export const GoogleMap = ({
  address,
  width = '100%',
  height = 200
}: IGoogleMap) => {
  const googleMapsHostUrl = 'https://maps.google.com/maps'

  const query = address + ' ' + '+(' + 'mapa' + ')'
  const urlParams = {
    width,
    height,
    hl: 'es',
    q: query,
    t: 'p',
    z: 14,
    ie: 'UTF8',
    iwloc: 'B',
    output: 'embed'
  }

  let paramString = ''
  for (const key in urlParams) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    paramString += key + '=' + urlParams[key] + '&'
  }

  const fullUrl = googleMapsHostUrl + '?' + encodeURI(paramString.replace(/.$/, ''))

  return (
    <iframe
      key={address}
      width='520'
      height='400'
      src={fullUrl}
    />
  )
}
