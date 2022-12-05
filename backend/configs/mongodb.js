const mongoose = require('mongoose')

const connectDB = async (req, res) => {
	try {
		const conn = mongoose.connect(
      "mongodb+srv://clipper:J123456789m@cluster0.xlvf7g7.mongodb.net/clipper?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

		console.log('Connected to MongoDB')
	} catch (error) {
		console.log('Error: ', error)
	}
}

module.exports = { connectDB }
