const BASE_URL = "http://localhost:8000/"
// const BASE_URL = "http://localhost:8000/"

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,  
});

const submitLogin = (name="",password="") => {
    return new Promise((resolve, reject) => {
        instance.get(`login?name=${name}&password=${password}`)
            .then(response => {
                resolve(response.data)
                localStorage.setItem("@token", response.data.token)
            })
            .catch(error => {
                reject(error);
            })
    })
} 
const newUserRegister = (param) => {
    return new Promise((resolve, reject) => {
        instance.post("register", param)
            .then(response => {
                alert("Successfully Sign Up")
                resolve(response.data)
            })
            .catch(error => {
                reject(error);
            })
    })
}

const getRatesList = () => {
    return new Promise((resolve,reject)=>{
        instance.get("rates/last")
            .then(response=> resolve(response.data))
            .then(console.log(data))
            .catch(error=> {
            reject(error);
            })
        })        
}