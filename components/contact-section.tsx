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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-2xl shadow-xl bg-white p-8 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Formulario */}
          <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Nombre</label>
                <Input
                  name="nombre"
                  className="bg-white text-black border border-gray-300 rounded shadow-sm focus:border-yellow-400 focus:ring-yellow-400 placeholder-gray-400"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Apellido</label>
                <Input
                  name="apellido"
                  className="bg-white text-black border border-gray-300 rounded shadow-sm focus:border-yellow-400 focus:ring-yellow-400 placeholder-gray-400"
                  value={form.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700 text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                name="email"
                className="bg-white text-black border border-gray-300 rounded shadow-sm focus:border-yellow-400 focus:ring-yellow-400 placeholder-gray-400"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-medium mb-2 block">Teléfono</label>
              <Input
                name="telefono"
                className="bg-white text-black border border-gray-300 rounded shadow-sm focus:border-yellow-400 focus:ring-yellow-400 placeholder-gray-400"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm font-medium mb-2 block">Mensaje</label>
              <Textarea
                name="mensaje"
                className="bg-white text-black border border-gray-300 rounded shadow-sm focus:border-yellow-400 focus:ring-yellow-400 placeholder-gray-400"
                value={form.mensaje}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition-colors shadow"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
            {success && (
              <p className="text-green-600 text-center mt-4">¡Mensaje enviado correctamente!</p>
            )}
            {error && (
              <p className="text-red-500 text-center mt-4">{error}</p>
            )}
          </form>
          {/* Info lateral */}
          <div className="flex-1 flex flex-col justify-center items-start border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Completá el formulario</h3>
            <p className="text-gray-600 mb-6">Un asesor se comunicará contigo a la brevedad.</p>
            <div className="border-t border-gray-200 w-full mb-6"></div>
            <p className="text-gray-700 font-medium mb-2">Seguinos en nuestras redes sociales</p>
            <div className="flex gap-4">
              {/* Aquí puedes agregar iconos de redes sociales reales si tienes */}
              <a href="#" className="bg-gray-100 hover:bg-yellow-400 text-gray-700 hover:text-black rounded-full p-2 transition-colors" aria-label="Instagram">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="bg-gray-100 hover:bg-yellow-400 text-gray-700 hover:text-black rounded-full p-2 transition-colors" aria-label="LinkedIn">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><line x1="12" y1="16" x2="12" y2="11"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
