import { INodeProperties } from 'n8n-workflow';

// Google Maps Search operation
export const googleMapsSearchOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search for businesses on Google Maps',
				action: 'Search for businesses on google maps',
				routing: {
					request: {
						method: 'GET',
						url: '/maps/search-v3',
					},
				},
			},
			{
				name: 'Get Reviews',
				value: 'reviews',
				description: 'Get reviews for a place on Google Maps',
				action: 'Get reviews for a place on google maps',
				routing: {
					request: {
						method: 'GET',
						url: '/maps/reviews-v3',
					},
				},
			},
			{
				name: 'Get Photos',
				value: 'photos',
				description: 'Get photos for a place on Google Maps',
				action: 'Get photos for a place on google maps',
				routing: {
					request: {
						method: 'GET',
						url: '/maps/photos-v3',
					},
				},
			},
		],
		default: 'search',
	},
];

// Google Maps Search fields
export const googleMapsSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['search'],
			},
		},
		description: 'Search query or place ID',
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
				resource: ['googleMaps'],
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
		displayName: 'Language',
		name: 'language',
		type: 'string',
		default: 'en',
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['search'],
			},
		},
		description: 'Language code (e.g., en, fr, es)',
		routing: {
			send: {
				type: 'query',
				property: 'language',
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
				resource: ['googleMaps'],
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
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['search'],
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
];

// Google Maps Reviews fields
export const googleMapsReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['reviews'],
			},
		},
		description: 'Search query or place ID',
		routing: {
			send: {
				type: 'query',
				property: 'query',
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
				resource: ['googleMaps'],
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
		displayName: 'Reviews Limit',
		name: 'reviewsLimit',
		type: 'number',
		default: 100,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['reviews'],
			},
		},
		description: 'Limit of reviews to get from one place (0 = unlimited)',
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
		default: 'most_relevant',
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['reviews'],
			},
		},
		options: [
			{
				name: 'Most Relevant',
				value: 'most_relevant',
			},
			{
				name: 'Newest',
				value: 'newest',
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
		displayName: 'Language',
		name: 'language',
		type: 'string',
		default: 'en',
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['reviews'],
			},
		},
		description: 'Language code (e.g., en, fr, es)',
		routing: {
			send: {
				type: 'query',
				property: 'language',
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
				resource: ['googleMaps'],
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
];

// Google Maps Photos fields
export const googleMapsPhotosFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['photos'],
			},
		},
		description: 'Search query or place ID',
		routing: {
			send: {
				type: 'query',
				property: 'query',
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
				resource: ['googleMaps'],
				operation: ['photos'],
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
		displayName: 'Photos Limit',
		name: 'photosLimit',
		type: 'number',
		default: 100,
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['photos'],
			},
		},
		description: 'Limit of photos to get from one place',
		routing: {
			send: {
				type: 'query',
				property: 'photosLimit',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		default: 'en',
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['photos'],
			},
		},
		description: 'Language code (e.g., en, fr, es)',
		routing: {
			send: {
				type: 'query',
				property: 'language',
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
				resource: ['googleMaps'],
				operation: ['photos'],
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
];
