import { INodeProperties } from 'n8n-workflow';

// Airbnb operations
export const airbnbOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['airbnb'],
      },
    },
    options: [
      {
        name: 'Search',
        value: 'search',
        description: 'Returns search results from Airbnb',
        action: 'Search on airbnb',
        routing: {
          request: {
            method: 'GET',
            url: '/airbnb/search',
          },
        },
      },
      {
        name: 'Reviews',
        value: 'reviews',
        description: 'Returns reviews from Airbnb accommodations',
        action: 'Get reviews from airbnb',
        routing: {
          request: {
            method: 'GET',
            url: '/airbnb/reviews',
          },
        },
      },
    ],
    default: 'search',
  },
];

// Airbnb Search fields
export const airbnbSearchFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['airbnb'],
        operation: ['search'],
      },
    },
    description: 'Airbnb Search URLs (e.g., https://www.airbnb.com/s/Italy/homes?tab_id=...)',
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
        resource: ['airbnb'],
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
    displayName: 'Async Request',
    name: 'async',
    type: 'boolean',
    default: false,
    displayOptions: {
      show: {
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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

// Airbnb Reviews fields
export const airbnbReviewsFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['airbnb'],
        operation: ['reviews'],
      },
    },
    description: 'Direct links or IDs of any Airbnb accommodation (e.g., https://www.airbnb.com/rooms/927539322986647456, 1125445123101274851)',
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
        resource: ['airbnb'],
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
    default: 'MOST_RECENT',
    options: [
      { name: 'Most Recent', value: 'MOST_RECENT' },
      { name: 'Rating Descending', value: 'RATING_DESC' },
      { name: 'Rating Ascending', value: 'RATING_ASC' },
    ],
    displayOptions: {
      show: {
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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
        resource: ['airbnb'],
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