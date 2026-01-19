import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll } from 'vitest'

let payload: Payload

describe('Create repo', () => {
	beforeAll(async () => {
		const payloadConfig = await config
		payload = await getPayload({ config: payloadConfig })
	})

	it('reproduces the error', async () => {
		await payload.create({
			collection: 'orgs',
			data: {
				name: 'Test Org',
			},
			locale: 'en',
		})

		try {
			await payload.find({
				collection: 'orgs',
				depth: 0,
				draft: true,
				limit: 10,
				locale: 'en',
				page: 1,
				sort: 'id',
			})
		} catch (error) {
			console.error(error)
			throw error
		}
	})
})
