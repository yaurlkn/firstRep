function getNumberAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.floor(Math.random() * 100)
            if (number < 80) {
                resolve(number)
            } else {
                reject('number < 80')
            }
        }, 1000)
    })
}

getNumberAsync()
    .then(result => {
        console.log("ok!", result)
    })
    .catch(error =>{
        console.log(error)
    })       