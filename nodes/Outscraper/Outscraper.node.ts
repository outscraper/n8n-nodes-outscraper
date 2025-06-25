import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import {
	g2ReviewsOperations,
	g2ReviewsFields,
} from './OthersDescription';

import {
	googleMapsSearchOperations,
	googleMapsSearchFields,
	googleMapsReviewsFields,
	googleMapsPhotosFields,
} from './GoogleMapsDescription';

import {
	googleSearchOperations,
	googleSearchFields,
} from './GoogleSearchDescription';

import {
	trustpilotOperations,
	trustpilotFields,
} from './TrustpilotDescription';

import {
	tripadvisorOperations,
	tripadvisorFields,
} from './TripAdvisorDescription';

import {
	expediaOperations,
	expediaSearchFields,
	expediaReviewsFields,
} from './ExpediaDescription';

import {
	youtubeOperations,
	youtubeSearchFields,
	youtubeChannelFields,
	youtubeCommentsFields,
} from './YouTubeDescription';

import {
	yelpOperations,
	yelpFields,
} from './YelpDescription';

import {
	productHuntOperations,
	productHuntFields,
} from './ProductHuntDescription';

import {
	indeedOperations,
	indeedFields,
} from './IndeedDescription';

export class Outscraper implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Outscraper',
		name: 'outscraper',
		icon: 'file:outscraper.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Interact with Outscraper API',
		defaults: {
			name: 'Outscraper',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'outscraperApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.apiUrl}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			qs: {
				apiKey: '={{$credentials.apiKey}}',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Expedia',
            value: 'expedia',
          },
          {
            name: 'G2 Review',
            value: 'g2Reviews',
          },
          {
            name: 'Google Map',
            value: 'googleMaps',
          },
          {
            name: 'Google Search',
            value: 'googleSearch',
          },
          {
            name: 'Indeed',
            value: 'indeed',
          },
          {
            name: 'Product Hunt',
            value: 'productHunt',
          },
          {
            name: 'TripAdvisor',
            value: 'tripadvisor',
          },
          {
            name: 'Trustpilot',
            value: 'trustpilot',
          },
          {
            name: 'Yelp',
            value: 'yelp',
          },
          {
            name: 'YouTube',
            value: 'youtube',
          },
        ],
				default: 'googleMaps',
			},

			// Google Maps operations
			...googleMapsSearchOperations,
			...googleMapsSearchFields,
			...googleMapsReviewsFields,
			...googleMapsPhotosFields,

			// Google Search operations
			...googleSearchOperations,
			...googleSearchFields,

			// G2 Reviews operations
			...g2ReviewsOperations,
			...g2ReviewsFields,

			// Trustpilot operations
			...trustpilotOperations,
			...trustpilotFields,

			// TripAdvisor operations
			...tripadvisorOperations,
			...tripadvisorFields,

			// Expedia operations
			...expediaOperations,
			...expediaSearchFields,
			...expediaReviewsFields,

			// YouTube operations
			...youtubeOperations,
			...youtubeSearchFields,
			...youtubeChannelFields,
			...youtubeCommentsFields,

			// Yelp operations
			...yelpOperations,
			...yelpFields,

			// Product Hunt operations
			...productHuntOperations,
			...productHuntFields,

			// Indeed operations
			...indeedOperations,
			...indeedFields,
		],
	};
}
