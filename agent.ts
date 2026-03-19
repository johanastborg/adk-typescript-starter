import { FunctionTool, LlmAgent } from '@google/adk';
import { z } from 'zod';

/* Mock tool implementation */
const getCurrentTime = new FunctionTool({
    name: 'get_current_time',
    description: 'Returns the current time in a specified city.',
    parameters: z.object({
        city: z.string().describe("The name of the city for which to retrieve the current time."),
    }),
    execute: ({ city }) => {
        return { status: 'success', report: `The current time in ${city} is 10:30 AM` };
    },
});

/* Mock tool implementation for street addresses */
const getStreetAddresses = new FunctionTool({
    name: 'get_street_addresses',
    description: 'Returns the top 5 street addresses for a specified city and zip code.',
    parameters: z.object({
        city: z.string().describe("The name of the city."),
        zip: z.string().describe("The zip code."),
    }),
    execute: ({ city, zip }) => {
        const addresses = [
            `123 Main St, ${city}, ${zip}`,
            `456 Elm St, ${city}, ${zip}`,
            `789 Oak St, ${city}, ${zip}`,
            `101 Pine St, ${city}, ${zip}`,
            `202 Maple St, ${city}, ${zip}`,
        ];
        return { status: 'success', report: `Top 5 addresses in ${city} (${zip}):\n${addresses.join('\n')}` };
    },
});

export const rootAgent = new LlmAgent({
    name: 'hello_time_agent',
    model: 'gemini-2.5-flash',
    description: 'Tells the current time in a specified city and provides street addresses.',
    instruction: `You are a helpful assistant that tells the current time in a city and can provide top street addresses for a city and zip code.
                Use the 'getCurrentTime' tool for time inquiries.
                Use the 'getStreetAddresses' tool for street address inquiries.`,
    tools: [getCurrentTime, getStreetAddresses],
});