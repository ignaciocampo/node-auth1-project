module.exports = () => {
	return (req, res, next) => {
		const time = new Date().toISOString()
		console.log(`${time} ${req.ip} ${req.method} ${req.url}`)

		// we're done here, move on to the next piece of middleware in the stack
		// (which is the route handler)
		next()
	}
}