export const metadata = {
  title: 'ReparandoPC | Reparación y optimización de PC a domicilio',
  description:
    'Servicio profesional de reparación, mantenimiento y optimización de computadoras a domicilio. Diagnóstico sin compromiso y soluciones claras.',
};

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="hero-content">
            <div className="pill mb-4">
              <span className="badge" />
              <span>Reparación a domicilio y remoto</span>
            </div>
            <h1 className="hero-title">
              Tu PC vuelve a rendir como nueva, sin moverte de casa.
            </h1>
            <p className="hero-subtitle">
              Equipos lentos, virus, errores de sistema. Soluciones claras y rápidas.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 sm:mb-10 justify-center">
              <a href="/contacto" className="primary-button">
                Solicitar diagnóstico gratis
              </a>
              <a href="/servicios" className="subtle-button">
                Ver servicios
              </a>
            </div>

            <div className="kpi-grid">
              <div className="kpi-card">
                <div className="kpi-value">+150</div>
                <div className="kpi-label">Clientes atendidos</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value">24h</div>
                <div className="kpi-label">Respuesta garantizada</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value">30 días</div>
                <div className="kpi-label">Garantía de servicio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-8">Servicios principales</h2>

          <div className="grid-3">
            <div className="service-card">
              <div className="pill-small mb-3">Rendimiento</div>
              <h3 className="service-title">Optimización de velocidad</h3>
              <p className="service-desc">
                Limpieza profunda, optimización de inicio y actualización de sistema.
              </p>
            </div>

            <div className="service-card">
              <div className="pill-small mb-3">Seguridad</div>
              <h3 className="service-title">Eliminación de virus</h3>
              <p className="service-desc">
                Detección y eliminación de malware. Refuerzo de protección.
              </p>
            </div>

            <div className="service-card">
              <div className="pill-small mb-3">Soporte</div>
              <h3 className="service-title">Instalación y configuración</h3>
              <p className="service-desc">
                Windows, drivers y programas. Tu equipo listo para trabajar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


