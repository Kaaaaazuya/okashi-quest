export type OkashiType = {
  id: string
  name: string
  maker: string
  price: number
  type: number
  url: string
  image: string
  comment: string
}

export type OkashiResponse = {
  status: 'OK' | 'NG'
  error?: string
  count: number
  query: any
  item: OkashiType[]
}
