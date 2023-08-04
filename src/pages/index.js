import { Inter } from 'next/font/google'
import { Products } from '../../Components/Products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1> E-Books </h1>
      <Products />
    </>
  )
}
