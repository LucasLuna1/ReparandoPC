export const metadata = {
  title: 'ReparandoPC | Reparación y optimización de PC a domicilio',
  description:
    'Servicio profesional de reparación, mantenimiento y optimización de computadoras a domicilio. Diagnóstico sin compromiso y soluciones claras.',
};

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container hero-grid">
          <div>
            <div className="pill mb-4">
              <span className="badge" />
              <span>Reparación de PC a domicilio y remoto</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
              Tu PC vuelve a rendir como nueva, sin que tengas que moverte de casa.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-6 max-w-xl">
              Atiendo equipos lentos, con virus, errores de sistema y problemas de hardware.
              Explico cada paso con claridad y solo realizo trabajos necesarios, sin sorpresas.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="/contacto" className="primary-button">
                Solicitar diagnóstico sin compromiso
              </a>
              <a href="/servicios" className="subtle-button">
                Ver servicios y precios
              </a>
            </div>

            <div className="kpi-grid">
              <div className="kpi-card">
                <div className="kpi-label">Clientes atendidos</div>
                <div className="kpi-value">+150</div>
                <div className="kpi-label">Entre hogares y pequeñas empresas</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Tiempo promedio de respuesta</div>
                <div className="kpi-value">24 h</div>
                <div className="kpi-label">Te contacto el mismo día hábil</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-label">Garantía de servicio</div>
                <div className="kpi-value">30 días</div>
                <div className="kpi-label">Soporte sobre el trabajo realizado</div>
              </div>
            </div>
          </div>

          <aside>
            <div className="card">
              <h2 className="text-xl font-semibold mb-2">Solicitud rápida de revisión</h2>
              <p className="text-sm text-slate-600 mb-4">
                Déjame tus datos y una descripción breve. Te respondo con opciones de solución y
                presupuesto estimado.
              </p>
              <a href="/contacto" className="primary-button w-full text-center">
                Ir al formulario de contacto
              </a>

              <div className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500 space-y-1">
                <p>Sin spam. Solo utilizo tus datos para responder tu consulta.</p>
                <p>Servicio para uso personal, profesionales independientes y pequeñas empresas.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Servicios principales</h2>
            <p className="section-subtitle">
              Me enfoco en resolver los problemas más frecuentes que hacen que un equipo se vuelva
              lento, inestable o inseguro.
            </p>
          </div>

          <div className="grid-3">
            <div className="service-card">
              <div className="pill-small mb-2">Rendimiento</div>
              <h3 className="service-title">Optimización de velocidad</h3>
              <p className="service-desc">
                Limpieza profunda de programas innecesarios, optimización de inicio, revisión de
                recursos y actualización de sistema.
              </p>
              <p className="service-meta">Ideal para equipos que se sienten lentos o se congelan.</p>
            </div>

            <div className="service-card">
              <div className="pill-small mb-2">Seguridad</div>
              <h3 className="service-title">Eliminación de virus y malware</h3>
              <p className="service-desc">
                Detección y eliminación de virus, troyanos y adware. Refuerzo de protección y buenas
                prácticas de uso.
              </p>
              <p className="service-meta">
                Para equipos con ventanas emergentes, redirecciones raras o comportamientos extraños.
              </p>
            </div>

            <div className="service-card">
              <div className="pill-small mb-2">Soporte</div>
              <h3 className="service-title">Instalación y configuración</h3>
              <p className="service-desc">
                Instalación de Windows, drivers, programas de trabajo y configuración de copias de
                seguridad básicas.
              </p>
              <p className="service-meta">
                Acompañamiento para dejar tu equipo listo para trabajar sin complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


