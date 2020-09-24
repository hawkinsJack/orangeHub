const CreateProfile = async ({name, location, year, bio, role}) => {

    const postObj = {
        name,
        location,
        year,
        bio,
        role
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
    }

    const response = await fetch('http://localhost:8080/api/profiles', configObj);
    const jsonData = await response.json();

    return jsonData;
};

export default CreateProfile;