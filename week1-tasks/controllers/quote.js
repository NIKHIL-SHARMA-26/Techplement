const Quote = require('../models/quote')

// Add new quote
exports.addQuote = async (req, res) => {
    try{
        const { quote, author } = req.body;
        if (!quote || !author) {
            return res.status(400).json({
                success: false,
                message: "Please give valid data"
            })
        }
        const data = await Quote.create({
            quote,
            author
        });
        if (data) {
            res.status(201).json({
                success: true,
                message: "Quote created successfully"
            })
        }
     }catch (error) {
        console.log(`${error}`);
    }
};

// Update quote
exports.updateQuote = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "invalid ID"
            })
        }
        const quoteInfo = req.body;
        const data = await Quote.findByIdAndUpdate(id, quoteInfo, {
            new: true
        })
        if (data) {
            res.status(202).json({
                success: true,
                message: "Quote updated successfuly",
                data: data
            })
        }
    } catch (error) {
        res.json(`Not Updated ${error}`);
    }
};

// Delete quote
exports.deleteQuote = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong or invalid ID"
            })
        }
        const data = await Quote.findByIdAndDelete(id )
        if (data) {
            res.status(200).json({
                staus: true,
                message: "Quote deleted successfully"
            })
        }
    } catch (error) {
        res.json(`delete unsuccessful ${error}`)
    }
};

// Get random quote
exports.getRandomQuote = async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const quote = await Quote.findOne().skip(random);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Search quotes by author
exports.searchByAuthor = async (req, res) => {
    try {
        const {author} = req.query;
        console.log(req.query);
        if (!author) {
            return res.status(400).json({
                success: false,
                message: "Please provide author name"
            })
        }
        const quotes = await Quote.find({ author })
        if (quotes) {
            res.status(200).json({
                success: true,
                message: "Quotes fetched successfully",
                data: quotes
            })
        }
    }catch(err){
        console.log(`${err}`);
        throw err
    }
};