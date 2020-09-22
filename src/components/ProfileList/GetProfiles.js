const getProfiles = () => {
    fetch('http://localhost:8080/api/profiles')
    .then((response) => {resturn response.json()})
    .then(data => {this.setState()})
}