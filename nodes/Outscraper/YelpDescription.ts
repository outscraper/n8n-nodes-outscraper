import { INodeProperties } from 'n8n-workflow';

// Yelp operations
export const yelpOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search on Yelp',
				action: 'Search on yelp',
				routing: {
					request: {
						method: 'GET',
						url: '/yelp-search',
					},
				},
			},
			{
				name: 'Business',
				value: 'business',
				description: 'Get business information from Yelp',
				action: 'Get business information from yelp',
				routing: {
					request: {
						method: 'GET',
						url: '/yelp-business',
					},
				},
			},
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Get reviews from Yelp businesses',
				action: 'Get reviews from yelp businesses',
				routing: {
					request: {
						method: 'GET',
						url: '/yelp-reviews',
					},
				},
			},
		],
		default: 'search',
	},
];

// Yelp fields
export const yelpFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
			},
		},
		description: 'Search links or business URLs/IDs from Yelp',
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
				resource: ['yelp'],
				operation: ['search'],
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
		displayName: 'Async Request',
		name: 'async',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['yelp'],
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
				resource: ['yelp'],
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
				resource: ['yelp'],
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
		displayName: 'Cursor',
		name: 'cursor',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['yelp'],
				operation: ['reviews'],
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
		default: 'relevance_desc',
		displayOptions: {
			show: {
				resource: ['yelp'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Date (Ascending)',
				value: 'date_asc',
			},
			{
				name: 'Date (Descending)',
				value: 'date_desc',
			},
			{
				name: 'Elites (Descending)',
				value: 'elites_desc',
			},
			{
				name: 'Rating (Ascending)',
				value: 'rating_asc',
			},
			{
				name: 'Rating (Descending)',
				value: 'rating_desc',
			},
			{
				name: 'Relevance (Descending)',
				value: 'relevance_desc',
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
				resource: ['yelp'],
				operation: ['reviews'],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['yelp'],
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
				displayOptions: {
					show: {
						resource: ['yelp'],
						operation: ['search'],
					},
				},
				description: 'Additional data enrichments to include (comma-separated)',
				placeholder: 'e.g., domains_service,emails_validator_service',
				routing: {
					send: {
						type: 'query',
						property: 'enrichment',
					},
				},
			},
		],
	},
];
