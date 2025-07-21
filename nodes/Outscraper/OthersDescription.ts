import { INodeProperties } from 'n8n-workflow';

// Geocoding operations (merged Geocode and Reverse Geocode)
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
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['geocoding'],
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

// Walmart Reviews
export const walmartReviewsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['walmartReviews'],
			},
		},
		options: [
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Returns reviews from a list of Walmart products',
				action: 'Get reviews from walmart',
				routing: {
					request: {
						method: 'GET',
						url: '/walmart/reviews',
					},
				},
			},
		],
		default: 'reviews',
	},
];

export const walmartReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['walmartReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Links to Walmart products (e.g., https://www.walmart.com/ip/...)',
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
				resource: ['walmartReviews'],
				operation: ['reviews'],
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
		default: 'helpful',
		options: [
			{ name: 'Helpful', value: 'helpful' },
			{ name: 'Rating Ascending', value: 'rating-asc' },
			{ name: 'Rating Descending', value: 'rating-desc' },
			{ name: 'Relevancy', value: 'relevancy' },
			{ name: 'Submission Ascending', value: 'submission-asc' },
			{ name: 'Submission Descending', value: 'submission-desc' },
		],
		displayOptions: {
			show: {
				resource: ['walmartReviews'],
				operation: ['reviews'],
			},
		},
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
				resource: ['walmartReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Oldest timestamp value for items (overrides sort to newest first)',
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
				resource: ['walmartReviews'],
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
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['walmartReviews'],
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
				resource: ['walmartReviews'],
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

// Target Reviews
export const targetReviewsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['targetReviews'],
			},
		},
		options: [
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Returns reviews from a list of Target products',
				action: 'Get reviews from target',
				routing: {
					request: {
						method: 'GET',
						url: '/target/reviews',
					},
				},
			},
		],
		default: 'reviews',
	},
];

export const targetReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['targetReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Links to Target products (e.g., https://www.target.com/p/...)',
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
				resource: ['targetReviews'],
				operation: ['reviews'],
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
		default: 'most_recent',
		options: [
			{ name: 'Most Recent', value: 'most_recent' },
			{ name: 'Highest Rating', value: 'highest_rating' },
			{ name: 'Lowest Rating', value: 'lowest_rating' },
			{ name: 'Helpfulness Descending', value: 'helpfulness_desc' },
		],
		displayOptions: {
			show: {
				resource: ['targetReviews'],
				operation: ['reviews'],
			},
		},
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
				resource: ['targetReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Oldest timestamp value for items (overrides sort to newest first)',
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
				resource: ['targetReviews'],
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
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['targetReviews'],
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
				resource: ['targetReviews'],
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

// Twitter Profiles
export const twitterProfilesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['twitterProfiles'],
			},
		},
		options: [
			{
				name: 'Profiles',
				value: 'profiles',
				description: 'Returns information from the list of Twitter profiles',
				action: 'Get twitter profiles',
				routing: {
					request: {
						method: 'GET',
						url: '/twitter/profiles',
					},
				},
			},
		],
		default: 'profiles',
	},
];

export const twitterProfilesFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['twitterProfiles'],
				operation: ['profiles'],
			},
		},
		description: 'Links to Twitter pages or usernames (e.g., https://www.twitter.com/outscraper, outscraper)',
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
				resource: ['twitterProfiles'],
				operation: ['profiles'],
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
				resource: ['twitterProfiles'],
				operation: ['profiles'],
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
				resource: ['twitterProfiles'],
				operation: ['profiles'],
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

// TikTok Profiles
export const tiktokProfilesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tiktokProfiles'],
			},
		},
		options: [
			{
				name: 'Profiles',
				value: 'profiles',
				description: 'Returns information from the list of TikTok profiles',
				action: 'Get tik tok profiles',
				routing: {
					request: {
						method: 'GET',
						url: '/tiktok/profiles',
					},
				},
			},
		],
		default: 'profiles',
	},
];

export const tiktokProfilesFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tiktokProfiles'],
				operation: ['profiles'],
			},
		},
		description: 'Links to TikTok pages or usernames (e.g., https://www.tiktok.com/@outscraper, outscraper)',
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
				resource: ['tiktokProfiles'],
				operation: ['profiles'],
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
				resource: ['tiktokProfiles'],
				operation: ['profiles'],
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
				resource: ['tiktokProfiles'],
				operation: ['profiles'],
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

// GetApp Reviews
export const getAppReviewsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['getAppReviews'],
			},
		},
		options: [
			{
				name: 'Reviews',
				value: 'reviews',
				description: 'Returns reviews from GetApp apps',
				action: 'Get reviews from get app',
				routing: {
					request: {
						method: 'GET',
						url: '/getapp/reviews',
					},
				},
			},
		],
		default: 'reviews',
	},
];

export const getAppReviewsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['getAppReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Direct links to any GetApp app (e.g., https://www.getapp.com/customer-management-software/a/salesforce/reviews/)',
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
				resource: ['getAppReviews'],
				operation: ['reviews'],
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
		default: 'recommended',
		options: [
			{ name: 'Highest Rated', value: 'highest_rated' },
			{ name: 'Least Recent', value: 'least_recent' },
			{ name: 'Lowest Rated', value: 'lowest_rated' },
			{ name: 'Most Recent', value: 'most_recent' },
			{ name: 'Recommended', value: 'recommended' },
		],
		displayOptions: {
			show: {
				resource: ['getAppReviews'],
				operation: ['reviews'],
			},
		},
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
				resource: ['getAppReviews'],
				operation: ['reviews'],
			},
		},
		description: 'Oldest timestamp value for items (overrides sort to newest first)',
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
				resource: ['getAppReviews'],
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
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['getAppReviews'],
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
				resource: ['getAppReviews'],
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

// Yellow Pages Search
export const yellowPagesSearchOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yellowPagesSearch'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Returns search results from Yellow Pages',
				action: 'Search yellow pages',
				routing: {
					request: {
						method: 'GET',
						url: '/yellowpages-search',
					},
				},
			},
		],
		default: 'search',
	},
];

export const yellowPagesSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['yellowPagesSearch'],
				operation: ['search'],
			},
		},
		description: 'Categories to search for (e.g., bars, restaurants, dentists)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: 'New York, NY',
		displayOptions: {
			show: {
				resource: ['yellowPagesSearch'],
				operation: ['search'],
			},
		},
		description: 'Where to search (e.g., New York, NY)',
		routing: {
			send: {
				type: 'query',
				property: 'location',
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
				resource: ['yellowPagesSearch'],
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
		displayName: 'Region',
		name: 'region',
		type: 'options',
		default: 'US',
		options: [
			{ name: 'United States', value: 'US' },
			{ name: 'United Kingdom', value: 'GB' },
			{ name: 'Canada', value: 'CA' },
			// ... (add all region codes as needed)
		],
		displayOptions: {
			show: {
				resource: ['yellowPagesSearch'],
				operation: ['search'],
			},
		},
		description: 'Country to use for website',
		routing: {
			send: {
				type: 'query',
				property: 'region',
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
				resource: ['yellowPagesSearch'],
				operation: ['search'],
			},
		},
		description: 'Enrichments to apply to the results (comma-separated)',
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
				resource: ['yellowPagesSearch'],
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
				resource: ['yellowPagesSearch'],
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
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['yellowPagesSearch'],
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

// Phone Identity Finder (Whitepages)
export const phoneIdentityFinderOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['phoneIdentityFinder'],
			},
		},
		options: [
			{
				name: 'Find Identity',
				value: 'findIdentity',
				description: 'Returns insights about phone number owners (name, address, etc.)',
				action: 'Find phone identity',
				routing: {
					request: {
						method: 'GET',
						url: '/whitepages-phones',
					},
				},
			},
		],
		default: 'findIdentity',
	},
];

export const phoneIdentityFinderFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['phoneIdentityFinder'],
				operation: ['findIdentity'],
			},
		},
		description: 'Phone number (e.g., +1 281 236 8208)',
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
				resource: ['phoneIdentityFinder'],
				operation: ['findIdentity'],
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
				resource: ['phoneIdentityFinder'],
				operation: ['findIdentity'],
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
				resource: ['phoneIdentityFinder'],
				operation: ['findIdentity'],
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

// Whitepages Addresses Scraper
export const whitepagesAddressesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['whitepagesAddresses'],
			},
		},
		options: [
			{
				name: 'Scrape Addresses',
				value: 'scrapeAddresses',
				description: 'Returns insights about addresses and their residents',
				action: 'Scrape whitepages addresses',
				routing: {
					request: {
						method: 'GET',
						url: '/whitepages-addresses',
					},
				},
			},
		],
		default: 'scrapeAddresses',
	},
];

export const whitepagesAddressesFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['whitepagesAddresses'],
				operation: ['scrapeAddresses'],
			},
		},
		description: 'Addresses (e.g., 321 California Ave, Palo Alto, CA 94306)',
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
				resource: ['whitepagesAddresses'],
				operation: ['scrapeAddresses'],
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
				resource: ['whitepagesAddresses'],
				operation: ['scrapeAddresses'],
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
				resource: ['whitepagesAddresses'],
				operation: ['scrapeAddresses'],
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

// Emails & Contacts
export const emailsAndContactsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['emailsAndContacts'],
			},
		},
		options: [
			{
				name: 'Find Emails & Contacts',
				value: 'findEmailsAndContacts',
				description: 'Finds email addresses, social links, and phones from domains',
				action: 'Find emails and contacts',
				routing: {
					request: {
						method: 'GET',
						url: '/emails-and-contacts',
					},
				},
			},
		],
		default: 'findEmailsAndContacts',
	},
];

// Phones Owners
export const phonesOwnersOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['phonesOwners'],
			},
		},
		options: [
			{
				name: 'Get Owners',
				value: 'getOwners',
				description: 'Returns insights about phone number owners (name, address, etc.)',
				action: 'Get phone owners',
				routing: {
					request: {
						method: 'GET',
						url: '/phones-owners',
					},
				},
			},
		],
		default: 'getOwners',
	},
];

export const emailsAndContactsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['emailsAndContacts'],
				operation: ['findEmailsAndContacts'],
			},
		},
		description: 'Domain or link (e.g., outscraper.com)',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Preferred Contacts',
		name: 'preferredContacts',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['emailsAndContacts'],
				operation: ['findEmailsAndContacts'],
			},
		},
		description: 'Preferred contacts to find (comma-separated)',
		routing: {
			send: {
				type: 'query',
				property: 'preferredContacts',
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
				resource: ['emailsAndContacts'],
				operation: ['findEmailsAndContacts'],
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
				resource: ['emailsAndContacts'],
				operation: ['findEmailsAndContacts'],
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
				resource: ['emailsAndContacts'],
				operation: ['findEmailsAndContacts'],
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

export const phonesOwnersFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['phonesOwners'],
				operation: ['getOwners'],
			},
		},
		description: 'Phone number (e.g., +1 281 236 8208)',
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
				resource: ['phonesOwners'],
				operation: ['getOwners'],
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
				resource: ['phonesOwners'],
				operation: ['getOwners'],
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
				resource: ['phonesOwners'],
				operation: ['getOwners'],
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

export const similarwebOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['similarweb'],
			},
		},
		options: [
			{
				name: 'Get Data',
				value: 'getData',
				description: 'Returns data from Similarweb businesses',
				action: 'Get similarweb data',
				routing: {
					request: {
						method: 'GET',
						url: '/similarweb',
					},
				},
			},
		],
		default: 'getData',
	},
];

export const similarwebFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['similarweb'],
				operation: ['getData'],
			},
		},
		description: 'Domains or websites (e.g., apple.com, https://www.google.com/)',
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
				resource: ['similarweb'],
				operation: ['getData'],
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
				resource: ['similarweb'],
				operation: ['getData'],
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
				resource: ['similarweb'],
				operation: ['getData'],
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

export const companyWebsiteFinderOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['companyWebsiteFinder'],
			},
		},
		options: [
			{
				name: 'Find Website',
				value: 'findWebsite',
				description: 'Returns data from Company Website Finder businesses',
				action: 'Find company website',
				routing: {
					request: {
						method: 'GET',
						url: '/company-website-finder',
					},
				},
			},
		],
		default: 'findWebsite',
	},
];

export const companyWebsiteFinderFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['companyWebsiteFinder'],
				operation: ['findWebsite'],
			},
		},
		description: 'Business names (e.g., Apple Inc, Microsoft Corporation, Tesla Motors)',
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
				resource: ['companyWebsiteFinder'],
				operation: ['findWebsite'],
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
				resource: ['companyWebsiteFinder'],
				operation: ['findWebsite'],
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
				resource: ['companyWebsiteFinder'],
				operation: ['findWebsite'],
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
