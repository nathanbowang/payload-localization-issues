import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('Create Org with multiple locales and publish', () => {
	beforeAll(async () => {
		const payloadConfig = await config
		payload = await getPayload({ config: payloadConfig })
	})

	it('creates an Org with en and zh locales and publishes both', async () => {
		// Create Org with Chinese locale and publish it
		const org = await payload.create({
			collection: 'orgs',
			data: {
				name: '名字 (zh)',
				_status: 'published',
			},
			locale: 'zh',
		})

		expect(org.id).toBeDefined()
		expect(org.name).toBe('名字 (zh)')
		expect(org._status).toBe('published')

		// Verify both locales are published
		const orgZh = await payload.findByID({
			collection: 'orgs',
			id: org.id,
			locale: 'zh',
			draft: false,
		})
		expect(orgZh.name).toBe('名字 (zh)')
		expect(orgZh._status).toBe('published')

		// Verify English locale is not published
		const orgEn = await payload.findByID({
			collection: 'orgs',
			id: org.id,
			locale: 'en',
			draft: false,
		})
		expect(orgEn._status).toBe('draft')

	})
})
