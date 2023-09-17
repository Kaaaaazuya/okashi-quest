'use client'

import useSWR from 'swr'
import { OkashiResponse } from '../types/Okashi'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useOkashiList = () => {
  const { data, error } = useSWR<OkashiResponse>(
    '/api/okashi', // App Routerのパスを指定
    fetcher,
  )

  return {
    data: data?.item,
    isLoading: !error && !data,
    isError: error,
  }
}
