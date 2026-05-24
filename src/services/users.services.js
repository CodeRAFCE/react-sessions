export const getUser = async () => {
    try {
        const response = await fetch('https://api.github.com/users/coderafce')
        const data = await response.json() 

        return data
    } catch (error) {
        console.log(error)
    }
}