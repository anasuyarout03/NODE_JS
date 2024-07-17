let express = require('express');
let productRouter = express.Router();
let { getData } = require('./dbController');

/* let Products = [
    {
        "id":1,
        "product_name": "Girls top",
        "category": "Fashion",
        "price": 2000,
        "size": "small",
        "image": "https://i.ibb.co/fHj5Tgc/download.jpg",
        "color": "Maroon",
        "brand": "Gucci"
    },
    {
        "id":2,
        "product_name": "Boys dress",
        "category": "Fashion",
        "price": 200,
        "size": "medium",
        "image": "https://i.ibb.co/tsXyK5Y/images.jpg",
        "color": "Blue",
        "brand": "Zudio"
    },
    {
        "id":3,
        "product_name": "Jeans",
        "category": "Fashion",
        "price": 1200,
        "size": "large",
        "image": "https://i.ibb.co/tCqWYP6/mj2.jpg",
        "color": "red",
        "brand": "spykar"
    },
    {
        "id":4,
        "product_name": "Washing Machine",
        "category": "Electronics",
        "price": 7000,
        "image": "https://i.ibb.co/8NQ7RpM/w2.jpg",
        "color": "White",
        "company": "LG"
    },
    {
        "id":5,
        "product_name": "Washing Machine",
        "category": "Electronics",
        "price": 8000,
        "image": "https://i.ibb.co/HdMwcHJ/w1.jpg",
        "color": "White",
        "company": "LG"
    }
] */

function router(menu){

    productRouter.route('/').get(async(req,res) => {
        let query = {}
        let data = await getData('products',query)
        // res.send("Hii From Products Express Route")
        // res.render('products',{title:'Products Page',data:Products,menu})
        res.render('products',{title:'Products Page',data:data,menu})
    })
    
    productRouter.route('/list/:id')
        .get(async(req,res) => {
            let id = req.params.id;
            let query = {"category_id":Number(id)};
            let products = await getData('products',query)
            res.render('products',{title:'Products Page',data:products,menu})
        })

    productRouter.route('/details').get((req,res) => {
        res.send("Hii From Products Details Express Route")
    })

    return productRouter
}


module.exports = router;
