import Image from "next/image"

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="py-20 relative"
      style={{
        backgroundImage: `url('/images/asphalt-texture.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre nuestras obras más destacadas y la calidad de nuestro trabajo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Proyecto de construcción 1"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-2">Construcción Residencial</h3>
                <p className="text-sm text-gray-300">Casa moderna de 200m²</p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Proyecto de construcción 2"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-2">Piscinas y Exteriores</h3>
                <p className="text-sm text-gray-300">Diseño y construcción completa</p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Proyecto de construcción 3"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-2">Reformas Integrales</h3>
                <p className="text-sm text-gray-300">Renovación completa de espacios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </section>
  )
}
