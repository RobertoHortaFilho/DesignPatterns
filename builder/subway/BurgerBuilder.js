const Burger = require('./Burger')
class BurguerBuilder {
    constructor(size){
        this.size = size
    }

    chooseBread(bread){
        this.bread = bread
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
        //console.log(this) //o this nesse caso é o proprio BurguerBuilder com todos os seus atributos passados como objeto
        return new Burger(this);
    }
    
}

module.exports = BurguerBuilder