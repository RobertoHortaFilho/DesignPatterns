const Burger = require('./Burger')
class BurguerBuilder {
    constructor(size){
        this.size = size
    }

    chooseBread(bread){
        this.bread = bread
        console.log(this)
        return this;
    }

    chooseCheeze(cheeze){
        this.cheeze = cheeze
        return this
    }

    addSauces(sauces = []){
        this.sauces = sauces
        return this
    }

    addSalads(salads = []){
        this.salads = salads
        return this
    }

    build(){
        return new Burger(this);
    }
    
}

module.exports = BurguerBuilder