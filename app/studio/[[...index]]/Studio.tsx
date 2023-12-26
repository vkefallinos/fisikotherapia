'use client'

import { init } from 'lib/demo.data'
import { NextStudio } from 'next-sanity/studio'
import config from 'sanity.config'
export default function Studio() {
  return (
    <div>
      <button
        onClick={() => {
          init()
        }}
      >
        initialize
      </button>
      <NextStudio config={config} />{' '}
    </div>
  )
}
