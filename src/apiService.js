import axios from "axios"

var ApiService = {
    fetchCars : async () => {
        try {
            return (await axios.get('http://localhost:3000/api/cars')).data;
        }catch(e) {
            throw(e); 
        }
    }
}
export default ApiService;