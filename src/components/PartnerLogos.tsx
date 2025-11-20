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
    name: "York Winery",
    image: "/lovable-uploads/63c2ace2-bdd8-40c8-b966-8fac7b9dd451.png"
  },
  {
    name: "The Source",
    image: "/lovable-uploads/2b1b229e-0a60-4970-9993-f84b70b5145d.png"
  },
  {
    name: "Paul and Mike",
    image: "/lovable-uploads/83a848eb-49dd-4fc9-a019-6a57aa954995.png"
  },
  {
    name: "Provogue",
    image: "/lovable-uploads/9a3e8bc6-992a-4732-9789-880da66040e4.png"
  },
  {
    name: "Matero",
    image: "/lovable-uploads/3c7e22b2-1f59-4b77-8550-3f2855cdec2e.png"
  },
  {
    name: "Shakakan",
    image: "/lovable-uploads/e167262e-3c80-4779-8f2e-343f2cbe5838.png"
  },
  {
    name: "Elaan",
    image: "/lovable-uploads/5b4f342d-9e2c-4c6e-88a1-9f7207ded483.png"
  },
  {
    name: "Naar",
    image: "/lovable-uploads/4a50907b-1741-4d11-94f7-ee62637fc8f6.png"
  },
  {
    name: "DSG Partners",
    image: "/lovable-uploads/213d428d-f13e-42c3-990e-0d537de40ec6.png"
  }
];

const PartnerLogos = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 1500, // Faster scroll with shorter delay
      stopOnInteraction: false,
      stopOnMouseEnter: false,
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
          dragFree: true,
        }}
        plugins={[autoplayPlugin.current]}
        className="w-full relative overflow-hidden"
      >
        <CarouselContent className="-ml-2 md:-ml-4 animate-scroll">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5 transition-opacity duration-300 animate-fade-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-4 h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                {/* Mobile: Show name only */}
                <span className="md:hidden text-sm font-semibold text-gray-700 text-center">
                  {logo.name}
                </span>
                {/* Desktop: Show logo */}
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="hidden md:block max-h-16 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PartnerLogos;
