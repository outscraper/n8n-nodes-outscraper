# n8n-nodes-outscraper

![Outscraper Logo](https://outscraper.com/static/images/logo.svg)

This is an n8n community node for integrating with the [Outscraper API](https://outscraper.com). It allows you to automate data extraction from various online platforms including Google Maps, Google Search, YouTube, Trustpilot, TripAdvisor, Expedia, and G2 Reviews.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Usage](#usage)  
[Resources](#resources)  
[Version History](#version-history)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Nodes (Recommended)

For users on n8n v0.187+:

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-outscraper` in the input field
4. Agree to the risks of using community nodes
5. Click **Install**

### Manual Installation

To install the node manually:

1. Open your n8n installation folder
2. Go to the `node_modules` folder
3. Create a new folder called `n8n-nodes-outscraper`
4. Download the [latest release](https://github.com/outscraper/outscraper-n8n/releases) and extract it into the folder
5. Restart n8n

### npm Installation

To install via npm:

```bash
npm install n8n-nodes-outscraper
```

## Operations

The Outscraper node supports the following platforms and operations:

### Google Maps
- **Search**: Search for businesses on Google Maps
- **Reviews**: Get reviews for businesses on Google Maps
- **Photos**: Get photos for businesses on Google Maps

### Google Search
- **Search**: Perform Google search queries

## Credentials

To use this node, you need an Outscraper API key.

1. Create an account on [Outscraper](https://app.outscraper.com/signup)
2. Navigate to the [API section](https://app.outscraper.com/api) to get your API key
3. In n8n, create new credentials of type **Outscraper API**
4. Enter your API key and the API URL (default: https://api.outscraper.cloud)

## Usage

1. Add the Outscraper node to your workflow
2. Select the resource (e.g., Google Maps) you want to work with
3. Choose the operation (e.g., Search, Reviews)
4. Configure the required parameters
5. Connect the node to the rest of your workflow

### Example: Search for Businesses on Google Maps

1. Add the Outscraper node
2. Select **Google Maps** as the resource
3. Select **Search** as the operation
4. Enter your search query (e.g., "coffee shops in New York")
5. Set additional parameters like limit, async mode, etc.
6. Run the workflow to get the search results

## Resources

* [Outscraper Website](https://outscraper.com)
* [Outscraper API Documentation](https://app.outscraper.com/api-docs)
* [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

## Version History

### 0.1.0 (2025-06-25)

* Initial release
* Support for Google Maps, Google Search, YouTube, Trustpilot, TripAdvisor, Expedia, and G2 Reviews

## License

[MIT](LICENSE.md)
