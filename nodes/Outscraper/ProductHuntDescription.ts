import { INodeProperties } from 'n8n-workflow';

// Product Hunt operations
export const productHuntOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		options: [
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Get reviews from Product Hunt',
				action: 'Get reviews from product hunt',
				routing: {
					request: {
						method: 'GET',
						url: '/producthunt-reviews',
					},
				},
			},
		],
		default: 'reviews',
	},
];

// Product Hunt fields
export const productHuntFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Links to Product Hunt product pages, or page IDs',
		placeholder: 'e.g., https://www.producthunt.com/products/outscraper, outscraper',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
	{
		displayName: 'Cursor',
		name: 'cursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Next page cursor for pagination',
		routing: {
			send: {
				type: 'query',
				property: 'cursor',
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: 'BEST',
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		options: [
			{
				name: 'Best',
				value: 'BEST',
			},
			{
				name: 'Critical',
				value: 'CRITICAL',
			},
			{
				name: 'Favorable',
				value: 'FAVORABLE',
			},
			{
				name: 'Latest',
				value: 'LATEST',
			},
		],
		description: 'Sort order for reviews',
		routing: {
			send: {
				type: 'query',
				property: 'sort',
			},
		},
	},
	{
		displayName: 'Cutoff',
		name: 'cutoff',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Oldest timestamp value for reviews',
		routing: {
			send: {
				type: 'query',
				property: 'cutoff',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		default: 'en',
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		options: [
			{ name: 'Arabic', value: 'ar' },
			{ name: 'Chinese (Simplified)', value: 'zh-CN' },
			{ name: 'Chinese (Traditional)', value: 'zh-TW' },
			{ name: 'Croatian', value: 'hr' },
			{ name: 'Dutch', value: 'nl' },
			{ name: 'English', value: 'en' },
			{ name: 'French', value: 'fr' },
			{ name: 'German', value: 'de' },
			{ name: 'Italian', value: 'it' },
			{ name: 'Japanese', value: 'ja' },
			{ name: 'Korean', value: 'ko' },
			{ name: 'Polish', value: 'pl' },
			{ name: 'Portuguese (Brazil)', value: 'pt-BR' },
			{ name: 'Portuguese (Portugal)', value: 'pt-PT' },
			{ name: 'Russian', value: 'ru' },
			{ name: 'Spanish', value: 'es' },
			{ name: 'Spanish (Latin America)', value: 'es-419' },
			{ name: 'Thai', value: 'th' },
			{ name: 'Turkish', value: 'tr' },
			{ name: 'Vietnamese', value: 'vi' },
		],
		description: 'Language to use for website',
		routing: {
			send: {
				type: 'query',
				property: 'language',
			},
		},
	},
	{
		displayName: 'Region',
		name: 'region',
		type: 'options',
		default: 'US',
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		options: [
			{ name: 'Australia', value: 'AU' },
			{ name: 'Brazil', value: 'BR' },
			{ name: 'Canada', value: 'CA' },
			{ name: 'China', value: 'CN' },
			{ name: 'France', value: 'FR' },
			{ name: 'Germany', value: 'DE' },
			{ name: 'India', value: 'IN' },
			{ name: 'Japan', value: 'JP' },
			{ name: 'United Kingdom', value: 'GB' },
			{ name: 'United States', value: 'US' },
		],
		description: 'Country to use for website (recommended for better search experience)',
		routing: {
			send: {
				type: 'query',
				property: 'region',
			},
		},
	},
	{
		displayName: 'Async Request',
		name: 'async',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Whether to make an asynchronous request',
		routing: {
			send: {
				type: 'query',
				property: 'async',
			},
		},
	},
	{
		displayName: 'UI',
		name: 'ui',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'Whether to execute the request as a UI task',
		routing: {
			send: {
				type: 'query',
				property: 'ui',
			},
		},
	},
	{
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		description: 'URL address (callback) to which Outscraper will create a POST request once the task is finished',
		placeholder: 'https://your-webhook-url.com',
		routing: {
			send: {
				type: 'query',
				property: 'webhook',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['productHunt'],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Specific fields to return (comma-separated)',
				routing: {
					send: {
						type: 'query',
						property: 'fields',
					},
				},
			},
		],
	},
];
