import { productList } from "../data/solucao.js";


//***********************************************************************************************************************************************************************************************

// RESPOSTA QUESTÃO 1

let amountStoreStock = 0;

productList.map(products => {
    amountStoreStock += products.qtdEstoque
})

console.log('Resposta da questão 1: A quantidade total de itens em estoque é de ' + amountStoreStock + ' unidades.')

const showAnswer1 = document.getElementById('answer1');
showAnswer1.innerHTML = 'Resposta da questão 1: A quantidade total de itens em estoque é de ' + amountStoreStock + ' unidades.';

//***********************************************************************************************************************************************************************************************

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

let formattedAmountStockValue = amountStockValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

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

const formattedMostExpenseve = mostExpenseve.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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

const formattedCheaperProduct = cheaperProduct.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

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

const formattedMostValuableStock = mostValuableStock.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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
    if (products.qtdEstoque != 0) {
        currentIndexQ9 = products.preco * products.qtdEstoque;
        if (currentIndexQ9 === lessValuableStock) {
            indexLesserValue = productList.indexOf(products);
        }
    }
})

const formattedLessValuableStock = lessValuableStock.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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

const formattedAvarageTicket = avarageTicket.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

console.log('Resposta da questão 10: O valor do ticket médio dos produtos da empresa é ' + formattedAvarageTicket);

const showAnswer10 = document.getElementById('answer10');
showAnswer10.innerHTML = 'Resposta da questão 10: O valor do ticket médio dos produtos da empresa é ' + formattedAvarageTicket

//***********************************************************************************************************************************************************************************************

//RESPOSTA QUESTÃO 11

var sumItemsDpts = [
    {
        nomeDepto: 'Adaptadores',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Ferramentas',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Eletronicos',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Casa',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Acessorios',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Moveis',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Tablets e Celulares',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Games',
        somatoriaItens: 0
    },
    {
        nomeDepto: 'Informatica',
        somatoriaItens: 0
    },
]

var arrayDpt = [];
var arrayNomeDept = [];

var codDept = 0;
var soma = 0;
var indexQ11 = 0;

productList.map(products => {
    if (products.departamento.idDepto != codDept) {
        arrayDpt.push(products.departamento.idDepto)
        arrayNomeDept.push(products.departamento.nomeDepto)
    }
    codDept = products.departamento.idDepto;
})

arrayNomeDept.map(dpt => {
    productList.map(products => {
        if (dpt == products.departamento.nomeDepto) {
            soma += products.qtdEstoque
        }
    })
    sumItemsDpts[indexQ11].nomeDepto = dpt;
    sumItemsDpts[indexQ11].somatoriaItens = soma;
    soma = 0;
    indexQ11++;
})



console.log('Resposta da questão 11: O Somatória de itens por departamento é: ');
console.log(sumItemsDpts);

const showAnswer11 = document.getElementById('answer11');
showAnswer11.innerHTML = 'Resposta da questão 11: O Somatória de itens por departamento é: ' + JSON.stringify(sumItemsDpts);


//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 12

var sumStockValueDpt = [
    {
        departamento: 'Departamento',
        valorInventario: 0
    },
    {
        departamento: 'Adaptadores',
        valorInventario: 0
    },
    {
        departamento: 'Ferramentas',
        valorInventario: 0
    },
    {
        departamento: 'Eletronicos',
        valorInventario: 0
    },
    {
        departamento: 'Casa',
        valorInventario: 0
    },
    {
        departamento: 'Acessorios',
        valorInventario: 0
    },
    {
        departamento: 'Moveis',
        valorInventario: 0
    },
    {
        departamento: 'Tablets e Celulares',
        valorInventario: 0
    },
    {
        departamento: 'Games',
        valorInventario: 0
    },
    {
        departamento: 'Informatica',
        valorInventario: 0
    },
]

productList.map(products => {
    for (let i = 1; sumStockValueDpt.length + 1 > i; i++) {
        if (products.departamento.idDepto === i) {
            sumStockValueDpt[i].valorInventario += (products.preco * products.qtdEstoque)
        }
    }
})

sumStockValueDpt.splice(0, 1);

console.log('Resposta da questão 12: O Valor total do inventário por departamento é: ');
console.log(sumStockValueDpt)

const showAnswer12 = document.getElementById('answer12');
showAnswer12.innerHTML = 'Resposta da questão 12: O Valor total do inventário por departamento é: ' + JSON.stringify(sumStockValueDpt);

//***********************************************************************************************************************************************************************************************
// RESPOSTA QUESTÃO 13

var avarageTicketDepartment = [
    {
        idDpt: 1,
        departamento: 'Adaptadores',
        ticketMedio: 0
    },
    {
        idDpt: 2,
        departamento: 'Ferramentas',
        ticketMedio: 0
    },
    {
        idDpt: 3,
        departamento: 'Eletronicos',
        ticketMedio: 0
    },
    {
        idDpt: 4,
        departamento: 'Casa',
        ticketMedio: 0
    },
    {
        idDpt: 5,
        departamento: 'Acessorios',
        ticketMedio: 0
    },
    {
        idDpt: 6,
        departamento: 'Moveis',
        ticketMedio: 0
    },
    {
        idDpt: 7,
        departamento: 'Tablets e Celulares',
        ticketMedio: 0
    },
    {
        idDpt: 8,
        departamento: 'Games',
        ticketMedio: 0
    },
    {
        idDpt: 9,
        departamento: 'Informatica',
        ticketMedio: 0
    }
]

for (let i = 0; avarageTicketDepartment.length > i; i++) {
    avarageTicketDepartment[i].ticketMedio = sumStockValueDpt[i].valorInventario / (sumItemsDpts[i].somatoriaItens);
 }

console.log('Resposta da questão 13: O Ticket médio por departamento é: ')
console.log(avarageTicketDepartment);

const showAnswer13 = document.getElementById('answer13');
showAnswer13.innerHTML = 'Resposta da questão 13: O Ticket médio por departamento é: ' + JSON.stringify(avarageTicketDepartment);


//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 14

const arrayStockValues = [];
const arrayDptName = [];

sumStockValueDpt.map(dpt => {
    arrayStockValues.push(dpt.valorInventario);
    arrayDptName.push(dpt.departamento);
});

const mostDepartmentValue = arrayStockValues.reduce(function (a, b) {
    return Math.max(a, b)
})

const formattedMostValueDpt = sumStockValueDpt[arrayStockValues.indexOf(mostDepartmentValue)].valorInventario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

console.log('Resposta da questão 14: O departamento mais valioso é o ' + sumStockValueDpt[arrayStockValues.indexOf(mostDepartmentValue)].departamento + ' cujo valor é ' + formattedMostValueDpt)

const showAnswer14 = document.getElementById('answer14');

showAnswer14.innerHTML = 'Resposta da questão 14: O departamento mais valioso é o ' 
    + sumStockValueDpt[arrayStockValues.indexOf(mostDepartmentValue)].departamento 
    + ' cujo valor é ' 
    + formattedMostValueDpt

//***********************************************************************************************************************************************************************************************
//RESPOSTA QUESTÃO 15

const lesserDepartmentValue = arrayStockValues.reduce(function (a, b) {
    return Math.min(a, b)
})

const formattedLesserValueDpt = sumStockValueDpt[arrayStockValues.indexOf(lesserDepartmentValue)].valorInventario.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

console.log('Resposta da questão 15: O departamento mais valioso é o ' + sumStockValueDpt[arrayStockValues.indexOf(lesserDepartmentValue)].departamento + ' cujo valor é ' + formattedLesserValueDpt)

const showAnswer15 = document.getElementById('answer15');

showAnswer15.innerHTML = 'Resposta da questão 15: O departamento menos valioso é o ' 
    + sumStockValueDpt[arrayStockValues.indexOf(lesserDepartmentValue)].departamento 
    + ' cujo valor é ' 
    + formattedLesserValueDpt

//***********************************************************************************************************************************************************************************************
