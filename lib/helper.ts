export const getUser = async () => {
    try {
        const response = await fetch('/api/users')
        const json = await response.json()
        return json
    }
    catch(e) {
        console.log(e)
    }
    
    
    
}

export async function addUser(formData:any) {
    try{
        const Options = {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        const response = await fetch('http://localhost:3000/api/users', Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error
    }
}