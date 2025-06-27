import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import {
	g2ReviewsOperations,
	g2ReviewsFields,
} from './G2Description';

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

import {
	bookingOperations,
	bookingSearchFields,
	bookingReviewsFields,
	bookingPricesFields,
} from './BookingDescription';

import {
	zillowOperations,
	zillowSearchFields,
} from './ZillowDescription';

import {
	appStoreOperations,
	appStoreReviewsFields,
} from './AppStoreDescription';

import {
	geocodingOperations,
	geocodingFields,
	reverseGeocodingOperations,
	reverseGeocodingFields,
	companyInsightsOperations,
	companyInsightsFields,
	universalScraperOperations,
	universalScraperFields,
	webPageScreenshoterOperations,
	webPageScreenshoterFields,
} from './OthersDescription';

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
						name: 'AppStore',
						value: 'appStore',
					},
					{
						name: 'Booking',
						value: 'booking',
					},
					{
						name: 'Company Insight',
						value: 'companyInsights',
					},
					{
						name: 'Expedia',
						value: 'expedia',
					},
					{
						name: 'G2 Review',
						value: 'g2Reviews',
					},
					{
						name: 'Geocoding',
						value: 'geocoding',
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
						name: 'Reverse Geocoding',
						value: 'reverseGeocoding',
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
						name: 'Universal Scraper',
						value: 'universalScraper',
					},
					{
						name: 'WebPage Screenshoter',
						value: 'webPageScreenshoter',
					},
					{
						name: 'Yelp',
						value: 'yelp',
					},
					{
						name: 'YouTube',
						value: 'youtube',
					},
					{
						name: 'Zillow',
						value: 'zillow',
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

			// Booking.com operations
			...bookingOperations,
			...bookingSearchFields,
			...bookingReviewsFields,
			...bookingPricesFields,

			// Zillow operations
			...zillowOperations,
			...zillowSearchFields,

			// AppStore operations
			...appStoreOperations,
			...appStoreReviewsFields,

			// Geocoding operations
			...geocodingOperations,
			...geocodingFields,

			// Reverse Geocoding operations
			...reverseGeocodingOperations,
			...reverseGeocodingFields,

			// Company Insights operations
			...companyInsightsOperations,
			...companyInsightsFields,

			// Universal Scraper operations
			...universalScraperOperations,
			...universalScraperFields,

			// WebPage Screenshoter operations
			...webPageScreenshoterOperations,
			...webPageScreenshoterFields,
		],
	};
}
