
const ItemData =
    [{
        id: 1,
        name: "Malbec",
        price: 3000,
        stock: 5,
        category: "malbec",
        img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
    }, {
        id: 2,
        name: "Cabernet Sauvignon",
        price: 2500,
        category: "cavernet",
        stock: 5,
        img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
    }, {

        img: "https://luigiboscaar.vteximg.com.br/arquivos/ids/157139-650-650/Generico_LB_CabernetSauvignon_1_.png"
    }, {
        id: 3,
        name: "Pinot Noir",
        price: 2000,
        category: "pinot",
        stock: 5,
        img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
    }, {

        img: "https://www.espaciovino.com.ar/media/default/0001/57/thumb_56014_default_big.jpeg"
    }, {
        id: 4,
        name: "Bodega Bianchi",
        price: 10000,
        stock: 5,
        category: "cavernet",
        img: "https://ardiaprod.vtexassets.com/arquivos/ids/187254/Vino-Tinto-Kadabra-Cabernet-Sauvignon-750-Ml-_1.jpg"
    }, {

        img: "https://www.saboresdeargentina.com/wp-content/uploads/2021/08/Famiglia-Corte-Unico-2020-682x1024.jpg"
    }]

export const data = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(ItemData)
        } else {
            reject("error")
        }
    }, 3000)
})