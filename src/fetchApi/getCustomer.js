export default function getCustomers(){
    return new Promise((resolve,reject) => {
        const url = "http://localhost:8080/customers/get"
        return fetch(url,{method: "GET"})
        .then(response => response.json())
    .then((res) => {
        resolve(res.content);
    
    })
    .catch((error) => {
        reject(error)
    })
})
}

