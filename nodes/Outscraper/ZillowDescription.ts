import { INodeProperties } from 'n8n-workflow';

// Zillow operations
export const zillowOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['zillow'],
      },
    },
    options: [
      {
        name: 'Search',
        value: 'search',
        description: 'Returns listings from Zillow',
        action: 'Search on zillow',
        routing: {
          request: {
            method: 'GET',
            url: '/zillow/search',
          },
        },
      },
    ],
    default: 'search',
  },
];

// Zillow Search fields
export const zillowSearchFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['zillow'],
        operation: ['search'],
      },
    },
    description: 'Search links with search parameters (e.g., Jacksonville, FL, https://www.zillow.com/jacksonville-fl/sold/?searchQueryState=...)',
    routing: {
      send: {
        type: 'query',
        property: 'query',
      },
    },
  },
  {
    displayName: 'Main Filter',
    name: 'mainFilter',
    type: 'options',
    default: 'for_sale',
    options: [
      { name: 'For Sale', value: 'for_sale' },
      { name: 'For Rent', value: 'for_rent' },
      { name: 'Sold', value: 'sold' },
    ],
    displayOptions: {
      show: {
        resource: ['zillow'],
        operation: ['search'],
      },
    },
    description: 'The main filter for the search',
    routing: {
      send: {
        type: 'query',
        property: 'mainFilter',
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
        resource: ['zillow'],
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
    displayName: 'Skip',
    name: 'skip',
    type: 'number',
    default: 0,
    displayOptions: {
      show: {
        resource: ['zillow'],
        operation: ['search'],
      },
    },
    description: 'Number of items to skip (pagination)',
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
        resource: ['zillow'],
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
        resource: ['zillow'],
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
        resource: ['zillow'],
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