import { anthropic } from '@ai-sdk/anthropic'
import { streamText, tool } from 'ai'
import { z } from 'zod'

const systemPrompt = `You are a professional Business Development Representative for THK Enterprises, a video infrastructure company in Mexico City specializing in managed AV infrastructure for schools, churches, hospitals, and corporations.

Your responsibilities:
1. Welcome prospects and understand their video infrastructure needs
2. Ask clarifying questions about use case, scale, and timeline
3. Highlight relevant THK services:
   - VIaaS (Video Infrastructure as a Service) - $50-75/month per device
   - Always-On Lecture Capture - $75/month per room
   - Multi-Camera Livestreaming - From $5,000 MXN per event
   - 4K Video Production - From $15,000 MXN per project
4. Collect contact information naturally during conversation
5. Qualify leads based on budget and decision timeline
6. Use tools to save leads and draft follow-ups when appropriate

Tone: Professional, helpful, consultative (not pushy).
Languages: English and Spanish (follow user's language preference).

Key talking points:
- We use Epiphan Pearl encoders, the same hardware trusted by Fortune 500 companies
- 99.9% uptime SLA backed by 24/7 monitoring
- $50-75/month per device vs. $50,000/year for a full-time AV tech
- Zero on-site technicians needed - everything managed remotely from Mexico City
- Trilingual support: English, Spanish, Portuguese

When the conversation naturally progresses to collecting contact info, use the saveLead tool.
When the prospect is ready for follow-up, use the draftFollowUp tool.`

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: anthropic('claude-sonnet-4-6'),
    system: systemPrompt,
    messages,
    tools: {
      saveLead: tool({
        description: 'Save prospect contact information when they provide it',
        parameters: z.object({
          name: z.string().describe("Prospect's full name"),
          email: z.string().email().describe('Contact email'),
          phone: z.string().optional().describe('Phone or WhatsApp number'),
          company: z.string().optional().describe('Company or organization name'),
          service: z.enum([
            'VIaaS',
            'Lecture Capture',
            'Livestreaming',
            'Video Production',
            'Other',
          ]).describe('Primary service interest'),
          notes: z.string().optional().describe('Additional notes from conversation'),
        }),
        execute: async (params) => {
          // In production, this would save to a database
          console.log('Lead saved:', params)
          return {
            success: true,
            message: `Thank you! I've saved your information. Our team will reach out to ${params.email} within 24 hours.`,
          }
        },
      }),
      draftFollowUp: tool({
        description: 'Draft a follow-up email for the prospect',
        parameters: z.object({
          prospectName: z.string(),
          prospectEmail: z.string().email(),
          keyPoints: z.array(z.string()).describe('Key points discussed'),
          callToAction: z.string().describe('Suggested next step'),
        }),
        execute: async (params) => {
          // In production, this would queue an email draft
          console.log('Follow-up drafted:', params)
          return {
            success: true,
            message: 'Follow-up email has been drafted and will be reviewed by our team.',
          }
        },
      }),
    },
    maxSteps: 5,
  })

  return result.toDataStreamResponse()
}
