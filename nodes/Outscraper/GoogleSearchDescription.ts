import { INodeProperties } from 'n8n-workflow';

// Google Search operations
export const googleSearchOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'search',
		displayOptions: {
			show: {
				resource: ['googleSearch'],
			},
		},
		options: [
      {
        name: 'Search',
            value: 'search',
            action: 'Search a google search',
      },
      {
        displayName: 'Date Range',
        name: 'tbs',
        type: 'options',
        options: [
          {
            name: 'Past 24 Hours',
            value: 'd',
          },
          {
            name: 'Past Hour',
            value: 'h',
          },
          {
            name: 'Past Month',
            value: 'm',
          },
          {
            name: 'Past Week',
            value: 'w',
          },
          {
            name: 'Past Year',
            value: 'y',
          },
        ],
        default: 'd',
        description: 'Filter results by date range',
        routing: {
          send: {
            type: 'query',
            property: 'tbs',
          },
        },
      },
      {
        displayName: 'Fields',
        name: 'fields',
        action: 'Fields a google search',
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
        displayName: 'Region',
        name: 'region',
        action: 'Region a google search',
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
        displayName: 'Skip',
        name: 'skip',
        action: 'Skip a google search',
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
        displayName: 'UULE Parameter',
        name: 'uule',
        action: 'Uule a google search',
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
    ],
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
				operation: ['search'],
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
];
