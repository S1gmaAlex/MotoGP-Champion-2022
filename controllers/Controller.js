const Racer = require('../models/motoGPModel');
const HomeController = {
    addData: async (req, res) =>{
        return res.render('create');
    },

    createData: async (req, res) => {
        try {
            const newRacer = await Racer.create({ name:req.body.name,
                 nationality:req.body.nationality,
                  leader:req.body.leader,
                   previous:req.body.previous,
                    QATrace:req.body.QATrace,
                    INArace:req.body.INArace,
                    ARGrace:req.body.ARGrace,
                    AMErace:req.body.AMErace,
                    PORrace:req.body.PORrace,
                    SPArace:req.body.SPArace,
                    FRArace:req.body.FRArace,
                    ITArace:req.body.ITArace,
                    CATrace:req.body.CATrace,
                    GERrace:req.body.GERrace,
                    NEDrace:req.body.NEDrace,
                    GBRrace:req.body.GBRrace,
                    AUTrace:req.body.AUTrace,
                    RSMrace:req.body.RSMrace,
                    ARArace:req.body.ARArace,
                    JPNrace:req.body.JPNrace,
                    THArace:req.body.THArace,
                    AUSrace:req.body.AUSrace,
                    MALrace:req.body.MALrace,
                    VALrace:req.body.VALrace,
                    totalscore:parseInt(req.body.QATrace) + parseInt(req.body.INArace) + parseInt(req.body.ARGrace) + parseInt(req.body.AMErace) 
                    + parseInt(req.body.PORrace) + parseInt(req.body.SPArace) + parseInt(req.body.FRArace) + parseInt(req.body.ITArace) + parseInt(req.body.CATrace)
                    + parseInt(req.body.GERrace) + parseInt(req.body.NEDrace) + parseInt(req.body.GBRrace) + parseInt(req.body.AUTrace) + parseInt(req.body.RSMrace) 
                    + parseInt(req.body.ARArace) + parseInt(req.body.JPNrace) + parseInt(req.body.THArace) + parseInt(req.body.AUSrace) + parseInt(req.body.MALrace) 
                    + parseInt(req.body.VALrace)});
                    await newRacer.save();
                    return res.redirect('/');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAllData: async (req, res) => {
        try {
            racers = await Racer.find().sort({totalscore: -1});
            return res.render('home')
        } catch (err) {
            res.status(500).json(err);
        }
    },

    editData: async(req, res)=>{
        try {
            racers = await Racer.findById(req.params.id);
            return res.render('edit');
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateData: async (req, res) => {
        try {
            const racers = await Racer.findById(req.params.id);
            await racers.updateOne({ $set: {name:req.body.name,
                nationality:req.body.nationality,
                    leader:req.body.leader,
                    previous:req.body.previous,
                    QATrace:req.body.QATrace,
                    INArace:req.body.INArace,
                    ARGrace:req.body.ARGrace,
                    AMErace:req.body.AMErace,
                    PORrace:req.body.PORrace,
                    SPArace:req.body.SPArace,
                    FRArace:req.body.FRArace,
                    ITArace:req.body.ITArace,
                    CATrace:req.body.CATrace,
                    GERrace:req.body.GERrace,
                    NEDrace:req.body.NEDrace,
                    GBRrace:req.body.GBRrace,
                    AUTrace:req.body.AUTrace,
                    RSMrace:req.body.RSMrace,
                    ARArace:req.body.ARArace,
                    JPNrace:req.body.JPNrace,
                    THArace:req.body.THArace,
                    AUSrace:req.body.AUSrace,
                    MALrace:req.body.MALrace,
                    VALrace:req.body.VALrace,
                    totalscore:parseInt(req.body.QATrace) + parseInt(req.body.INArace) + parseInt(req.body.ARGrace) + parseInt(req.body.AMErace) 
                        + parseInt(req.body.PORrace) + parseInt(req.body.SPArace) + parseInt(req.body.FRArace) + parseInt(req.body.ITArace) + parseInt(req.body.CATrace)
                        + parseInt(req.body.GERrace) + parseInt(req.body.NEDrace) + parseInt(req.body.GBRrace) + parseInt(req.body.AUTrace) + parseInt(req.body.RSMrace) 
                        + parseInt(req.body.ARArace) + parseInt(req.body.JPNrace) + parseInt(req.body.THArace) + parseInt(req.body.AUSrace) + parseInt(req.body.MALrace) 
                        + parseInt(req.body.VALrace)}});
            return res.redirect('/');
            // res.status(200).json("updated successfully!!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteData: async (req, res) => {
        try {
            await Racer.findByIdAndDelete(req.params.id);
            return res.redirect('/');
            // res.status(200).json("deleted successfully!!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = HomeController;