export const CustomFetch = (products) => {

    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(products) 
        }, 5000)
    })
}




