import type { CollectionConfig } from 'payload'

export const Repo: CollectionConfig = {
	slug: 'repos',
	fields: [
		{
			name: 'org',
			type: 'relationship',
			relationTo: 'orgs',
			required: true,
		},
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
