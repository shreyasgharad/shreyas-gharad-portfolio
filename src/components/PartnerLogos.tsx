
import React, { useRef } from 'react';
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
    image: "/lovable-uploads/584abe14-11a3-426f-bbb0-ddd32911cb0f.png"
  },
  {
    name: "York Winery",
    image: "/lovable-uploads/040cb552-0995-44a9-aaef-f6d276755274.png"
  },
  {
    name: "Paul and Mike",
    image: "/lovable-uploads/9c483a69-c733-4d9f-8b52-1f7ee7685047.png"
  },
  {
    name: "Copper Grillhouse",
    image: "/lovable-uploads/df800f42-3dd1-4e69-9e41-91e590e63d6b.png"
  },
  {
    name: "Beyond by Sula",
    image: "/lovable-uploads/dd4b791a-41ef-4907-8800-cec3520d785f.png"
  },
  {
    name: "The Source",
    image: "/lovable-uploads/7da160d6-deec-40e0-9771-334b855d2538.png"
  },
  {
    name: "Sprig",
    image: "/lovable-uploads/c687cfdb-57cb-48a8-94e4-1db8961f034f.png"
  },
  {
    name: "Provogue",
    image: "/lovable-uploads/0cca9ac1-423c-4af1-9e18-6c4f0cbe36f9.png"
  },
  {
    name: "DSG Partners",
    image: "/lovable-uploads/d9a47fb1-3456-411c-82c1-ecaf4d72f799.png"
  },
  {
    name: "Rasa Wines",
    image: "/lovable-uploads/4adee1c9-544e-43f3-ae4f-2b7213b4db22.png"
  },
  {
    name: "Space",
    image: "/lovable-uploads/56d6342a-00b5-48f9-a7b8-7b10e3b3384c.png"
  },
  {
    name: "Shakakan",
    image: "/lovable-uploads/beee0457-d2b1-488a-9f17-8556066bc177.png"
  },
  {
    name: "Matero",
    image: "/lovable-uploads/492b4409-e6e3-4046-a617-612c87a557d4.png"
  },
  {
    name: "Estate Monkeys",
    image: "/lovable-uploads/16e538c6-ae77-4e9f-9f01-e028aa0151b6.png"
  },
  {
    name: "Elaan",
    image: "/lovable-uploads/b1f918a7-db69-4788-877e-9959e5a3f302.png"
  },
  {
    name: "Kiddopia",
    image: "/lovable-uploads/3511b92c-3db8-40ac-a2d9-aa09abd2be88.png"
  },
  {
    name: "Naar",
    image: "/lovable-uploads/4dbbaccf-2fbf-49a1-8dc1-0972e0e89e43.png"
  },
  {
    name: "BB Gourmet",
    image: "/lovable-uploads/04fe0c4c-4325-43ad-af35-7cb15843bb6f.png"
  },
  {
    name: "Momoland",
    image: "/lovable-uploads/9089bf45-aa01-41e4-90ef-f3f108d56d4f.png"
  },
  {
    name: "Buns & Slices",
    image: "/lovable-uploads/07e113cf-5a23-4e54-a1fa-285d87a929fd.png"
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
