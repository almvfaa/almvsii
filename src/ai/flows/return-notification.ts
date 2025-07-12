'use server';

/**
 * @fileOverview This file contains the Genkit flow for generating a return notification to the Supplier and Legal roles.
 *
 * - generateReturnNotification - A function that generates the return notification.
 * - ReturnNotificationInput - The input type for the generateReturnNotification function.
 * - ReturnNotificationOutput - The return type for the generateReturnNotification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReturnNotificationInputSchema = z.object({
  supplierName: z.string().describe('The name of the supplier.'),
  productName: z.string().describe('The name of the returned product.'),
  returnReason: z.string().describe('The reason for the return.'),
  quantityReturned: z.number().describe('The quantity of the product being returned.'),
  purchaseOrderNumber: z.string().describe('The purchase order number associated with the return.'),
  dateOfReturn: z.string().describe('The date the return was registered.'),
});
export type ReturnNotificationInput = z.infer<typeof ReturnNotificationInputSchema>;

const ReturnNotificationOutputSchema = z.object({
  notificationContent: z.string().describe('The content of the return notification.'),
});
export type ReturnNotificationOutput = z.infer<typeof ReturnNotificationOutputSchema>;

export async function generateReturnNotification(
  input: ReturnNotificationInput
): Promise<ReturnNotificationOutput> {
  return generateReturnNotificationFlow(input);
}

const returnNotificationPrompt = ai.definePrompt({
  name: 'returnNotificationPrompt',
  input: {schema: ReturnNotificationInputSchema},
  output: {schema: ReturnNotificationOutputSchema},
  prompt: `You are an AI assistant specialized in generating return notifications for a warehouse.

  Based on the provided information about the return, draft a notification to both the Supplier and Legal departments.
  The notification should clearly explain the reason for the return, the product details, and any relevant information for initiating the warranty process.

  Supplier Name: {{supplierName}}
  Product Name: {{productName}}
  Return Reason: {{returnReason}}
  Quantity Returned: {{quantityReturned}}
  Purchase Order Number: {{purchaseOrderNumber}}
  Date of Return: {{dateOfReturn}}

  Notification Content:`,
});

const generateReturnNotificationFlow = ai.defineFlow(
  {
    name: 'generateReturnNotificationFlow',
    inputSchema: ReturnNotificationInputSchema,
    outputSchema: ReturnNotificationOutputSchema,
  },
  async input => {
    const {output} = await returnNotificationPrompt(input);
    return output!;
  }
);
