const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/biblioteca2',{
    useUnifiedTopology:true,
    useNewUrlParser:true
});
const librosSchema=new mongoose.Schema({

    titulo:String,
    autor:String
},{collection:'libros'});
const Libro=mongoose.model('Libro',librosSchema);
module.exports=Libro;
















