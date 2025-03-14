import {defineCollection, defineContentConfig, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        posts: defineCollection({
            // Load every file inside the `content` directory
            source: '__posts/**',
            // Specify the type of content in this collection
            type: 'page',
            // Define the schema for each file
            schema: z.object({
                image: z.string(),
                date: z.string(),
                updated: z.string(),
                layout: z.string(),
                navigation: z.boolean().default(false),
                status: z.string().default('publish'),
            })
        }),
        pages: defineCollection({
            // Load every file inside the `content` directory
            source: {
                include: '**',
                exclude: ['**/__posts/**'],
            },
            // Specify the type of content in this collection
            type: 'page',
            // Define the schema for each file
            schema: z.object({
                image: z.string(),
                date: z.string(),
                updated: z.string(),
                layout: z.string(),
                navigation: z.boolean().default(false),
                status: z.string().default('publish'),
            })
        })
    }
})
