"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import emailjs from "emailjs-com"
import { SectionTitle } from "@/components/section-title"
import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const { nombre, email, mensaje } = form
    if (!nombre || !email || !mensaje) return "Todos los campos son obligatorios."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email inválido."
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    try {
      const serviceId = "service_atc6ync"
      const templateId = "template_thj2e7w"
      const userId = "vsM-kvdE2C7ffsNql"
      const templateParams = {
        nombre: form.nombre,
        apellido: "",
        email: form.email,
        telefono: "",
        mensaje: form.mensaje,
        to_email: "napolidaniel@hotmail.com",
      }
      await emailjs.send(serviceId, templateId, templateParams, userId)
      setSuccess(true)
      setForm({ nombre: "", email: "", mensaje: "" })
    } catch (err) {
      setError(
        "Hubo un error al enviar el mensaje. Intentá de nuevo o escribinos por WhatsApp."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="mb-10 space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">
                  Número de teléfono
                </h4>
                <a
                  href="tel:+5491169904752"
                  className="flex items-center gap-3 text-xl font-bold text-black hover:text-brand transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand" />
                  +54 9 11 6990-4752
                </a>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">
                  Dirección de correo electrónico
                </h4>
                <a
                  href="mailto:napolidaniel@hotmail.com"
                  className="flex items-center gap-3 text-lg font-bold text-black hover:text-brand transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-brand shrink-0" />
                  napolidaniel@hotmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-black mb-2">
              <span className="text-brand">Consultas</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Escríbenos con tus consultas y un asesor de nuestra empresa se comunicará
              contigo.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Nombre:
                </label>
                <Input
                  name="nombre"
                  placeholder="Nombre"
                  className="border-gray-300 focus:border-brand focus:ring-brand"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Correo electrónico:
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  className="border-gray-300 focus:border-brand focus:ring-brand"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Tu mensaje:
                </label>
                <Textarea
                  name="mensaje"
                  placeholder="Su mensaje aquí:"
                  className="border-gray-300 focus:border-brand focus:ring-brand min-h-[120px]"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-hover text-black font-bold uppercase tracking-wider py-3 transition-colors disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {success && (
                <p className="text-brand font-medium text-center">
                  ¡Mensaje enviado correctamente!
                </p>
              )}
              {error && (
                <p className="text-red-500 text-center text-sm">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
