import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
    try {
        // Path to your HTML file within the Next.js project
        const filePath = join(process.cwd(), 'public', 'corvettetest.html');

        // Read the content of the HTML file
        const htmlContent = await readFile(filePath, 'utf8');

        // Set the content type to 'text/html'
        res.setHeader('Content-Type', 'text/html');

        // Send the HTML content
        res.status(200).send(htmlContent);
    } catch (error) {
        // Handle any errors that occur during file reading
        res.status(500).send('Error loading the page');
    }
}
