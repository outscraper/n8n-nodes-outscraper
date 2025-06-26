import { INodeProperties } from 'n8n-workflow';

// Trustpilot operations
export const trustpilotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['trustpilot'],
			},
		},
		options: [
			{
				name: 'Get Business Info',
				value: 'business',
				description: 'Get business information from Trustpilot',
				action: 'Get business information from trustpilot',
				routing: {
					request: {
						method: 'GET',
						url: '/trustpilot',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search businesses on Trustpilot',
				action: 'Search businesses on trustpilot',
				routing: {
					request: {
						method: 'GET',
						url: '/trustpilot/search',
					},
				},
			},
			{
				name: 'Get Reviews',
				value: 'reviews',
				description: 'Get reviews from Trustpilot',
				action: 'Get reviews from trustpilot',
				routing: {
					request: {
						method: 'GET',
						url: '/trustpilot/reviews',
					},
				},
			},
		],
		default: 'business',
	},
];

// Trustpilot fields
export const trustpilotFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['trustpilot'],
			},
		},
		description: 'Links to Trustpilot pages or domain names (e.g., outscraper.com, https://www.trustpilot.com/review/outscraper.com)',
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
				resource: ['trustpilot'],
				operation: ['search', 'reviews'],
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
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: 'recency',
		displayOptions: {
			show: {
				resource: ['trustpilot'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Recency',
				value: 'recency',
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
				resource: ['trustpilot'],
				operation: ['reviews'],
			},
		},
		description: 'Oldest timestamp value for reviews (overrides sort to newest first)',
		routing: {
			send: {
				type: 'query',
				property: 'cutoff',
			},
		},
	},
	{
		displayName: 'Languages',
		name: 'languages',
		type: 'options',
		default: 'default',
		displayOptions: {
			show: {
				resource: ['trustpilot'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'All',
				value: 'all',
			},
			{
				name: 'Default',
				value: 'default',
			},
			{
				name: 'English',
				value: 'en',
			},
			{
				name: 'German',
				value: 'de',
			},
			{
				name: 'Spanish',
				value: 'es',
			},
		],
		description: 'Language filter for reviews',
		routing: {
			send: {
				type: 'query',
				property: 'languages',
			},
		},
	},
	{
		displayName: 'Skip',
		name: 'skip',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['trustpilot'],
				operation: ['search'],
			},
		},
		description: 'Number of results to skip',
		routing: {
			send: {
				type: 'query',
				property: 'skip',
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
				resource: ['trustpilot'],
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
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['trustpilot'],
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
				resource: ['trustpilot'],
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
			{
				displayName: 'Enrichment',
				name: 'enrichment',
				type: 'string',
				default: '',
				description: 'Additional data enrichments to include',
				routing: {
					send: {
						type: 'query',
						property: 'enrichment',
					},
				},
			},
			{
				displayName: 'UI',
				name: 'ui',
				type: 'boolean',
				default: false,
				description: 'Whether to execute the request as a UI task',
				routing: {
					send: {
						type: 'query',
						property: 'ui',
					},
				},
			},
		],
	},
];
