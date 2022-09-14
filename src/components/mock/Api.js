
const ItemData =
[{
    id: 1, 
    name: "Malbec", 
    price: 3000,
    img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
},{
    id: 2, 
    name: "Cabernet Sauvignon", 
    price: 2500,
    img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
},{
    id: 3, 
    name: "Pinot Noir", 
    price: 2000,
    img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
},{
    id: 4, 
    name: "Bodega Bianchi", 
    price: 10000,
    img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
}]

export const ProductData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if (condition){
            resolve(ItemData)
        } else {
            reject("error")
        }
    },3000)
})