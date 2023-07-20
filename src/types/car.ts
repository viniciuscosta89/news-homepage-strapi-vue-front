export type CarDataResponse = {
  attributes: Car
  id: number
}

export type Car = {
  brand: string
  createdAt: string
  description: string
  excerpt: string
  model: string
  picture: {
    data: {
      attributes: {
        alternativeText: string | null
        formats: {
          large: {
            url: string
          }
          medium: {
            url: string
          }
          small: {
            url: string
          }
          thumbnail: {
            url: string
          }
        }
        url: string
      }
    }
  }
  publishedAt: string
  updatedAt: string
  year: number
}
