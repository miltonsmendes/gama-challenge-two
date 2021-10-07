import { productList } from "../data/solucao.js";


// //***********************************************************************************************************************************************************************************************

// // RESPOSTA QUESTÃO 1

let amountStoreStock = 0;

    productList.map(products => {
        amountStoreStock += products.qtdEstoque
    })
    
   console.log('Resposta da questão 1: A quantidade total de itens em estoque é de ' + amountStoreStock + ' unidades.')
   
   const showAnswer1 = document.getElementById('answer1');
   showAnswer1.innerHTML = 'Resposta da questão 1: A quantidade total de itens em estoque é de ' + amountStoreStock + ' unidades.';

// //***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 2

let amountFeatureStock = 0;

productList.map(products => {
    if (products.emDestaque === "sim") {
        amountFeatureStock += products.qtdEstoque
    }
})

console.log('Resposta da questão 2: A quantidade total de itens em destaque é de ' + amountFeatureStock + ' unidades.');

const showAnswer2 = document.getElementById('answer2');
showAnswer2.innerHTML = 'Resposta da questão 2: A quantidade total de itens em destaque é de ' + amountFeatureStock + ' unidades.';

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 3

let amountAvailableStock = 0; 

productList.map(products => {
    if (products.disponivel === "sim") {
        amountAvailableStock += products.qtdEstoque
    }
})

console.log('Resposta da questão 3: A quantidade total de itens disponíveis é de ' + amountAvailableStock + ' unidades.');

const showAnswer3 = document.getElementById('answer3');
showAnswer3.innerHTML = 'Resposta da questão 3: A quantidade total de itens disponíveis é de ' + amountAvailableStock + ' unidades.';

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 4

let amountFeatureAndAvaiableStock = 0;

productList.map(products => {
    if ((products.emDestaque === "sim") && (products.disponivel === "sim")) {
        amountFeatureAndAvaiableStock += products.qtdEstoque
    }
})

console.log('Resposta da questão 4: A quantidade de itens disponíveis e em destaque é de ' + amountFeatureAndAvaiableStock + ' unidades.');

const showAnswer4 = document.getElementById('answer4');
showAnswer4.innerHTML = 'Resposta da questão 4: A quantidade de itens disponíveis e em destaque é de ' + amountFeatureAndAvaiableStock + ' unidades.';

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 5

let amountStockValue = 0;

productList.map(products => {
    if (products.disponivel === "sim") {
        amountStockValue += (products.qtdEstoque * products.preco)
    }
})

let formattedAmountStockValue = amountStockValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

console.log('Resposta da questão 5: O Valor total do inventário da empresa é de ' + formattedAmountStockValue);

const showAnswer5 = document.getElementById('answer5');
showAnswer5.innerHTML = 'Resposta da questão 5: O Valor total do inventário da empresa é de ' + formattedAmountStockValue;

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 6

let arrayPrice = [];

productList.map(products => {
    arrayPrice.push(products.preco);
});

const mostExpenseve = arrayPrice.reduce(function (a, b) {
    return Math.max(a, b);
});

const formattedMostExpenseve = mostExpenseve.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log(
    'Resposta da questão 6: O produto mais caro da loja é o ' 
    + productList[arrayPrice.indexOf(mostExpenseve)].descricao 
    + ', percentece ao departamento ' 
    + productList[arrayPrice.indexOf(mostExpenseve)].departamento.nomeDepto 
    + ' e custa ' 
    + formattedMostExpenseve
);

const showAnswer6 = document.getElementById('answer6');
showAnswer6.innerHTML = 'Resposta da questão 6: O produto mais caro da loja é o ' 
    + productList[arrayPrice.indexOf(mostExpenseve)].descricao 
    + ', percentece ao departamento ' 
    + productList[arrayPrice.indexOf(mostExpenseve)].departamento.nomeDepto 
    + ' e custa ' 
    + formattedMostExpenseve;

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 7

let arrayPriceCheaper = [];

productList.map(products => {
    arrayPriceCheaper.push(products.preco);
})
const cheaperProduct = arrayPriceCheaper.reduce(function (a, b) {
    return Math.min(a, b);
});

const formattedCheaperProduct = cheaperProduct.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

console.log(
    'Resposta da questão 7: O produto mais barato da loja é o ' 
    + productList[arrayPriceCheaper.indexOf(cheaperProduct)].descricao 
    + ', percentece ao departamento ' 
    + productList[arrayPriceCheaper.indexOf(cheaperProduct)].departamento.nomeDepto 
    + ' e custa ' 
    + formattedCheaperProduct 
);

const showAnswer7 = document.getElementById('answer7');
showAnswer7.innerHTML = 'Resposta da questão 7: O produto mais barato da loja é o ' 
    + productList[arrayPriceCheaper.indexOf(cheaperProduct)].descricao 
    + ', percentece ao departamento ' 
    + productList[arrayPriceCheaper.indexOf(cheaperProduct)].departamento.nomeDepto 
    + ' e custa ' 
    + formattedCheaperProduct;


//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 8

var arrayMostValuesStock = [];
var stockValue = 0;
var currentIndexQ8 = 0;
var indexMostValuable = 0;

productList.map(products => {
    stockValue = products.preco * products.qtdEstoque;
    arrayMostValuesStock.push(stockValue);
})

const mostValuableStock = arrayMostValuesStock.reduce(function (a, b) {
    return Math.max(a, b);
});

productList.map(products => {
    currentIndexQ8 = products.preco * products.qtdEstoque;
    if (currentIndexQ8 === mostValuableStock) {
        indexMostValuable = productList.indexOf(products);
    }
})

const formattedMostValuableStock = mostValuableStock.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log(
    'Resposta da questão 8: O produto de estoque mais valioso é o ' 
    + productList[indexMostValuable].descricao 
    + ' e possui um estoque com um valor de ' 
    + formattedMostValuableStock 
);

const showAnswer8 = document.getElementById('answer8');
showAnswer8.innerHTML = 'Resposta da questão 8: O produto de estoque mais valioso é o ' 
    + productList[indexMostValuable].descricao 
    + ' e possui um estoque com um valor de ' 
    + formattedMostValuableStock;


//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 9

var arrayLesserValuesStock = [];
var stockLesserValue = 0;
var currentIndexQ9 = 0;
var indexLesserValue = 0;

productList.map(products => {
    if (products.qtdEstoque != 0) {
        stockLesserValue = products.preco * products.qtdEstoque;
        arrayLesserValuesStock.push(stockLesserValue);
    }
})

const lessValuableStock = arrayLesserValuesStock.reduce(function (a, b) {
    return Math.min(a, b);
});

productList.map(products => {
    if(products.qtdEstoque != 0){
        currentIndexQ9 = products.preco * products.qtdEstoque;
        if (currentIndexQ9 === lessValuableStock){
         indexLesserValue = productList.indexOf(products);
        }
    }  
})

const formattedLessValuableStock = lessValuableStock.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log(
    'Resposta da questão 9: O produto de estoque menos valioso é ' 
    + productList[indexLesserValue].descricao 
    + ' e possui um estoque com um valor de ' 
    + formattedLessValuableStock 
);

const showAnswer9 = document.getElementById('answer9');
showAnswer9.innerHTML = 'Resposta da questão 9: O produto de estoque menos valioso é ' 
+ productList[indexLesserValue].descricao 
+ ' e possui um estoque com um valor de ' 
+ formattedLessValuableStock;

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 10

var valueTotalPrices = 0;
productList.map(products => {
    valueTotalPrices += products.preco * products.qtdEstoque;
})

var avarageTicket = valueTotalPrices / productList.length;

const formattedAvarageTicket = avarageTicket.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log('Resposta da questão 10: O valor do ticket médio dos produtos da empresa é '+ formattedAvarageTicket);

const showAnswer10 = document.getElementById('answer10');
showAnswer10.innerHTML = 'Resposta da questão 10: O valor do ticket médio dos produtos da empresa é '+ formattedAvarageTicket

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 11

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
//     console.log(itemLista)
//     soma=0;
//     itemLista.nomeDepto ="";
//     itemLista.somatoriaItens=0;
// })

// const showAnswer11 = document.getElementById('answer11');
// showAnswer11.innerHTML = itemLista.nomeDepto;

// //***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 12

// //***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 13

// //***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 14

// //***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 15

// //***********************************************************************************************************************************************************************************************
