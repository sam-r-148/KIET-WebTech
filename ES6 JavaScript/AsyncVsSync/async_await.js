// Without async and await, we would have to use .then() to handle the promise returned by fetchData()

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve("Data fetched")
        }, 1000)
    })  
}

// fetchData().then(data => console.log(data))

// ================================================

// await can be only used inside an async function

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve("Data fetched")
        }, 1000)
    })  
}

async function getData(){
    console.log("Fetching Data...")
    const data = await fetchData()
    console.log(data)
}

getData()


// ================================================

// async with try catch

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Data fetched")
            // reject("Error fetching data")
        }, 1000)
    })  
}

async function getData(){
    try {
        console.log("Fetching Data...")
        const data = await fetchData()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
    finally {
        console.log("This will always run")
    }
}

getData()
