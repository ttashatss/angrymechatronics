export const getUser = async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const json = await response.json()

    return json
}

export async function addUser(formData) {
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