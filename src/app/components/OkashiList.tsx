'use client'

import React from 'react'
import { useOkashiList } from '../hooks/useOkashiList'
import { OkashiType } from '../types/Okashi'

export const OkashiList: React.FC = () => {
  const { data, isLoading, isError } = useOkashiList()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading data</div>

  return (
    <div>
      {data?.map((okashi: OkashiType) => (
        <div key={okashi.id}>
          <img src={okashi.image} alt={okashi.name} />
          <h2>{okashi.name}</h2>
          <p>{okashi.maker}</p>
          <p>{okashi.price}円</p>
          <a href={okashi.url}>詳細を見る</a>
        </div>
      ))}
    </div>
  )
}
