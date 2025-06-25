import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OutscraperApi implements ICredentialType {
	name = 'outscraperApi';
	displayName = 'Outscraper API';
	documentationUrl = 'https://app.outscraper.com/api-docs';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
			description: 'The API key from your Outscraper account',
		},
		{
			displayName: 'API URL',
			name: 'apiUrl',
			type: 'string',
			default: 'https://api.outscraper.cloud',
			required: true,
			description: 'The base URL for the Outscraper API',
		},
	];

	// This allows the credential to be used by other parts of n8n
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.apiUrl}}',
			url: '/maps/search-v3?query=test&limit=1&async=false&apiKey={{$credentials.apiKey}}',
		},
	};
}
