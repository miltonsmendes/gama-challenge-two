import { productList } from "./solucao.js";


// //***********************************************************************************************************************************************************************************************
// // RESPOSTA QUESTÃO 1

// let amountStoreStock = 0;

// productList.map(products => {
//     amountStoreStock += products.qtdEstoque
// })

// console.log('Resposta da questão 1: ' + amountStoreStock);

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 2

// let amountFeatureStock = 0; // DÚVIDA SERIA A SOMATORIA DA QUANTIDADE DE ESTOQUE DE CADA ITEM QUE ESTÁ EM DESTAQUE OU SÓ DOS 91 ITENS QUANTOS ESTÃO EM DESTAQUE? 

// productList.map(products => {
//     if (products.emDestaque === "sim") {
//         amountFeatureStock += products.qtdEstoque
//     }
// })

// console.log('Resposta da questão 2: ' + amountFeatureStock);

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 3

// let amountAvailableStock = 0; // DÚVIDA SERIA A SOMATORIA DA QUANTIDADE DE ESTOQUE DE CADA ITEM QUE ESTÁ DISPONÍVEL OU SÓ DOS 91 ITENS QUANTOS ESTÃO DISPONIVEIS? 

// productList.map(products => {
//     if (products.disponivel === "sim") {
//         amountAvailableStock += products.qtdEstoque
//     }
// })

// console.log('Resposta da questão 3: ' + amountAvailableStock);

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 4

// let amountFeatureAndAvaiableStock = 0; // DÚVIDA SERIA A SOMATORIA DA QUANTIDADE DE ESTOQUE DE CADA ITEM QUE ESTÁ DISPONÍVEL E EM DESTAQUE OU SÓ DOS 91 ITENS QUANTOS ESTÃO DISPONIVEIS E EM DESTAQUE? 

// productList.map(products => {
//     if ((products.emDestaque === "sim") && (products.disponivel === "sim")) {
//         amountFeatureAndAvaiableStock += products.qtdEstoque
//     }
// })

// console.log('Resposta da questão 4: ' + amountFeatureAndAvaiableStock);

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 5

// let amountStockValue = 0;

// productList.map(products => {
//     if (products.disponivel === "sim") {
//         amountStockValue += (products.qtdEstoque * products.preco)
//     }
// })

// console.log('Resposta da questão 5: ' + amountStockValue);

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 6

// let arrayPrice = [];

// productList.map(products => {
//     arrayPrice.push(products.preco);
// })
// var mostExpenseve = arrayPrice.reduce(function (a, b) {
//     return Math.max(a, b);
// });
// console.log('Resposta da questão 6: ' + productList[arrayPrice.indexOf(mostExpenseve)].descricao);
// console.log(mostExpenseve)

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 7

// let arrayPriceCheaper = [];

// productList.map(products => {
//     arrayPriceCheaper.push(products.preco);
// })
// var cheaper = arrayPriceCheaper.reduce(function (a, b) {
//     return Math.min(a, b);
// });
// console.log('Resposta da questão 7: ' + productList[arrayPriceCheaper.indexOf(cheaper)].descricao);
// console.log(cheaper)

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 8
// var arrayMostValuesStock = [];
// var stockValue = 0;
// var currentIndexQ8 = 0;
// var indexMostValue = 0;


// productList.map(products => {
//     stockValue = products.preco * products.qtdEstoque;
//     arrayMostValuesStock.push(stockValue);
// })

// const lesserStockValue = arrayMostValuesStock.reduce(function (a, b) {
//     return Math.max(a, b);
// });

// productList.map(products => {
//     currentIndexQ8 = products.preco * products.qtdEstoque;
//     if (currentIndexQ8 === lesserStockValue) {
//         indexMostValue = productList.indexOf(products);
//     }
// })
// console.log(productList[indexMostValue].descricao)

// console.log(lesserStockValue)

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 9

// var arrayLesserValuesStock = [];
// var stockLesserValue = 0;
// var currentIndexQ9 = 0;
// var indexLesserValue = 0;

// productList.map(products => {
//     if (products.qtdEstoque != 0) {
//         stockLesserValue = products.preco * products.qtdEstoque;
//         arrayLesserValuesStock.push(stockLesserValue);
//     }
// })

// const estoqueDeMenorValor = arrayLesserValuesStock.reduce(function (a, b) {
//     return Math.min(a, b);
// });

// productList.map(products => {
//     if(products.qtdEstoque != 0){
//         currentIndexQ9 = products.preco * products.qtdEstoque;
//         if (currentIndexQ9 === estoqueDeMenorValor){
//          indexLesserValue = productList.indexOf(products);
//         }
//     }  
// })
// console.log(productList[indexLesserValue].descricao)

// console.log(estoqueDeMenorValor)


// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 10

// var valueTotalPrices = 0;
// productList.map(products => {
//     valueTotalPrices += products.preco * products.qtdEstoque; // DÚVIDA AQUI, É VEZES A QUANTIDADE EM ESTOQUE ou só o somatório dos preços de cada produto dividido pelo total de tipos de produtos?
// })

// var avarageTicket = valueTotalPrices / productList.length;

// console.log(avarageTicket)

// //***********************************************************************************************************************************************************************************************
// //RESPOSTA QUESTÃO 11

// var codDept = 0;
// var soma = 0;
// var arrayDpt = [];
// var arrayNomeDept = [];

// var itemLista = {
//     nomeDepto: '',
//     somatoriaItens: 0
// };

// productList.map(products => {
//     if (products.departamento.idDepto != codDept) {
//         arrayDpt.push(products.departamento.idDepto)
//         arrayNomeDept.push(products.departamento.nomeDepto)
//     }
//     codDept = products.departamento.idDepto;
// })

// arrayNomeDept.map(dpt => {
//     productList.map(products => {
//         if (dpt == products.departamento.nomeDepto){
//             soma += products.qtdEstoque
//         }
//     })
//     itemLista.nomeDepto = dpt;
//     itemLista.somatoriaItens = soma;
//     //console.log(itemLista)
//     console.log(itemLista)
//     soma=0;
//     itemLista.nomeDepto ="";
//     itemLista.somatoriaItens=0;
// })


// //***********************************************************************************************************************************************************************************************

