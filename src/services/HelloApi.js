import axios from "axios";

// Set the base for the API call
let base = 'api'

// Provide a function
export default {
    // Title the function getHelloMessage
    getHelloMessage() {
        // This is an axios get call
        return axios.get(base).then(response => {
            return response.data
        })
    }
}