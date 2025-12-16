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
        <div className="about-grid">
          <section>
            <h1 className="section-title mb-3">Contacto</h1>
            <p className="section-subtitle mb-6">
              Completa el formulario con tus datos y una descripción del problema. Te respondo en
              menos de 24 horas hábiles con opciones de solución y un presupuesto aproximado.
            </p>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Para coordinar más rápido, si prefieres"
                  />
                  {errors.telefono && <p className="form-error">{errors.telefono}</p>}
                </div>

                <div className="form-field">
                  <label htmlFor="mensaje" className="form-label">
                    Describe el problema o lo que necesitas
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-textarea"
                    rows={5}
                    value={values.mensaje}
                    onChange={handleChange}
                    placeholder="Ejemplo: mi PC tarda mucho en encender, abre muy lento los programas y aparecen ventanas raras en el navegador."
                    required
                  />
                  {errors.mensaje && <p className="form-error">{errors.mensaje}</p>}
                </div>

                <button
                  type="submit"
                  className="primary-button w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando solicitud...' : 'Enviar solicitud'}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-green-700">
                    Gracias. Tu solicitud ha sido enviada. Me pondré en contacto contigo en las
                    próximas 24 horas hábiles.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-700">
                    Hubo un problema al enviar tu mensaje. Intenta nuevamente en unos minutos o
                    escríbeme directamente a tu correo de contacto habitual.
                  </p>
                )}
              </form>
            </div>
          </section>

          <aside className="card">
            <h2 className="text-base font-semibold mb-3">Cómo utilizo tus datos</h2>
            <p className="text-sm text-slate-700 mb-3">
              La información que envíes se usa únicamente para responder a tu consulta y coordinar
              el servicio. No se comparte con terceros ni se utiliza para enviar publicidad masiva.
            </p>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Solo te escribiré para responder tu consulta o coordinar una visita.</li>
              <li>• Puedes pedirme que elimine tus datos de contacto en cualquier momento.</li>
              <li>• Los detalles técnicos que compartas se usan solo para entender mejor el problema.</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}


