export const metadata = {
  title: 'Sobre mí | ReparandoPC',
  description:
    'Conoce quién está detrás de ReparandoPC, la experiencia, la forma de trabajo y el enfoque en claridad y confianza.',
};

export default function SobreMiPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="about-grid">
          <section>
            <h1 className="section-title mb-4">Sobre mí</h1>
            
            <div className="flex gap-4 items-center mb-6">
              <div className="avatar">L</div>
              <div>
                <p className="font-semibold text-lg text-slate-900">Leandro</p>
                <p className="text-sm text-slate-600">
                  Técnico en soporte informático
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Llevo varios años ayudando a personas y pequeños negocios a recuperar y mantener sus
                computadoras. Desde equipos antiguos que vuelven a tener vida, hasta PCs recientes
                que solo necesitaban un poco de orden.
              </p>
              <p>
                Trabajo con claridad: te explico las opciones, riesgos y costos antes de hacer
                cualquier cambio. Cada trabajo tiene garantía.
              </p>
            </div>
          </section>

          <aside className="card">
            <h2 className="text-lg font-semibold mb-4">Mi forma de trabajar</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <div className="font-semibold mb-1">Diagnóstico claro</div>
                <div className="text-sm text-slate-600">
                  Primero identifico el problema y te explico las opciones disponibles.
                </div>
              </div>
              <div>
                <div className="font-semibold mb-1">Sin sorpresas</div>
                <div className="text-sm text-slate-600">
                  Solo realizo trabajos autorizados y necesarios.
                </div>
              </div>
              <div>
                <div className="font-semibold mb-1">Garantía</div>
                <div className="text-sm text-slate-600">
                  Soporte sobre el trabajo realizado durante 30 días.
                </div>
              </div>
            </div>

            <a href="/contacto" className="primary-button w-full text-center">
              Contarme tu problema
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}


