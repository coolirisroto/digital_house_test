import axios from 'axios'
class AxiosInstance {
    client;
    constructor(){
        this.client = axios.create({
            baseURL: 'https://6222994f666291106a29f999.mockapi.io/api/v1/'
        })
    }
    getInstance(){
        return this.client
    }
}
const instance = new AxiosInstance()
export default instance;
