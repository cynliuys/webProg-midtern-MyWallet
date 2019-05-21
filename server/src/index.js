import express from 'express';
import {users, messages, dataList } from './data';
import bodyParser from 'body-parser';
import uuidv4 from 'uuid/v4';

const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Cynthia:12345@cluster0-mghfh.gcp.mongodb.net/test',{ useNewUrlParser: true });
var db = mongoose.connection;
mongoose.set('useFindAndModify', false);
// const cors = require('cors');
// app.use(cors());


/*  Connect to mongodb  */
db.on('error', error => console.log(error));
db.once('open', () => console.log('MongoDB connected!'));


/*  Solve cross origin problem(cors)  */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.me = users[1];
    next();
});


/*  Prestored data  */
async function presaveData(){
    for(let i=1 ; i<7 ; i++){
        try{
            var one = new Item( dataList[i] );
            const doc1 = await one.save();
            console.log('Saved : ',doc1);

        }catch(err){
            console.log(err);
        }
    }
}

async function init(){
    try{
        var one = new Balance( {type : 'total', balance : 0} );
        let doc1 = await one.save();
        var two = new Balance( {type : '201905', balance : 0} );
        doc1 = await two.save();
    }catch(err){
        console.log(err);
    }
}


/*  Mongoose Schema  */
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    id : String,
    type : String,
    detail : String,
    money : Number,
    gainOrPay : String,
    date : Number,
    month : Number
});
var Item = mongoose.model('Item', itemSchema);
var balanceSchema = new Schema({
    type : String,
    balance : Number
});
var Balance = mongoose.model('balance', balanceSchema);
init();



async function postNewData(data){
    try{
        var one = new Item( data );
        const doc1 = await one.save();
    }catch(err){
        console.log(err);
    }
}

function checkData(preData){
    const id = uuidv4();
    var money = parseInt(preData.money, 10);
    var date = parseInt(preData.date, 10);
    if(!date || !money || money<=0 || date<20100000){
        console.log("Bad data");
        return false;
    }
    const data = {
        id,
        type : preData.type,
        detail : preData.detail,
        money :money,
        gainOrPay : preData.gainOrPay,
        date : date,
        month : Math.floor(date/100)
    };
    return data;
}

async function newBalance(name){
    try{
        var one = new Balance( {type : name, balance : 0} );
        let doc1 = await one.save();
    }catch(err){
        console.log(err);
    }
}

/*  GET  */ 
app.get('/:month', (req, res) => {
    let temp = {};
    let totalB = 0;
    let monthB = 0;
    return  Item.find({month : req.params.month}).sort('date').exec()
    .then((data) => {
        temp = data;
        return Balance.findOne({type : "total"});
    })
    .then((data) => {
        if(!data){
            newBalance("total");
            totalB = 0;
        }
        else {totalB = data.balance;}
        return Balance.findOne({type : req.params.month});
    })
    .then((data) => {
        if(!data){
            newBalance(req.params.month);
            monthB = 0;
        }
        else{ monthB = data.balance; }   
        temp.unshift({total : totalB, monthly : monthB});
        console.log('Get /',req.params.month," : ",temp);
        return res.send(Object.values(temp));
    })
    .catch((err) => console.log('Error in GET :', err));
});


/*  DELETE  */ 
app.delete('/', (req, res) => {
    return Item.deleteMany({})
    .then((data) => {
        return Balance.deleteMany({});
    })
    .then((data) => {
        console.log(data);
        console.log("Delete all!");
        return data;
    })
    .then((data) => {
        return res.send('Delete all!');
    })
    .catch((err) => console.log('Error in GET :', err));
});


/*  POST  */ 
app.post('/', (req, res) => {
    let data = checkData(req.body);
    if(!data){
        return res.send('Bad data');
    }
    var a = new Item( data );
    let total = 0;
    let month = 0;
    let realMoney = 0;
    if(data.gainOrPay === "pay"){ realMoney = data.money*(-1);}
    else{ realMoney = data.money; }
    return Balance.findOne({type : "total"})
    .then((i) => {
        if(!i){
            newBalance("total");
            total = 0;
        }
        else{total = i.balance;}
        return Balance.findOne({type : data.month.toString()});
    })
    .then((i) => {
        if(!i){
            newBalance(data.month.toString());
            month = 0;
        }
        else{month = i.balance;}
        return Balance.findOneAndUpdate({type : "total"}, {$set:{balance : total+realMoney}},{new: true});
    })
    .then((i) => {
        return Balance.findOneAndUpdate({type : data.month.toString()}, {$set:{balance : (month+realMoney)}}, {new: true});
    })
    .then((i) => {
        return a.save()
    })
    .then((data) => {
        console.log("POST : ", data);
        return 'i';
    })
    .then((i) => {
        return res.send('Received a POST HTTP method')
    })
});


app.listen(3001, () =>
    console.log('Example app listening on port 3001!'),
);