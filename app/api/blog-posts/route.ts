import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Disable caching for always fresh posts

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

export async function GET() {
  try {
    // Fetch Substack RSS feed server-side (no CORS issues)
    const response = await fetch('https://biotechbytes10101.substack.com/feed', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BlogFetcher/1.0)',
      },
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed')
    }

    const text = await response.text()

    // Parse RSS XML using simple regex (works well for Substack RSS)
    const items: BlogPost[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(text)) !== null && items.length < 4) {
      const itemContent = match[1]

      // Extract title
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const title = titleMatch ? titleMatch[1] : ''

      // Extract link
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/)
      const link = linkMatch ? linkMatch[1].trim() : ''

      // Extract pubDate
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)
      const pubDate = pubDateMatch ? pubDateMatch[1] : new Date().toISOString()

      // Extract description (with CDATA)
      const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)
      let description = descMatch ? descMatch[1] : ''

      // Clean HTML from description and get plain text excerpt
      description = description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim()
        .slice(0, 250) // Limit to 250 chars

      if (title && link) {
        items.push({ title, link, pubDate, description })
      }
    }

    // Return posts as JSON
    return NextResponse.json({
      posts: items,
      fetchedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)

    // Return fallback posts if fetch fails
    return NextResponse.json({
      posts: [
        {
          title: 'Why Liquid Biopsy Startups Live or Die by Reimbursement',
          link: 'https://biotechbytes10101.substack.com',
          pubDate: new Date('2024-01-15').toISOString(),
          description:
            'Exploring the critical intersection of innovation and healthcare economics. How reimbursement strategy determines the success of diagnostic companies and why clinical utility alone isn\'t enough.',
        },
        {
          title: 'I Thought Doctors Would Never Use AI - Then I Saw AI Scribes',
          link: 'https://biotechbytes10101.substack.com',
          pubDate: new Date('2024-01-08').toISOString(),
          description:
            'A firsthand account of AI adoption in clinical practice. What makes some AI tools succeed where others fail, and lessons for healthcare innovation from the front lines of medicine.',
        },
      ],
      fetchedAt: new Date().toISOString(),
      error: 'Failed to fetch live posts, using fallback data',
    })
  }
}
