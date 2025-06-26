import { INodeProperties } from 'n8n-workflow';

// TripAdvisor operations
export const tripadvisorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
			},
		},
		options: [
			{
				name: 'Get Reviews',
				value: 'reviews',
				description: 'Get reviews from TripAdvisor',
				action: 'Get reviews from trip advisor',
				routing: {
					request: {
						method: 'GET',
						url: '/tripadvisor-reviews',
					},
				},
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search on TripAdvisor',
				action: 'Search on trip advisor',
				routing: {
					request: {
						method: 'GET',
						url: '/tripadvisor-search',
					},
				},
			},
		],
		default: 'reviews',
	},
];

// TripAdvisor fields
export const tripadvisorFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
			},
		},
		description: 'Links to TripAdvisor pages or search URLs',
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
				resource: ['tripadvisor'],
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
		displayName: 'Cutoff',
		name: 'cutoff',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
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
		displayName: 'Search Type',
		name: 'SearchType',
		type: 'options',
		default: 'a',
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
				operation: ['search'],
			},
		},
		options: [
			{
				name: 'All Results',
				value: 'a',
			},
			{
				name: 'Hotels',
				value: 'h',
			},
			{
				name: 'Restaurants',
				value: 'e',
			},
			{
				name: 'Things to Do',
				value: 'A',
			},
			{
				name: 'Vacation Rentals',
				value: 'v',
			},
		],
		description: 'Type of search results to retrieve',
		routing: {
			send: {
				type: 'query',
				property: 'SearchType',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'options',
		default: 'default',
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Default',
				value: 'default',
			},
			{
				name: 'All',
				value: 'all',
			},
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
		displayName: 'Skip',
		name: 'skip',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
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
				resource: ['tripadvisor'],
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
				resource: ['tripadvisor'],
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
				resource: ['tripadvisor'],
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
