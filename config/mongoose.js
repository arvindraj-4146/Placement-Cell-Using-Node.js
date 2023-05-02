// const mongoose = require('mongoose');
// async function main(){
//     await mongoose.connect('mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/placementcell?retryWrites=true&w=majority');
//     console.log("connection Successfull !! ");
// }
// main().catch(error =>console.log("connection not successfull !!"));
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = ("mongodb+srv://arvindraj4146:BOw7X1roFROlp1pJ@cluster0.vxybwqw.mongodb.net/?retryWrites=true&w=majoritynp");
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected');
}
