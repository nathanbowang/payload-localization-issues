import type { CollectionConfig } from 'payload'

export const Org: CollectionConfig = {
	slug: 'orgs',
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			localized: true,
		},
	],
	versions: {
		drafts: {
			schedulePublish: true,
			// localizeStatus: true,
		},
		maxPerDoc: 0,
	},
	trash: true,
	enableQueryPresets: true,
}
