import { INodeProperties } from 'n8n-workflow';


// G2 Reviews operation
export const g2ReviewsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['g2Reviews'],
			},
		},
		options: [
			{
				name: 'Get Reviews',
				value: 'reviews',
				description: 'Get reviews from G2',
				action: 'Get reviews from G2',
				routing: {
					request: {
						method: 'GET',
						url: '/g2/reviews',
					},
				},
			},
		],
		default: 'reviews',
	},
];

// G2 Reviews fields
export const g2ReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['g2Reviews'],
				operation: ['reviews'],
			},
		},
		description: 'Links to G2 products (e.g., https://www.g2.com/products/outscraper)',
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
				resource: ['g2Reviews'],
				operation: ['reviews'],
			},
		},
		description: 'Limit of reviews to get from one query',
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
		default: 'g2_default',
		displayOptions: {
			show: {
				resource: ['g2Reviews'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'G2 Default',
				value: 'g2_default',
			},
			{
				name: 'Most Recent',
				value: 'most_recent',
			},
			{
				name: 'Most Helpful',
				value: 'most_helpful',
			},
			{
				name: 'Highest Rated',
				value: 'highest_rated',
			},
			{
				name: 'Lowest Rated',
				value: 'lowest_rated',
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
				resource: ['g2Reviews'],
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
		displayName: 'Async Request',
		name: 'async',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['g2Reviews'],
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
		displayName: 'UI',
		name: 'ui',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['g2Reviews'],
				operation: ['reviews'],
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
				resource: ['g2Reviews'],
				operation: ['reviews'],
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
				resource: ['g2Reviews'],
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
