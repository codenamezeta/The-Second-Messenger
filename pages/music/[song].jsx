import { useRouter } from 'next/router'

const song = () => {
  const router = useRouter()
  const { song } = router.query
  return (
    <>
      <h1>This is the slug: {song}</h1>
    </>
  )
}

export default song
