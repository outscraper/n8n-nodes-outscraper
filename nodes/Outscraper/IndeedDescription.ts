import { INodeProperties } from 'n8n-workflow';

// Indeed operations
export const indeedOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['indeed'],
			},
		},
		options: [
			{
				name: 'Job Search',
				value: 'jobSearch',
				description: 'Get jobs from Indeed',
				action: 'Get jobs from indeed',
				routing: {
					request: {
						method: 'GET',
						url: '/indeed-jobs',
					},
				},
			},
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Get reviews from Indeed companies',
				action: 'Get reviews from indeed companies',
				routing: {
					request: {
						method: 'GET',
						url: '/indeed-reviews',
					},
				},
			},
		],
		default: 'jobSearch',
	},
];

// Indeed fields
export const indeedFields: INodeProperties[] = [
	// Common fields for both operations
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['indeed'],
			},
		},
		description: 'Search links with search parameters for jobs or company links for reviews',
		placeholder: 'e.g., https://www.indeed.com/jobs?q=&l=Fremont+Canyon%2C+CA or https://www.indeed.com/cmp/TEKsystems',
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
				resource: ['indeed'],
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
				resource: ['indeed'],
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
				resource: ['indeed'],
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

	// Fields specific to Reviews operation
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['indeed'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Default',
				value: '',
			},
			{
				name: 'Helpfulness',
				value: 'helpfulness',
			},
			{
				name: 'Rating (Highest First)',
				value: 'rating_desc',
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
				resource: ['indeed'],
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

	// Additional fields for both operations
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['indeed'],
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
