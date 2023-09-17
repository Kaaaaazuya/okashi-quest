'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useOkashiList } from '../hooks/useOkashiList'
import { OkashiType } from '../types/Okashi'
import useModal from '../hooks/useModal'
import Modal from './Modal'

export const OkashiList: React.FC = () => {
  const { data, isLoading, isError } = useOkashiList()
  const [selectedOkashi, setSelectedOkashi] = useState<OkashiType | null>(null)
  const { isOpen, openModal, closeModal } = useModal()

  const handleOkashiClick = (okashi: OkashiType) => {
    console.log('onclick')
    setSelectedOkashi(okashi)
    openModal()
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading data</div>

  return (
    <div style={{ display: 'flex', gap: 16, flexFlow: 'column' }}>
      {data?.map((okashi: OkashiType) => (
        <div
          key={okashi.id}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => handleOkashiClick(okashi)}
          style={{ display: 'flex', gap: 16 }}
        >
          <Image src={okashi.image} alt={okashi.name} width={40} height={40} />
          <h2>{okashi.name}</h2>
        </div>
      ))}
      {/* お菓子の詳細を表示するモーダル */}
      {isOpen && (
        <Modal onClose={closeModal}>
          {selectedOkashi && (
            <>
              {' '}
              <h2 style={{ color: 'black' }}>{selectedOkashi.name}</h2>
              <Image
                src={selectedOkashi.image}
                alt={selectedOkashi.name}
                width={100}
                height={100}
              />
              <p style={{ color: 'black' }}>{selectedOkashi.maker}</p>
              <p style={{ color: 'black' }}>{selectedOkashi.price}円</p>
              <p style={{ color: 'black' }}>{selectedOkashi.type}</p>
              <a style={{ color: 'black' }} href={selectedOkashi.url} target='_blank'>
                url
              </a>
            </>
          )}
          <p>見つかりませんでした。</p>
        </Modal>
      )}
    </div>
  )
}
