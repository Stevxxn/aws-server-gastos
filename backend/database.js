const mongoose=require('mongoose');
const URI='mongodb+srv://stevenbautista717:1234@cluster0.sq5crqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI)
.then(db=> console.log('Database connected'))
.catch(err => console.error(err));
module.exports=mongoose;
