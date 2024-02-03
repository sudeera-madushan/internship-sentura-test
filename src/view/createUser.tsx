/**
 * author : Sudeera Madushan
 * date : 2/3/2024
 * project : internship-sentura-test
 */
import axios from "axios";

const CreateUser = ():JSX.Element => {
    const API_URL = 'https://8ea71269743349ec9437d28d1cd0278f.weavy.io';
    const API_KEY = 'wys_adTKKp1VrXPVQGp1x5rgd16Rgw9f7A3e3HKF';
    const userData = {
        uid: 'user-3',
        name: 'Sudeera',
        directory: 'test'
    };

    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    };




    const createUser= () => {
        axios.post(API_URL+"/api/users", userData, axiosConfig)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const getAllUser= () => {
        axios.get(API_URL+"/api/users", axiosConfig)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <h1>
            <button onClick={createUser}>Create</button>
            <button onClick={getAllUser}>Get All</button>
        </h1>
    )
}
export default CreateUser;
