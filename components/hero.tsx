/* eslint-disable @next/next/no-img-element */
import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/blocks/hero-gallery-scroll-animation"
import restaurant1 from "@/public/restaurant_1.jpeg"
import restaurant2 from "@/public/restaurant_2.jpeg"
import restaurant3 from "@/public/restaurant_3.jpeg"
import restaurant4 from "@/public/restaurant_4.jpeg"
import restaurant5 from "@/public/restaurant_5.jpeg"
import { Button } from "@/components/ui/button"


const IMAGES = [
  restaurant1.src,
    restaurant4.src,
    restaurant3.src,
    restaurant2.src,
    restaurant5.src,


]
const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
                width="100%"
                height="100&"
            />
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
       <h1 className="max-w-xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
  <span className="mx-1">Better Training.</span>
  <span className="mx-1">Better Service.</span>
  <span className="mx-1">Better Careers.</span>
</h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
          Whether you&apos;re advancing your hospitality career or building a stronger restaurant team, we make professional training simple, flexible, and effective.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="px-4 py-2 font-medium">
            Start Learning
          </Button>
          <Button
            variant="link"
            className="bg-transparent px-4 py-2 font-medium"
          >
            Train Your Team
          </Button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}


export { HeroDemo1}