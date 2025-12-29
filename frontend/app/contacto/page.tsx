'use client';

import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  nombre: z.string().min(2, 'Por favor, indica tu nombre.'),
  email: z.string().email('Ingresa un correo válido.'),
  telefono: z.string().optional(),
  mensaje: z
    .string()
    .min(10, 'Describe el problema con un poco más de detalle.'),
});

type FormValues = z.infer<typeof schema>;

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export default function ContactoPage() {
  const [values, setValues] = useState<FormValues>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('idle');

    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormValues;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch(`${API_BASE}/contacto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Error en el envío');
      }

      setStatus('success');
      setValues({ nombre: '', email: '', telefono: '', mensaje: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h1 className="section-title text-center mb-4">Contacto</h1>
          <p className="section-subtitle text-center mb-8">
            Completa el formulario y te respondo en menos de 24 horas con opciones y presupuesto.
          </p>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="form-field">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-input"
                  value={values.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                />
                {errors.nombre && <p className="form-error">{errors.nombre}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="nombre@ejemplo.com"
                  required
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="telefono" className="form-label">
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  className="form-input"
                  value={values.telefono || ''}
                  onChange={handleChange}
                  placeholder="Para coordinar más rápido"
                />
                {errors.telefono && <p className="form-error">{errors.telefono}</p>}
              </div>

              <div className="form-field">
                <label htmlFor="mensaje" className="form-label">
                  Describe el problema
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  className="form-textarea"
                  rows={5}
                  value={values.mensaje}
                  onChange={handleChange}
                  placeholder="Ejemplo: mi PC tarda mucho en encender y abre muy lento los programas."
                  required
                />
                {errors.mensaje && <p className="form-error">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                className="primary-button w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-700 text-center">
                  Gracias. Tu solicitud ha sido enviada. Te contactaré en las próximas 24 horas.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-700 text-center">
                  Hubo un problema al enviar. Intenta nuevamente en unos minutos.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

