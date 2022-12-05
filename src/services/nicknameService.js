import * as httpRequest from '~/utils/httpRequest'

export const loadNickname = async(nickname) => {
    try{
        const response = await httpRequest.get('users', {
            params: {
                nickname
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}