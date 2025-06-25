import { INodeProperties } from 'n8n-workflow';

// Expedia operations
export const expediaOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['expedia'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search on Expedia',
				action: 'Search on Expedia',
				routing: {
					request: {
						method: 'GET',
						url: '/expedia/search',
					},
				},
			},
			{
				name: 'Get Reviews',
				value: 'reviews',
				description: 'Get reviews from Expedia',
				action: 'Get reviews from Expedia',
				routing: {
					request: {
						method: 'GET',
						url: '/expedia/reviews',
					},
				},
			},
		],
		default: 'search',
	},
];

// Expedia Search fields
export const expediaSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['search'],
			},
		},
		description: 'Search links with search parameters (e.g., https://www.expedia.com/Hotel-Search?destination=Ankara...)',
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
		default: 100,
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['search'],
			},
		},
		description: 'Limit of results to return',
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
				resource: ['expedia'],
				operation: ['search'],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['search'],
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

// Expedia Reviews fields
export const expediaReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['reviews'],
			},
		},
		description: 'Direct links of any Expedia place, or place IDs (e.g., https://www.expedia.com/Las-Vegas-Hotels-The-Orleans-Hotel-Casino.h41313.Hotel-Information, 41313)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Reviews Limit',
		name: 'reviewsLimit',
		type: 'number',
		default: 100,
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['reviews'],
			},
		},
		description: 'Limit of reviews to get from one place',
		routing: {
			send: {
				type: 'query',
				property: 'reviewsLimit',
			},
		},
	},
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: 'NEWEST_TO_OLDEST_BY_LANGUAGE',
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Newest to Oldest by Language',
				value: 'NEWEST_TO_OLDEST_BY_LANGUAGE',
			},
			{
				name: 'Newest to Oldest',
				value: 'NEWEST_TO_OLDEST',
			},
			{
				name: 'Highest to Lowest Rated',
				value: 'HIGHEST_TO_LOWEST_RATED',
			},
			{
				name: 'Lowest to Highest Rated',
				value: 'LOWEST_TO_HIGHEST_RATED',
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
				resource: ['expedia'],
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
		displayName: 'Async Request',
		name: 'async',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['reviews'],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['expedia'],
				operation: ['reviews'],
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
