import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 relative"
      style={{
        backgroundImage: `url('/images/asphalt-texture.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-xl text-gray-300">
            Estamos aquí para ayudarte. Contáctanos para más información o para solicitar un presupuesto.
          </p>
        </div>

        {/* Centrado del formulario */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Nombre</label>
                  <Input
                    placeholder="Tu nombre"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Apellido</label>
                  <Input
                    placeholder="Tu apellido"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Teléfono</label>
                <Input
                  placeholder="+123 456 7890"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Mensaje</label>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

