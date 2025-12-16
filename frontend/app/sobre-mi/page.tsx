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
            <h1 className="section-title mb-3">Sobre mí</h1>
            <p className="section-subtitle mb-6">
              Mi objetivo es que entiendas qué se hace sobre tu equipo, por qué se hace y cuál es el
              resultado que puedes esperar, sin tecnicismos innecesarios.
            </p>

            <div className="flex gap-4 items-center mb-6">
              <div className="avatar">L</div>
              <div>
                <p className="font-semibold text-slate-900">Leandro</p>
                <p className="text-xs text-slate-600">
                  Técnico en soporte informático y mantenimiento de computadoras
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <p>
                Llevo varios años ayudando a personas y pequeños negocios a recuperar y mantener sus
                computadoras en condiciones de trabajo. He visto desde equipos muy antiguos que
                vuelven a tener una segunda vida, hasta PCs recientes mal configuradas que sólo
                necesitaban un poco de orden.
              </p>
              <p>
                Trabajo con una filosofía clara: explicarte siempre las opciones que tienes, los
                riesgos y los costos, para que tomes decisiones informadas. Nunca realizo cambios
                invasivos sin tu autorización y respaldo cada intervención con una garantía sobre el
                trabajo realizado.
              </p>
              <p>
                Me mantengo actualizado sobre herramientas y buenas prácticas de seguridad, porque
                hoy la información que guardamos en nuestros equipos vale mucho más que el propio
                hardware.
              </p>
            </div>
          </section>

          <aside className="card">
            <h2 className="text-base font-semibold mb-3">Datos que te pueden dar confianza</h2>
            <ul className="text-sm text-slate-700 space-y-2 mb-4">
              <li>• Años de experiencia atendiendo equipos de hogar y oficina.</li>
              <li>• Enfoque en explicaciones claras y seguimiento posterior al servicio.</li>
              <li>• Prioridad en proteger tus datos antes de cualquier intervención técnica.</li>
            </ul>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-label">Experiencia</div>
                <div className="timeline-title">Soporte a usuarios y mantenimiento preventivo</div>
                <div className="timeline-desc">
                  Trabajos recurrentes de optimización de rendimiento, instalación de sistemas,
                  limpieza de virus y asesoramiento en compra de equipos.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-label">Forma de trabajo</div>
                <div className="timeline-title">Diagnóstico claro antes de avanzar</div>
                <div className="timeline-desc">
                  Primero identifico el problema, te explico qué está pasando y te propongo varias
                  opciones para que elijas la que mejor se adapta a tu presupuesto y urgencia.
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-label">Seguimiento</div>
                <div className="timeline-title">Garantía sobre los trabajos realizados</div>
                <div className="timeline-desc">
                  Si el problema inicial reaparece dentro del plazo acordado, reviso nuevamente el
                  equipo para asegurar que quedes conforme con el resultado.
                </div>
              </div>
            </div>

            <a href="/contacto" className="primary-button w-full mt-4 text-center">
              Contarme qué le pasa a tu PC
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}


