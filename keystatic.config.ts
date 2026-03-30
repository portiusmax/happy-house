import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    insights: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'src/content/insights/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        niche: fields.select({
          label: 'Niche',
          options: [
            { label: 'Roofing', value: 'Roofing' },
            { label: 'HVAC', value: 'HVAC' },
            { label: 'Plumbing', value: 'Plumbing' },
            { label: 'Water Damage Restoration', value: 'Water Damage Restoration' },
            { label: 'Electrical', value: 'Electrical' },
            { label: 'Foundation Repair', value: 'Foundation Repair' },
            { label: 'Mold Remediation', value: 'Mold Remediation' },
            { label: 'Pest Control', value: 'Pest Control' },
            { label: 'General', value: 'General' },
          ],
          defaultValue: 'General',
        }),
        readTime: fields.text({ label: 'Read Time', defaultValue: '5 min' }),
        publishDate: fields.date({ label: 'Publish Date' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Published', value: 'published' },
            { label: 'Draft', value: 'draft' },
          ],
          defaultValue: 'draft',
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    niches: collection({
      label: 'Niche Pages',
      slugField: 'name',
      path: 'src/content/niches/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Niche Name' } }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        heroHeadline: fields.text({ label: 'Hero Headline' }),
        avgTicket: fields.text({ label: 'Average Ticket' }),
        content: fields.markdoc({ label: 'Page Content' }),
      },
    }),
  },
});
