import { blogData } from '@/app/data/blog'
import Image from 'next/image'

export default async function Page ({
  params
}: {
  params: Promise<{ slug: number }>
}) {
  const { slug } = await params

  // Find the article with the matching slug
  const article = blogData.find(article => article.id == slug)

  return (
    <div className='mx-auto w-full max-w-[800px] px-4 sm:px-6 lg:px-8 space-y-4 my-20'>
      {article ? (
        <>
          <div>
            <div className=''>
              <div className='mb-8'>
                <Image src={article.imageUrl} alt='' />
              </div>
              <div className='flex flex-col'>
                <h1 className='title font-medium text-3xl tracking-tighter'>
                  {article.title}
                </h1>
              </div>
              <div className='flex justify-between items-center text-sm'>
                <div className='flex items-center space-x-2'>
                  <time dateTime='2024-10-16' className='text-sm text-gray-500'>
                    {article.date}
                  </time>
                </div>
              </div>
              <article className='prose dark:prose-invert mx-auto max-w-full'>
                <p>{article.description}</p>
              </article>
            </div>
          </div>
        </>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  )
}
