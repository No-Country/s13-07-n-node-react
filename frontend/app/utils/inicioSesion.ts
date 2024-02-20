interface LoginData {
    email: string;
    password: string;
}

export async function login(data: LoginData){

    const urlToFetch = `https://spotter-gym.onrender.com/api/v1/clients/login`;
    
    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        

        //if (!response.ok) {
        //    return await response.json()
        //}

        return await response.json();
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}