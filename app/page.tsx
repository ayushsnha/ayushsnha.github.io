import Img from '@public/assets/images/img.png'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] pt-[11rem] lg:pt-0 gradiant-bg">
      <div className=' px-6'>
        <div className='flex items-center justify-center'>
          <div className="flex flex-col items-center justify-between gap-5 md:gap-[12rem] md:flex-row">
            <div className='image' />
            <div className='max-w-[50rem]'>
              <h1 className=" font-bold text-6xl text-center my-8">Javascript Developer 👋🏻</h1>
              <p className="text-2xl text-center">
                Hi, I'm Ayush Kumar Sinha. A passionate Javasscript Developer based in Ranchi, India🇮🇳. 📍
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
