module.exports = {
	port: process.env.PORT || 3000,
	cookie_session: "S3cR3T",
    db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mealWatcher'
}