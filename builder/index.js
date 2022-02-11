const BurguerBuilder = require('./subway/BurgerBuilder')

const burger = (new BurguerBuilder(30))
    .chooseBread('italliano')
    .chooseCheeze('cheddar')
    .addsauces(['parmesao','chiplote'])