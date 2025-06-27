import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
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
              En Napoli Construcciones brindamos un servicio integral y personalizado, enfocado en la excelencia, la innovación y el bienestar de nuestros clientes y trabajadores. Más de 20 años de experiencia nos avalan.
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
              Nos guiamos por la responsabilidad, transparencia, calidad y originalidad. Estos valores son el pilar de nuestra relación con los clientes y la clave para ofrecer un servicio de excelencia en cada proyecto.
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
              Ser competitivos y brindar servicios de alta calidad, siempre basados en honestidad, solidaridad y responsabilidad social, ayudando al crecimiento de empresas, familias y trabajadores.
            </p>
          </div>
        </div>
      </div>
      {/* Bloque destacado de exteriores */}
      <div className="relative mt-16 w-full rounded-2xl overflow-hidden shadow-xl min-h-[320px] flex items-center justify-center">
        {/* Imagen de fondo desenfocada y oscurecida */}
        <div className="absolute inset-0">
          <img
            src="/images/exterior-frente.jpeg"
            alt="Patio y jardín"
            className="w-full h-full object-cover blur-sm brightness-75"
            style={{ filter: 'blur(4px) brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-[#FFF9E5] opacity-80" />
        </div>
        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 w-full max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 drop-shadow-lg">Creamos espacios únicos para tu hogar</h2>
          <p className="text-lg md:text-xl text-black mb-8 drop-shadow-md">
            Transformamos patios, jardines y exteriores en lugares de encuentro, relax y naturaleza. Descubrí cómo podemos hacer realidad el espacio exterior que soñás.
          </p>
          <a href="#contacto" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg shadow transition-colors text-lg">
            Contactanos
          </a>
        </div>
      </div>
    </section>
  )
}
