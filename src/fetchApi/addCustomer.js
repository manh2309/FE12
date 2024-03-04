// export default function addCustomer(customer) {
//     return new Promise((resolve, reject) => {
//         const url = "http://localhost:8080/customers/add"
//         return fetch(url,
//             { method: "POST", body: JSON.stringify(customer) },
//             console.log(customer, "customer")
//         )
//             .then(response => response.json())
//             .then((res) => {
//                 resolve(res.content);
//                 console.log(res.content, "api add")

//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }

export default function addCustomer(customer) {
    return new Promise((resolve, reject) => {
        const url = "http://localhost:8080/customers/add";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                resolve(data.content);
                console.log(data.content, "api add");
            })
            .catch(error => {
                reject(error);
            });
    });
}