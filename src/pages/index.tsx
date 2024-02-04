import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'
import TopBar from '@/components/TopBar'
import ImageCarousel from '@/components/ImageCarousel'
const images = [
  '/cocoon.png',
  '/cocoon-app.png',
  '/Kai.jpg',
  // 他の画像を追加することもできます
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <NavBar />
      <ImageCarousel/>
      <main className="bg-white min-h-screen p-8">
        <section className="text-center">
          <div
            className="circle bg-white rounded-full h-64 w-64 block mx-auto mb-8"
            style={{ backgroundImage: `url('/Kai.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          <h1 className="text-5xl font-bold  mb-40 text-[#062438]">Hello! This is Kai!</h1>
        </section>

        <section className="mt-1">
          <h2 className="text-7xl font-bold mb-20 text-[#062438]">Work.</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                title="Cocoon"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                imageUrl="/cocoon.png"
              />
              <Card
                title="Cocoon"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                imageUrl="/cocoon.png"
              />
              <Card
                title="Cocoon"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                imageUrl="/cocoon.png"
              />
            </div>
          </div>

          <div className="mt-40 text-center">
            <Link href="/work">
              <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">See more</span>
            </Link>
          </div>
        </section>


        <section className="mt-32">
          <h2 className="text-7xl font-bold mb-6 text-[#062438]">Case Study.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Cocoon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
              href="/project1"
              imageUrl="/logo.png"
            />
            <ProjectCard
              title="Product Name"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
              href="/project1"
              imageUrl=""
            />
          </div>
        </section>

        <section className="mt-32">
          <h2 className="text-7xl font-bold mb-6 text-[#062438]">Contact.</h2>
          <div>
            <p>coming soon</p>
          </div>
        </section>

      </main>

      <footer className="bg-yellow-100 text-center p-6">
        <p className="text-yellow-900">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}
