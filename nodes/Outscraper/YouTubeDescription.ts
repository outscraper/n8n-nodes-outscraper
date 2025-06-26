import { INodeProperties } from 'n8n-workflow';

export const youtubeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['youtube'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				description: 'Search for videos on YouTube',
				action: 'Search for videos on you tube',
			},
			{
				name: 'Channel',
				value: 'channel',
				description: 'Get YouTube channel information',
				action: 'Get you tube channel information',
			},
			{
				name: 'Comments',
				value: 'comments',
				description: 'Get comments from YouTube videos',
				action: 'Get comments from you tube videos',
			},
		],
		default: 'search',
	},
];

export const youtubeSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Queries to search on YouTube (e.g., funny cats videos)',
		placeholder: 'e.g., funny cats videos',
	},
	{
		displayName: 'Async',
		name: 'async',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['search'],
			},
		},
		default: false,
		description: 'Whether to execute the request asynchronously',
	},
	{
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'URL address (callback) to which Outscraper will create a POST request once the task is finished',
		placeholder: 'https://your-webhook-url.com',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['search'],
			},
		},
		default: 50,
		description: 'Max number of results to return',
		placeholder: '100',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Fields to include in the response (comma-separated)',
				placeholder: 'e.g., query,video_id,video_title',
			},
			{
				displayName: 'UI',
				name: 'ui',
				type: 'boolean',
				default: false,
				description: 'Whether to execute the request as a UI task',
			},
		],
	},
];

export const youtubeChannelFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['channel'],
			},
		},
		default: '',
		description: 'Domain or link to YouTube channel (e.g., https://www.youtube.com/@outscraper, outscraper)',
		placeholder: 'e.g., outscraper',
	},
	{
		displayName: 'Async',
		name: 'async',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['channel'],
			},
		},
		default: false,
		description: 'Whether to execute the request asynchronously',
	},
	{
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['channel'],
			},
		},
		default: '',
		description: 'URL address (callback) to which Outscraper will create a POST request once the task is finished',
		placeholder: 'https://your-webhook-url.com',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['channel'],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Fields to include in the response (comma-separated)',
				placeholder: 'e.g., title,description,channel_id',
			},
			{
				displayName: 'UI',
				name: 'ui',
				type: 'boolean',
				default: false,
				description: 'Whether to execute the request as a UI task',
			},
		],
	},
];

export const youtubeCommentsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['comments'],
			},
		},
		default: '',
		description: 'Video links or video IDs (e.g., https://www.youtube.com/watch?v=ph5pHgklaZ0, ph5pHgklaZ0)',
		placeholder: 'e.g., ph5pHgklaZ0',
	},
	{
		displayName: 'Async',
		name: 'async',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['comments'],
			},
		},
		default: false,
		description: 'Whether to execute the request asynchronously',
	},
	{
		displayName: 'Webhook',
		name: 'webhook',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['comments'],
			},
		},
		default: '',
		description: 'URL address (callback) to which Outscraper will create a POST request once the task is finished',
		placeholder: 'https://your-webhook-url.com',
	},
	{
		displayName: 'Limit',
		name: 'perQuery',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['comments'],
			},
		},
		default: 100,
		description: 'The maximum number of comments to return per query',
		placeholder: '100',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['youtube'],
				operation: ['comments'],
			},
		},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				description: 'Fields to include in the response (comma-separated)',
				placeholder: 'e.g., ID,content,published',
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: 'en',
				description: 'The language to use for the request',
				placeholder: 'e.g., en',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: 'US',
				description: 'The region to use for the request',
				placeholder: 'e.g., US',
			},
			{
				displayName: 'UI',
				name: 'ui',
				type: 'boolean',
				default: false,
				description: 'Whether to execute the request as a UI task',
			},
		],
	},
];
