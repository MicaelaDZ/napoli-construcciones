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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Dirección</p>
                    <p className="text-gray-300">Tte. Coronel Lafuente 6014, Wilde, Avellaneda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Teléfono</p>
                    <p className="text-gray-300">011 6990 4752</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">napoliconstrucciones@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4">
              <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.8234567890123!2d-58.3456789!3d-34.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzQ0LjQiUyA1OMKwMjAnNDQuNCJX!5e0!3m2!1ses!2sar!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center text-sm text-gray-400 mt-2">Calle Tte. Cnel. Lafuente 6014</p>
            </div>
          </div>

          {/* Contact Form */}
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
