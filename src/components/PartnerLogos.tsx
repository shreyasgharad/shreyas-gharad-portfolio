import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import Autoplay from 'embla-carousel-autoplay';

const partnerLogos = [
  {
    name: "Sula Vineyards",
    image: "/lovable-uploads/f7c236a5-f7cb-4465-a976-0b94cf32ffe2.png"
  },
  {
    name: "York Winery",
    image: "/lovable-uploads/64a779b3-cac8-4718-a247-29074f1b9e4c.png"
  },
  {
    name: "Paul and Mike",
    image: "/lovable-uploads/5d6ef3e2-b1e7-451d-865d-0b44da746473.png"
  },
  {
    name: "Copper Grillhouse",
    image: "/lovable-uploads/ca197467-1822-4a78-aa7f-e44aa3c07c03.png"
  },
  {
    name: "Beyond by Sula",
    image: "/lovable-uploads/68fcf3e8-cc98-4e45-ae25-46c25727d039.png"
  },
  {
    name: "The Source",
    image: "/lovable-uploads/34b37801-d8fa-4c9c-b2ed-2ac6ea710250.png"
  },
  {
    name: "Sprig",
    image: "/lovable-uploads/671722e4-5c89-4fa8-a6c8-5881ab446850.png"
  },
  {
    name: "Provogue",
    image: "/lovable-uploads/4b8b9ba3-4cd0-4263-bec3-b71bc7846b7c.png"
  },
  {
    name: "DSG Partners",
    image: "/lovable-uploads/e2d9a97b-aaf3-4db2-abe7-104ac99a93c6.png"
  },
  {
    name: "Rasa Wines",
    image: "/lovable-uploads/611d14c9-ceae-4caa-b334-d170733c8f03.png"
  },
  {
    name: "Space",
    image: "/lovable-uploads/bb50ab5b-d4c4-42b0-8407-1f9a0c053a30.png"
  },
  {
    name: "Shakakan",
    image: "/lovable-uploads/7dcd49ea-b27b-426c-b723-f6a9aa23a0a7.png"
  },
  {
    name: "Matero",
    image: "/lovable-uploads/c8c5b1a8-5070-42a8-94de-2bb08f911eac.png"
  },
  {
    name: "Estate Monkeys",
    image: "/lovable-uploads/786d741d-e8eb-4e8a-acc1-44d4c0986351.png"
  },
  {
    name: "Elaan",
    image: "/lovable-uploads/5e7fb7fc-a7d3-4a3d-9702-b305f8a79358.png"
  },
  {
    name: "Kiddopia",
    image: "/lovable-uploads/103c1e12-4f65-4cd2-84d1-8a21790b351c.png"
  },
  {
    name: "Naar",
    image: "/lovable-uploads/542f3bca-d467-427f-8ba7-6feaa5b993ae.png"
  },
  {
    name: "BB Gourmet",
    image: "/lovable-uploads/d95dc6f8-75f1-4eca-b6bf-3d33cc341b23.png"
  },
  {
    name: "Momoland",
    image: "/lovable-uploads/3416bf84-7b8d-4de4-9129-6e4329e57cd4.png"
  },
  {
    name: "Buns & Slices",
    image: "/lovable-uploads/4653f451-ae64-4029-aa56-c11d1ab183d6.png"
  }
];

const PartnerLogos = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div className="mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="mb-8 text-center">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">Worked With</h4>
        <Separator className="w-20 h-1 bg-blue mx-auto" />
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full relative"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {partnerLogos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5 transition-opacity duration-300 animate-fade-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-4 h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="max-h-16 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 md:-left-4 border-none bg-white/80 hover:bg-white shadow-md" />
        <CarouselNext className="right-0 md:-right-4 border-none bg-white/80 hover:bg-white shadow-md" />
      </Carousel>
    </div>
  );
};

export default PartnerLogos;
