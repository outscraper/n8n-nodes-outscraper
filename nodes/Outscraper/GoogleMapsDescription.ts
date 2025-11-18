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
					send: {
						preSend: [
							async function (this, requestOptions) {
								const enrichment = this.getNodeParameter('enrichment', 0) as string[] | undefined;

								if (enrichment && enrichment.length > 0) {
									// Remove 'fields' parameter to get all enrichment fields
									if (requestOptions.qs?.fields) {
										delete requestOptions.qs.fields;
									}

									// Build URL manually as n8n doesn't serialize arrays correctly for this API
									const params = new URLSearchParams();
									for (const [key, value] of Object.entries(requestOptions.qs || {})) {
										if (value !== undefined && value !== null && value !== '') {
											params.append(key, String(value));
										}
									}

									// Add each enrichment as separate parameter
									enrichment.forEach(val => params.append('enrichment', val));

									requestOptions.url = `${requestOptions.url}?${params.toString()}`;
									requestOptions.qs = {};
								}

								return requestOptions;
							},
						],
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
		displayName: 'Enrichment',
		name: 'enrichment',
		type: 'multiOptions',
		default: [],
		displayOptions: {
			show: {
				resource: ['googleMaps'],
				operation: ['search'],
			},
		},
		options: [
			{
				name: 'Chain Info',
				value: 'ai_chain_info',
				description: 'Identifies if a business is part of a chain, adding a true/false indication to your data',
			},
			{
				name: 'Company Insights',
				value: 'company_insights_service',
				description: 'Finds company details such as revenue, size, founding year, public status, etc',
			},
			{
				name: 'Company Website Finder',
				value: 'company_websites_finder',
				description: 'Finds company websites based on business names',
			},
			{
				name: 'Contacts & Leads Enrichment',
				value: 'contacts_n_leads',
				description: 'Finds emails, social links, phones, and other contacts from websites',
			},
			{
				name: 'Disposable Emails Checker',
				value: 'disposable_email_checker',
				description: 'Checks origins of email addresses (disposable, free, or corporate)',
			},
			{
				name: 'Email Address Verifier',
				value: 'emails_validator_service',
				description: 'Validates emails, checks deliverability, filters out blacklists, spam traps, and complainers',
			},
			{
				name: 'Phone Identity Finder',
				value: 'whitepages_phones',
				description: 'Returns insights about phone number owners (name, address, etc.)',
			},
			{
				name: 'Phone Numbers Enricher',
				value: 'phones_enricher_service',
				description: 'Returns phones carrier data (name/type), validates phones, ensures messages deliverability',
			},
			{
				name: 'Trustpilot Scraper',
				value: 'trustpilot_service',
				description: 'Returns data from a list of businesses',
			},
		],
		description: 'Enrichments to apply to the results. Using enrichments increases response time, consider using async=true. Multiple enrichments can be selected.',
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
