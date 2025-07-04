import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 pt-32 bg-white"
    >
      <div className="container mx-auto px-4">
        
          {/* <div className="absolute inset-0">
            <img
              src="/images/bloque-nosotros-1.jpg"
              alt="Sobre Nosotros"
              className="w-full h-full object-cover blur-sm brightness-75"
              style={{ filter: 'blur(4px) brightness(0.7)' }}
            />
            <div className="absolute inset-0 bg-[#FFF9E5] opacity-80" />
          </div>
        
           <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 w-full max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">Sobre Nosotros</h2>
            <p className="text-lg md:text-xl text-black leading-relaxed drop-shadow-md">
              Más de dos décadas construyendo sueños y transformando espacios. Conoce nuestra historia, valores y el equipo que hace posible cada proyecto.
            </p>
          </div> 
        </div>  */}
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fila 1 */}
          {/* Imagen 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center h-80 min-h-[20rem]">
            <Image
              src="/images/bloque-nosotros-1.jpg"
              alt="Interior industrial"
              fill
              className="object-cover"
            />
          </div>
          {/* Quienes somos */}
          <div className="rounded-2xl shadow-lg bg-[#FFF9E5] flex flex-col justify-center p-8 h-80 min-h-[20rem]">
            <h3 className="text-2xl font-bold mb-2 text-black">Quiénes somos</h3>
            <p className="text-black text-base">
              En <b>Napoli Construcciones</b> brindamos un servicio integral y personalizado. Más de 20 años de experiencia nos avalan.
            </p>
          </div>
          {/* Imagen 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center h-80 min-h-[20rem]">
            <Image
              src="/images/bloque-nosotros-2.jpg"
              alt="Locales comerciales"
              fill
              className="object-cover"
            />
          </div>
          {/* Fila 2 */}
          {/* Nuestros valores */}
          <div className="rounded-2xl shadow-lg bg-[#FFF9E5] flex flex-col justify-center p-8 h-80 min-h-[20rem]">
            <h3 className="text-2xl font-bold mb-2 text-black">Nuestros valores</h3>
            <p className="text-black text-base">
              Nos guiamos por la <b>responsabilidad, transparencia, calidad y originalidad </b>. Estos valores son la clave para ofrecer un servicio de excelencia en cada proyecto.
            </p>
          </div>
          {/* Imagen 3 (foto de espalda) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center h-80 min-h-[20rem]">
            <Image
              src="/images/foto-espalda.jpg"
              alt="Equipo de trabajo Napoli"
              fill
              className="object-cover"
            />
          </div>
          {/* Nuestra Misión */}
          <div className="rounded-2xl shadow-lg bg-[#FFF9E5] flex flex-col justify-center p-8 h-80 min-h-[20rem]">
            <h3 className="text-2xl font-bold mb-2 text-black">Nuestra Misión</h3>
            <p className="text-black text-base">
              Ser competitivos y brindar servicios de alta calidad.
            </p>
          </div>
        </div>
      </div>
      {/* Bloque destacado de exteriores */}
     
    </section>
  )
}
