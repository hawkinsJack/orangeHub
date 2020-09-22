const getProfiles = async () => {
    const response = await fetch('http://localhost:8080/api/profiles')
    const data = await response.json()
    return data
}

export { getProfiles }