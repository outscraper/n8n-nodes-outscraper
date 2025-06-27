import { INodeProperties } from 'n8n-workflow';

// Geocoding operation
export const geocodingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['geocoding'],
			},
		},
		options: [
			{
				name: 'Geocode',
				value: 'geocode',
				description: 'Translates human-readable addresses into locations on the map',
				action: 'Geocode address',
				routing: {
					request: {
						method: 'GET',
						url: '/geocoding',
					},
				},
			},
		],
		default: 'geocode',
	},
];

export const geocodingFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['geocoding'],
				operation: ['geocode'],
			},
		},
		description: 'Addresses specifying the location (e.g., 321 California Ave, Palo Alto, CA 94306)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
];

// Reverse Geocoding operation
export const reverseGeocodingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['reverseGeocoding'],
			},
		},
		options: [
			{
				name: 'Reverse Geocode',
				value: 'reverseGeocode',
				description: 'Translate locations on the map into human-readable addresses',
				action: 'Reverse geocode coordinates',
				routing: {
					request: {
						method: 'GET',
						url: '/reverse-geocoding',
					},
				},
			},
		],
		default: 'reverseGeocode',
	},
];

export const reverseGeocodingFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['reverseGeocoding'],
				operation: ['reverseGeocode'],
			},
		},
		description: 'Latitude and longitude coordinates (e.g., 40.7624284 -73.973794)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
];

// Company Insights operation
export const companyInsightsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['companyInsights'],
			},
		},
		options: [
			{
				name: 'Get Insights',
				value: 'getInsights',
				description: 'Finds company details such as revenue, size, founding year, public status, etc',
				action: 'Get company insights',
				routing: {
					request: {
						method: 'GET',
						url: '/company-insights',
					},
				},
			},
		],
		default: 'getInsights',
	},
];

export const companyInsightsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['companyInsights'],
				operation: ['getInsights'],
			},
		},
		description: 'Domains or websites (e.g., dominopark.com, https://www.esbnyc.com/)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
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
				resource: ['companyInsights'],
				operation: ['getInsights'],
			},
		},
		description: 'Enrichments to apply (comma-separated)',
		routing: {
			send: {
				type: 'query',
				property: 'enrichment',
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
				resource: ['companyInsights'],
				operation: ['getInsights'],
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
				resource: ['companyInsights'],
				operation: ['getInsights'],
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
				resource: ['companyInsights'],
				operation: ['getInsights'],
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

// Universal Scraper operation
export const universalScraperOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['universalScraper'],
			},
		},
		options: [
			{
				name: 'Scrape',
				value: 'scrape',
				description: 'Extracts the data you need from any web page by using AI',
				action: 'Scrape web page',
				routing: {
					request: {
						method: 'GET',
						url: '/universal-scraper',
					},
				},
			},
		],
		default: 'scrape',
	},
];

export const universalScraperFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['universalScraper'],
				operation: ['scrape'],
			},
		},
		description: 'Links to web pages (e.g., https://www.apple.com/iphone/)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Attributes',
		name: 'attributes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['universalScraper'],
				operation: ['scrape'],
			},
		},
		description: 'Attributes to parse from a web page (comma-separated)',
		routing: {
			send: {
				type: 'query',
				property: 'attributes',
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
				resource: ['universalScraper'],
				operation: ['scrape'],
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
				resource: ['universalScraper'],
				operation: ['scrape'],
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
				resource: ['universalScraper'],
				operation: ['scrape'],
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
				resource: ['universalScraper'],
				operation: ['scrape'],
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

// WebPage Screenshoter operation
export const webPageScreenshoterOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
			},
		},
		options: [
			{
				name: 'Screenshot',
				value: 'screenshot',
				description: 'Captures high-quality screenshots of any webpage',
				action: 'Screenshot web page',
				routing: {
					request: {
						method: 'GET',
						url: '/webpage-screenshoter',
					},
				},
			},
		],
		default: 'screenshot',
	},
];

export const webPageScreenshoterFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Links to web pages (e.g., https://www.apple.com/iphone/)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Region',
		name: 'region',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Country to use for the screenshot',
		routing: {
			send: {
				type: 'query',
				property: 'region',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		default: 'webp',
		options: [
			{ name: 'WebP', value: 'webp' },
			{ name: 'PNG', value: 'png' },
			{ name: 'JPEG', value: 'jpeg' },
			{ name: 'PDF', value: 'pdf' },
		],
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Image extension',
		routing: {
			send: {
				type: 'query',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Full Page',
		name: 'fullPage',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Whether to capture the full page',
		routing: {
			send: {
				type: 'query',
				property: 'fullPage',
			},
		},
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		default: 1200,
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Width of the viewport',
		routing: {
			send: {
				type: 'query',
				property: 'width',
			},
		},
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		default: 800,
		displayOptions: {
			show: {
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
			},
		},
		description: 'Height of the viewport',
		routing: {
			send: {
				type: 'query',
				property: 'height',
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
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
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
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
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
				resource: ['webPageScreenshoter'],
				operation: ['screenshot'],
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

// Add Geocoding, Reverse Geocoding, Company Insights, Universal Scraper, and WebPage Screenshoter operations and fields, following the conventions of other services.
