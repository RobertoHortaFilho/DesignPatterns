const BurguerBuilder = require('./subway/BurgerBuilder')

const burger = (new BurguerBuilder(30))
    .chooseBread('italliano')
    .chooseCheeze('cheddar')
    .addSauces(['parmesao','chiplote'])
    .build()

console.log(burger.typeOf)
console.log(burger)

/* 
    Nesse caso o Builder ele constroe um hamburguer e retorna um objeto do tipo Burger 
    o cliente nao encosta na classe burguer momento nenhum usamos um builder e por meio de funçoes(nao construtores)
    passamos o que queremos no nosso hamburguer
*/