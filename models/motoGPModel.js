const mongoose = require('mongoose');

const racerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    nationality: {
        type: String,
        require: true,
    },
    leader: {
        type: Number,
        require: true,
    },
    previous: {
        type: Number,
        require: true,
    },
    totalscore: {
        type: Number,
        require: true,
    },
    QATrace:{
        type:String,
    },
    INArace:{
        type:String,
    },
    ARGrace:{
        type:String,
    },
    AMErace:{
        type:String,
    },
    PORrace:{
        type:String,
    },
    SPArace:{
        type:String,
    },
    FRArace:{
        type:String,
    },
    ITArace:{
        type:String,
    },
    CATrace:{
        type:String,
    },
    GERrace:{
        type:String,
    },
    NEDrace:{
        type:String,
    },
    GBRrace:{
        type:String,
    },
    AUTrace:{
        type:String,
    },
    RSMrace:{
        type:String,
    },
    ARArace:{
        type:String,
    },
    JPNrace:{
        type:String,
    },
    THArace:{
        type:String,
    },
    AUSrace:{
        type:String,
    },
    MALrace:{
        type:String,
    },
    VALrace:{
        type:String,
    },
});

const Racer= mongoose.model('racer', racerSchema);
module.exports = Racer;