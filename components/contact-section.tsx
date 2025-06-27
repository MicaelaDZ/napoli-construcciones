"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "emailjs-com";

export function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { nombre, apellido, email, telefono, mensaje } = form;
    if (!nombre || !email || !telefono || !mensaje) return "Todos los campos son obligatorios.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email inválido.";
    if (telefono.length < 6 || !/^\d+$/.test(telefono)) return "Teléfono inválido.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      // Reemplaza estos valores con los de tu cuenta de EmailJS
      const serviceId = "service_atc6ync";
      const templateId = "template_thj2e7w";
      const userId = "vsM-kvdE2C7ffsNql";
      const templateParams = {
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        telefono: form.telefono,
        mensaje: form.mensaje,
        to_email: "napolidaniel@hotmail.com",
      };
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setSuccess(true);
      setForm({ nombre: "", apellido: "", email: "", telefono: "", mensaje: "" });
    } catch (err) {
      // @ts-ignore
      setError("Hubo un error al enviar el mensaje: " + (err?.text || err?.message || JSON.stringify(err)));
    } finally {
      setLoading(false);
    }
  };

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
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-xl text-gray-300">
            Estamos aquí para ayudarte. Contáctanos para más información o para solicitar un presupuesto.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Nombre</label>
                  <Input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Apellido</label>
                  <Input
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Teléfono</label>
                <Input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="01112345678"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Mensaje</label>
                <Textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">¡Mensaje enviado con éxito!</p>}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                disabled={loading}
              >
                {loading ? "Enviando mensaje..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
