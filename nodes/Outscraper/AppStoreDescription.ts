import { INodeProperties } from 'n8n-workflow';

// AppStore operations
export const appStoreOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ['appStore'],
      },
    },
    options: [
      {
        name: 'Reviews',
        value: 'reviews',
        description: 'Returns reviews from AppStore apps',
        action: 'Get reviews from appstore',
        routing: {
          request: {
            method: 'GET',
            url: '/appstore/reviews',
          },
        },
      },
    ],
    default: 'reviews',
  },
];

// AppStore Reviews fields
export const appStoreReviewsFields: INodeProperties[] = [
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        resource: ['appStore'],
        operation: ['reviews'],
      },
    },
    description: 'Direct links or IDs of any AppStore app (e.g., https://apps.apple.com/us/app/telegram-messenger/id686449807, id686449807)',
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
        resource: ['appStore'],
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
    default: 'mosthelpful',
    options: [
      { name: 'Most Helpful', value: 'mosthelpful' },
      { name: 'Most Recent', value: 'mostrecent' },
    ],
    displayOptions: {
      show: {
        resource: ['appStore'],
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
        resource: ['appStore'],
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
        resource: ['appStore'],
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
        resource: ['appStore'],
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
        resource: ['appStore'],
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