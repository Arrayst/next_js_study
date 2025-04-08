'use client'

import { useParams, useSearchParams, useRouter } from 'next/navigation'
export default async function Greet() {
  const router = useRouter()
  const params = useParams()                // /greet/[name]
  const searchParams = useSearchParams()   // ?lang=ko

  const name = params.name
  const lang = searchParams.get('lang')
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {lang && <p>Language: {lang}</p>}
    </div>
  );
}