import { env } from '../env'
import { app } from './app'

const port = env.SERVER_PORT
const host = env.SERVER_HOST

app
	.listen({
		port,
		host,
	})
	.then(() => {
		console.log(`🚀 HTTP server running on http://${host}:${port}`)
	})
