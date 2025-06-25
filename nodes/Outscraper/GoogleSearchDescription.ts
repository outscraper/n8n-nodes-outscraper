import { INodeProperties } from 'n8n-workflow';

// Google Search operations
export const googleSearchOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleSearch'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search on Google',
				action: 'Search on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-v3',
					},
				},
			},
			{
				name: 'Search News',
				value: 'searchNews',
				description: 'Search for news on Google',
				action: 'Search for news on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-news',
					},
				},
			},
			{
				name: 'Search Events',
				value: 'searchEvents',
				description: 'Search for events on Google',
				action: 'Search for events on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-events',
					},
				},
			},
			{
				name: 'Search Videos',
				value: 'searchVideos',
				description: 'Search for videos on Google',
				action: 'Search for videos on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-videos',
					},
				},
			},
			{
				name: 'Search Images',
				value: 'searchImages',
				description: 'Search for images on Google',
				action: 'Search for images on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-images-v2',
					},
				},
			},
			{
				name: 'Search Shopping',
				value: 'searchShopping',
				description: 'Search for shopping products on Google',
				action: 'Search for shopping products on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-shopping',
					},
				},
			},
			{
				name: 'Search Careers',
				value: 'searchCareers',
				description: 'Search for career listings on Google',
				action: 'Search for career listings on Google',
				routing: {
					request: {
						method: 'GET',
						url: '/google-search-careers',
					},
				},
			},
		],
		default: 'search',
	},
];

// Google Search fields
export const googleSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['search', 'searchNews', 'searchEvents', 'searchVideos', 'searchImages', 'searchShopping', 'searchCareers'],
			},
		},
		description: 'Search query',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Pages Per Query',
		name: 'pagesPerQuery',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['search', 'searchNews', 'searchEvents', 'searchVideos', 'searchImages', 'searchShopping', 'searchCareers'],
			},
		},
		description: 'The limit of pages to return from one query',
		routing: {
			send: {
				type: 'query',
				property: 'pagesPerQuery',
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
				resource: ['googleSearch'],
				operation: ['search', 'searchNews', 'searchEvents', 'searchVideos', 'searchImages', 'searchShopping', 'searchCareers'],
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
		displayName: 'Language',
		name: 'language',
		type: 'string',
		default: 'en',
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['search', 'searchNews', 'searchEvents', 'searchVideos', 'searchImages', 'searchShopping', 'searchCareers'],
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
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['search', 'searchNews', 'searchEvents', 'searchVideos', 'searchImages', 'searchShopping', 'searchCareers'],
			},
		},
		options: [
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: 'us',
				description: 'Country code for localized results (e.g., us, uk, fr)',
				routing: {
					send: {
						type: 'query',
						property: 'region',
					},
				},
			},
			{
				displayName: 'Date Range',
				name: 'tbs',
				type: 'options',
				options: [
					{
						name: 'Past Hour',
						value: 'h',
					},
					{
						name: 'Past 24 Hours',
						value: 'd',
					},
					{
						name: 'Past Week',
						value: 'w',
					},
					{
						name: 'Past Month',
						value: 'm',
					},
					{
						name: 'Past Year',
						value: 'y',
					},
				],
				default: '',
				description: 'Filter results by date range',
				routing: {
					send: {
						type: 'query',
						property: 'tbs',
					},
				},
			},
			{
				displayName: 'UULE Parameter',
				name: 'uule',
				type: 'string',
				default: '',
				description: 'Google UULE parameter to encode a specific location',
				routing: {
					send: {
						type: 'query',
						property: 'uule',
					},
				},
			},
			{
				displayName: 'Skip',
				name: 'skip',
				type: 'number',
				default: 0,
				description: 'Number of results to skip (for pagination)',
				routing: {
					send: {
						type: 'query',
						property: 'skip',
					},
				},
			},
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
