import { INodeProperties } from 'n8n-workflow';

// Booking.com operations
export const bookingOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['booking'],
      },
    },
    options: [
      {
        name: 'Search',
        value: 'search',
        description: 'Search results from Booking.com',
        action: 'Search on booking',
        routing: {
          request: {
            method: 'GET',
            url: '/booking/search',
          },
        },
      },
      {
        name: 'Reviews',
        value: 'reviews',
        description: 'Get reviews from Booking.com hotels',
        action: 'Get reviews from booking',
        routing: {
          request: {
            method: 'GET',
            url: '/booking/reviews',
          },
        },
      },
      {
        name: 'Prices',
        value: 'prices',
        description: 'Get prices from Booking.com hotels',
        action: 'Get prices from booking',
        routing: {
          request: {
            method: 'GET',
            url: '/booking/prices',
          },
        },
      },
    ],
    default: 'search',
  },
];

// Booking.com Search fields
export const bookingSearchFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['booking'],
        operation: ['search'],
      },
    },
    description: 'Search links with search parameters (e.g., https://www.booking.com/searchresults.html?ss=Rome%2C+Lazio%2C+Italy)',
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
        resource: ['booking'],
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
        resource: ['booking'],
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
        resource: ['booking'],
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
        resource: ['booking'],
        operation: ['search'],
      },
    },
    options: [
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

// Booking.com Reviews fields
export const bookingReviewsFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['booking'],
        operation: ['reviews'],
      },
    },
    description: 'Direct links or IDs of any booking hotel (e.g., https://www.booking.com/hotel/tr/old-town-point-amp-spa-antalya.html, old-town-point-amp-spa-antalya)',
    routing: {
      send: {
        type: 'query',
        property: 'query',
      },
    },
  },
  {
    displayName: 'Reviews Limit',
    name: 'limit',
    type: 'number',
    typeOptions: {
      minValue: 1,
    },
    default: 50,
    displayOptions: {
      show: {
        resource: ['booking'],
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
    displayName: 'Skip',
    name: 'skip',
    type: 'number',
    default: 0,
    displayOptions: {
      show: {
        resource: ['booking'],
        operation: ['reviews'],
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
    displayName: 'Sort',
    name: 'sort',
    type: 'options',
    default: '',
    options: [
      { name: 'Default', value: '' },
      { name: 'Recent Ascending', value: 'f_recent_asc' },
      { name: 'Recent Descending', value: 'f_recent_desc' },
      { name: 'Score Ascending', value: 'f_score_asc' },
      { name: 'Score Descending', value: 'f_score_desc' },
    ],
    displayOptions: {
      show: {
        resource: ['booking'],
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
        resource: ['booking'],
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
    displayName: 'Language',
    name: 'language',
    type: 'string',
    default: 'en',
    displayOptions: {
      show: {
        resource: ['booking'],
        operation: ['reviews'],
      },
    },
    description: 'Language to use for website',
    routing: {
      send: {
        type: 'query',
        property: 'language',
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
        resource: ['booking'],
        operation: ['reviews'],
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
    displayName: 'Async Request',
    name: 'async',
    type: 'boolean',
    default: false,
    displayOptions: {
      show: {
        resource: ['booking'],
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
        resource: ['booking'],
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
        resource: ['booking'],
        operation: ['reviews'],
      },
    },
    options: [
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

// Booking.com Prices fields
export const bookingPricesFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['booking'],
        operation: ['prices'],
      },
    },
    description: 'Direct links or IDs of any booking hotel (e.g., https://www.booking.com/hotel/tr/old-town-point-amp-spa-antalya.html, old-town-point-amp-spa-antalya)',
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
        resource: ['booking'],
        operation: ['prices'],
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
        resource: ['booking'],
        operation: ['prices'],
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
        resource: ['booking'],
        operation: ['prices'],
      },
    },
    options: [
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