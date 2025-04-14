
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

const partnerLogos = [
  {
    name: "Sula Vineyards",
    image: "/lovable-uploads/cc1d59f7-a3ba-458c-bfeb-c1c1b1a87956.png"
  },
  {
    name: "York Winery",
    image: "/lovable-uploads/0b955e15-6aa6-457d-af9a-be5035044296.png"
  },
  {
    name: "Paul and Mike",
    image: "/lovable-uploads/bc71681f-1a05-4156-a849-2006fa868725.png"
  },
  {
    name: "Copper Grillhouse",
    image: "/lovable-uploads/aa1e8747-266b-488b-bc8f-f050af2d89e2.png"
  },
  {
    name: "Beyond by Sula",
    image: "/lovable-uploads/828256eb-2d4a-4649-9228-5ff30a48a0ad.png"
  },
  {
    name: "The Source",
    image: "/lovable-uploads/924e9f26-0ffb-4fff-8b0d-5238df7324c2.png"
  },
  {
    name: "Sprig",
    image: "/lovable-uploads/4cc5e2b8-99c3-4ab6-8810-c2c6f14c8856.png"
  },
  {
    name: "Provogue",
    image: "/lovable-uploads/a1b89abf-7326-46d4-b181-2caaa44a44d2.png"
  },
  {
    name: "DSG Partners",
    image: "/lovable-uploads/bcc92643-63eb-4561-843f-64365927a9aa.png"
  },
  {
    name: "Rasa Wines",
    image: "/lovable-uploads/c554c77c-e69f-487e-9ef5-bba20c596e72.png"
  }
];

const PartnerLogos = () => {
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
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {partnerLogos.map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-4 h-32 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="max-h-20 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-none bg-white/80 hover:bg-white" />
        <CarouselNext className="right-0 border-none bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default PartnerLogos;
