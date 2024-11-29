import { copyFile, mkdir, rm } from 'node:fs/promises'
import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/**/*.ts'],
	splitting: false,
	sourcemap: true,
	clean: true,
	noExternal: ['@t3-oss/env-nextjs'],
	onSuccess: async () => {
		await rm('dist/assets', { recursive: true, force: true })
		await mkdir('dist/assets', { recursive: true })
		await copyFile('src/assets/img.png', 'dist/assets/img.png')
	},
})
