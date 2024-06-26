import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
    // Set CORS headers
    // Allows all domains (*) to access your API
    res.setHeader('Access-Control-Allow-Origin', '*');

    // You could also restrict it to a specific domain
    // res.setHeader('Access-Control-Allow-Origin', 'https://example.com');

    // Allow Credentials
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Allowed request methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');

    // Allowed headers
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        // Handle OPTIONS Method for preflight request
        res.status(200).end();
        return;
    }

    try {
        // Path to your HTML file within the Next.js project
        const filePath = join(process.cwd(), 'public', 'corvettetest.html');

        // Read the content of the HTML file
        const htmlContent = await readFile(filePath, 'utf8');

        // Send the HTML content with the correct content type
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
    } catch (error) {
        // Handle errors, such as File Not Found
        console.error('Failed to read HTML file:', error);
        res.status(500).send('Error loading the page');
    }
}
