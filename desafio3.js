class  ProductManager{
    constructor(){
        this.products = []; 
        this.path = './database.txt'
    }

    getProducts(){ 
        console.log(products)
        return this.products; 
    } 

    addProducts(title, description, price, thumbnail, code, stock){
        let newId
        if(this.products.length ==0){
            newId=1
        }else {
            newId = this.products [this.products.lenght-1].id+1
        }
        const newProduct = {
            id: newId, 
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock}
        this.products.push(newProduct)
    }

    getProductById(idProducts){ 
        const products = this.products.find(elm => elm.id === idProducts);
        if (!products){
            console.log("Not found");
        } else{
            console.log (products)
            return products;

        }
    }
}


module.exports = new ProductManager(); 