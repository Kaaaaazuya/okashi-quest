'use client'

import { useState, useEffect } from 'react'
import { useDebouncedKeyword } from '../hooks/useDebouncedKeyword'
import { OkashiType } from '../types/Okashi'

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const debouncedKeyword = useDebouncedKeyword({ value: inputValue, delay: 1000 })

  useEffect(() => {
    if (debouncedKeyword) {
      const fetchData = async () => {
        const response = await fetch(
          `/api/okashi?keyword=${encodeURIComponent(debouncedKeyword)}`,
        )
        if (response.ok) {
          const data = await response.json()
          setSearchResults(data.item || [])
        }
      }
      fetchData()
    } else {
      setSearchResults([])
    }
  }, [debouncedKeyword])

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='お菓子を検索'
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((okashi: OkashiType) => (
            <li key={okashi.id}>{okashi.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AutoComplete
