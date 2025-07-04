import { Card } from "@/components/ui/card";

const services = [
  { title: "DESAGUES" },
  { title: "AGUA" },
  { title: "GAS" },
  { title: "PLUVIALES" },
  { title: "INCENDIO" },
  { title: "TECHOS" },
];

function ServiceIcon({ size = 56 }: { size?: number }) {
  // Usar la imagen tools.svg de la carpeta public/images
  return (
    <img
      src="/images/tools.svg"
      alt="Herramientas"
      width={size}
      height={size}
      className="mx-auto mb-4"
      draggable={false}
    />
  );
}

export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Fila superior: texto, desagues, agua */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
          {/* Texto */}
          <div className="flex flex-col justify-center">
            <span className="text-yellow-500 font-semibold mb-2 block">Mantenimiento</span>
            <h2 className="text-4xl font-bold mb-4 text-left">Servicios</h2>
            <p className="mb-4 text-left text-lg text-gray-700">Tu negocio en funcionamiento sin contratiempos con nuestro servicio de mantenimiento. Enfocándonos en los sistemas de agua, gas, pluviales, incendio y techos.</p>
            <p className="text-left text-gray-700">Soluciones integrales para instituciones educativas, hangares aeronáuticos y bancos.</p>
          </div>
          {/* DESAGUES */}
          <Card className="bg-gray-100 shadow-md rounded-xl flex flex-col items-center justify-center h-60">
            <ServiceIcon size={64} />
            <span className="text-gray-900 text-2xl font-bold tracking-wide" style={{color: '#222', textShadow: '0 2px 8px #fff'}}>{services[0].title}</span>
          </Card>
          {/* AGUA */}
          <Card className="bg-gray-100 shadow-md rounded-xl flex flex-col items-center justify-center h-60">
            <ServiceIcon size={64} />
            <span className="text-gray-900 text-2xl font-bold tracking-wide" style={{color: '#222', textShadow: '0 2px 8px #fff'}}>{services[1].title}</span>
          </Card>
        </div>
        {/* Fila inferior: 4 cards pequeñas ocupando todo el ancho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.slice(2).map((service) => (
            <Card key={service.title} className="bg-gray-100 shadow-md rounded-xl flex flex-col items-center justify-center h-42">
              <ServiceIcon size={48} />
              <span className="text-gray-900 text-xl font-bold tracking-wide" style={{color: '#222', textShadow: '0 2px 8px #fff'}}>{service.title}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 