import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

export const env = createEnv({
	server: {
		SERVER_PORT: z.coerce.number().default(3333),
		SERVER_HOST: z.string(),

		DATABASE_USER: z.string(),
		DATABASE_PASS: z.string(),
		DATABASE_NAME: z.string(),
		DATABASE_HOST: z.string(),
		DATABASE_PORT: z.coerce.number().default(5432),
		DATABASE_URL: z.string().url(),
	},
	client: {},
	shared: {},
	runtimeEnv: {
		SERVER_PORT: process.env.SERVER_PORT,
		SERVER_HOST: process.env.SERVER_HOST,
		DATABASE_USER: process.env.DATABASE_USER,
		DATABASE_PASS: process.env.DATABASE_PASS,
		DATABASE_NAME: process.env.DATABASE_NAME,
		DATABASE_HOST: process.env.DATABASE_HOST,
		DATABASE_PORT: process.env.DATABASE_PORT,
		DATABASE_URL: process.env.DATABASE_URL,
	},
	emptyStringAsUndefined: true,
})
