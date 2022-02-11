
class Burger{
    constructor(builder){
        this.size = builder.size;
        this.bread = builder.bread;
        this.cheeze = builder.cheeze;
        this.sauces = builder.sauces || false;
        this.salads = builder.salads || false;
    }
}

const nome = "roberto"
export default nome