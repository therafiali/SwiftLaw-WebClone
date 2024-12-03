import React from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      {params.slug}
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
      <p>{params.slug}</p>
    </div>
  )
}

export default Page
