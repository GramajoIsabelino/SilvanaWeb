export interface Book {
  id: string
  title: string
  year: string
  blurb: string
  description: string
  coverImage: string
  slug: string
  link: string
}

export interface NewsItem {
  id: string
  title: string
  date: string
  excerpt: string
  link: string
}

export interface Interview {
  id: string
  title: string
  publication: string
  excerpt?: string
  link: string
}

export interface EventItem {
  id: string
  title: string
  date: string
  location: string
  description: string
}
