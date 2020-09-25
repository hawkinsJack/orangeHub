const LoginAdmin = async ({email, password}) => {

    const postObj = {
        email,
        password
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObj)
    }

    const response = await fetch('http://localhost:8080/api/login', configObj);
    const jsonData = await response.json();

    return jsonData;
};

export default LoginAdmin;