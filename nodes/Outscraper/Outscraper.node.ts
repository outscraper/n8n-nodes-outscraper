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
	companyInsightsOperations,
	companyInsightsFields,
	universalScraperOperations,
	universalScraperFields,
	webPageScreenshoterOperations,
	webPageScreenshoterFields,
	walmartReviewsOperations,
	walmartReviewsFields,
	targetReviewsOperations,
	targetReviewsFields,
	twitterProfilesOperations,
	twitterProfilesFields,
	tiktokProfilesOperations,
	tiktokProfilesFields,
	getAppReviewsOperations,
	getAppReviewsFields,
	yellowPagesSearchOperations,
	yellowPagesSearchFields,
	phoneIdentityFinderOperations,
	phoneIdentityFinderFields,
	whitepagesAddressesOperations,
	whitepagesAddressesFields,
	phonesOwnersOperations,
	phonesOwnersFields,
	similarwebOperations,
	similarwebFields,
	companyWebsiteFinderOperations,
	companyWebsiteFinderFields,
	emailsAndContactsOperations,
	emailsAndContactsFields,
} from './OthersDescription';

import {
	airbnbOperations,
	airbnbSearchFields,
	airbnbReviewsFields,
} from './AirbnbDescription';

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
						name: 'Airbnb',
						value: 'airbnb',
					},
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
						name: 'Company Website Finder',
						value: 'companyWebsiteFinder',
          },
          {
						name: 'Emails & Contact',
						value: 'emailsAndContacts',
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
						name: 'GetApp Review',
						value: 'getAppReviews',
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
						name: 'Phone Identity Finder',
						value: 'phoneIdentityFinder',
					},
					{
						name: 'Phones Owner',
						value: 'phonesOwners',
					},
					{
						name: 'Product Hunt',
						value: 'productHunt',
					},
					{
						name: 'Similarweb',
						value: 'similarweb',
					},
					{
						name: 'Target Review',
						value: 'targetReviews',
					},
					{
						name: 'TikTok Profile',
						value: 'tiktokProfiles',
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
						name: 'Twitter Profile',
						value: 'twitterProfiles',
					},
					{
						name: 'Universal AI Scraper',
						value: 'universalScraper',
					},
					{
						name: 'Walmart Review',
						value: 'walmartReviews',
					},
					{
						name: 'WebPage Screenshoter',
						value: 'webPageScreenshoter',
					},
					{
						name: 'Whitepages Addresses Scraper',
						value: 'whitepagesAddresses',
					},
					{
						name: 'Yellow Pages Search',
						value: 'yellowPagesSearch',
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

			// Company Insights operations
			...companyInsightsOperations,
			...companyInsightsFields,

			// Universal Scraper operations
			...universalScraperOperations,
			...universalScraperFields,

			// WebPage Screenshoter operations
			...webPageScreenshoterOperations,
			...webPageScreenshoterFields,

			// Airbnb operations
			...airbnbOperations,
			...airbnbSearchFields,
			...airbnbReviewsFields,

			// Walmart Reviews operations
			...walmartReviewsOperations,
			...walmartReviewsFields,

			// Target Reviews operations
			...targetReviewsOperations,
			...targetReviewsFields,

			// Twitter Profiles operations
			...twitterProfilesOperations,
			...twitterProfilesFields,

			// TikTok Profiles operations
			...tiktokProfilesOperations,
			...tiktokProfilesFields,

			// GetApp Reviews operations
			...getAppReviewsOperations,
			...getAppReviewsFields,

			// Yellow Pages Search operations
			...yellowPagesSearchOperations,
			...yellowPagesSearchFields,

			// Phone Identity Finder operations
			...phoneIdentityFinderOperations,
			...phoneIdentityFinderFields,

			// Whitepages Addresses Scraper operations
			...whitepagesAddressesOperations,
			...whitepagesAddressesFields,

			// Phones Owners operations
			...phonesOwnersOperations,
			...phonesOwnersFields,

			// Similarweb operations
			...similarwebOperations,
			...similarwebFields,

			// Company Website Finder operations
			...companyWebsiteFinderOperations,
			...companyWebsiteFinderFields,

			// Emails & Contacts operations
			...emailsAndContactsOperations,
			...emailsAndContactsFields,
		],
	};
}
