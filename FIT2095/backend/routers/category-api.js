const mongoose = require('mongoose');

const Category = require('../models/category');
const Event = require('../models/event');
const Operation = require('../models/operation');

let OPERATION_ID = 'OPERATION_ID';

module.exports = {
    createOne: async function (req, res) {
        let categoryDetails = req.body;
        let newCategory = new Category(categoryDetails);
        await newCategory.save();

        await Operation.updateOne(
            { _id: OPERATION_ID },
            { $inc: { createCount: 1 } }
        );

        res.json({ categoryId: newCategory.categoryId });
    },
    getAll: async function (req, res) {
        let categories = await Category.find()
            .populate('eventList')
            .exec();
        res.json(categories);
    },
    updateOne: async function (req, res) {
        let updateStatus = await Category.updateOne(
            { categoryId: req.body.categoryId },
            {
                name: req.body.name,
                description: req.body.description
            }
        );

        await Operation.updateOne(
            { _id: OPERATION_ID },
            { $inc: { updateCount: updateStatus.modifiedCount } }
        );

        let status = `${updateStatus.matchedCount} found. ${updateStatus.modifiedCount} modified.`

        res.json({ status: status });
    },
    deleteOne: async function (req, res) {
        let deletedCount = 0;
        let category = await Category.findOne({ categoryId: req.body.categoryId });

        let eventDeleteStatus = await Event.deleteMany(
            { _id: { $in: category.eventList } }
        );

        let categoryDeleteStatus = await Category.deleteOne(
            { categoryId: req.body.categoryId }
        );

        deletedCount = eventDeleteStatus.deletedCount + categoryDeleteStatus.deletedCount

        await Operation.updateOne(
            { _id: OPERATION_ID },
            { $inc: { deleteCount: deletedCount } }
        );

        res.json(deletedCount);
    },
    getOne: async function (req, res) {
        let category = await Category.findOne({ categoryId: req.params.categoryId })
            .populate('eventList')
            .exec();
        
        let events = await Event.find({ categoryList: category._id })
            .populate('categoryList')
            .exec();
        
        res.json({ category: category, events: events });
    }
}