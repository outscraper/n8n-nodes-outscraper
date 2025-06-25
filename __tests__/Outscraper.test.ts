/**
 * Basic test file for Outscraper n8n node
 */

describe('Outscraper Node', () => {
  it('should pass a basic test', () => {
    // This is a placeholder test that will always pass
    expect(true).toBe(true);
  });

  it('should verify package.json has required fields', () => {
    // Import package.json
    const packageJson = require('../package.json');
    
    // Check that required fields exist
    expect(packageJson.name).toBe('n8n-nodes-outscraper');
    expect(packageJson.version).toBeDefined();
    expect(packageJson.description).toBeDefined();
    expect(packageJson.keywords).toContain('outscraper');
    expect(packageJson.keywords).toContain('n8n-community-node-package');
  });
});

