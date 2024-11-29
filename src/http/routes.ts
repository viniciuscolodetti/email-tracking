import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import path from 'node:path'
import fs from 'node:fs'
import z from 'zod'
import { prisma } from '../lib/prisma-client'

const routes: FastifyPluginAsyncZod = async app => {
	app.get(
		'/track/:campaign/:email',
		{
			schema: {
				tags: ['track'],
				summary: 'Create a new email track',
				params: z.object({
					campaign: z.string(),
					email: z.string(),
				}),
			},
		},
		async (request, reply) => {
			const { campaign, email } = request.params

			let aborted = false

			request.raw.on('close', () => {
				aborted = true
			})

			await new Promise(resolve => setTimeout(resolve, 5000))

			await prisma.tracking.create({
				data: {
					campaign,
					email,
					aborted,
					userAgent: request.headers['user-agent'] || null,
					userAgentBrand: String(request.headers['sec-ch-ua']) || null,
					headers: request.headers,
				},
			})

			const imagePath = path.join(__dirname, '..', 'assets', 'img.png')

			const imageBuffer = fs.readFileSync(imagePath)
			reply.type('image/png')

			return imageBuffer
		}
	)
}

export { routes }
