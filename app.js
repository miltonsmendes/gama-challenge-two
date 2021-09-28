import { productList } from "./database.js";


//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 1

// let amountStoreStock = 0;

// productList.map(products => {
//     amountStoreStock += products.qtdEstoque
// })

// console.log(amountStoreStock);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 2

// let amountFeatureStock = 0;

// productList.map(products => {
//     if(products.emDestaque === "sim"){
//         amountFeatureStock += products.qtdEstoque
//     }
// })

// console.log(amountFeatureStock);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 3

// let amountAvailableStock = 0;

// productList.map(products => {
//     if(products.disponivel === "sim"){
//         amountAvailableStock += products.qtdEstoque
//     }
// })

// console.log(amountAvailableStock);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 4

// let amountFeatureAndAvaiableStock = 0;

// productList.map(products => {
//     if((products.emDestaque === "sim") && (products.disponivel === "sim")) {
//         amountFeatureAndAvaiableStock += products.qtdEstoque
//     }
// })

// console.log(amountFeatureAndAvaiableStock);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 5

// let amountStockValue = 0;

// productList.map(products => {
//     if(products.disponivel === "sim") {
//         amountStockValue += (products.qtdEstoque * products.preco)
//     }
// })

// console.log(amountStockValue);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 6
// let arrayPrice = [];

// productList.map(products => {
//     arrayPrice.push(products.preco);
// })
// var mostExpenseve = arrayPrice.reduce(function (a, b) {
//     return Math.max(a, b);
// });
// console.log(productList[arrayPrice.indexOf(mostExpenseve)].descricao);
// console.log(mostExpenseve)

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 7
// let arrayPrice = [];

// productList.map(products => {
//     arrayPrice.push(products.preco);
// })
// var cheaper = arrayPrice.reduce(function (a, b) {
//     return Math.min(a, b);
// });
// console.log(productList[arrayPrice.indexOf(cheaper)].descricao);
// console.log(cheaper)

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 8
// let arrayStock = [];

// productList.map(products => {
//     arrayStock.push(products.qtdEstoque);
// })
// var mostStockedProduct = arrayStock.reduce(function (a, b) {
//     return Math.max(a, b);
// });

// const amountMostValueStock = mostStockedProduct * parseInt(productList[arrayStock.indexOf(mostStockedProduct)].preco);

// console.log(productList[arrayStock.indexOf(mostStockedProduct)].descricao);
// console.log(amountMostValueStock);

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 9
// let arrayStock = [];

// productList.map(products => {
//     arrayStock.push(products.qtdEstoque);
// })
// var lessStockedProduct = arrayStock.reduce(function (a, b) {
//     return Math.min(a, b);
// });

// const amountLessValuableStock = lessStockedProduct * parseInt(productList[arrayStock.indexOf(lessStockedProduct)].preco);

// console.log(productList[arrayStock.indexOf(lessStockedProduct)].descricao);
// console.log(amountLessValuableStock);




//***********************************************************************************************************************************************************************************************
// EXTRA

//RETORNA UM ITEM DE UMA PESQUISA//
// const item = productList.filter(productList => productList.descricao === NomeDoProduto)
//     console.log(item)