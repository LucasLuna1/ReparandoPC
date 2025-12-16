export const metadata = {
  title: 'Servicios de reparación de PC | ReparandoPC',
  description:
    'Listado claro de servicios de reparación, mantenimiento y optimización de computadoras. Opciones a domicilio y soporte remoto.',
};

const servicios = [
  {
    titulo: 'Optimización completa de rendimiento',
    desc: 'Limpieza profunda de archivos temporales, programas innecesarios, ajustes de inicio y revisión de procesos para que el equipo vuelva a ser fluido.',
    desde: 'Desde $X.XXX',
    incluye: ['Optimización de inicio', 'Limpieza de software innecesario', 'Ajustes de sistema'],
    tipo: 'A domicilio o remoto',
  },
  {
    titulo: 'Eliminación de virus y malware',
    desc: 'Detección, limpieza y protección frente a virus, troyanos, adware y otros programas maliciosos que afectan tu seguridad y velocidad.',
    desde: 'Desde $X.XXX',
    incluye: ['Escaneo completo', 'Eliminación de amenazas', 'Recomendaciones de seguridad'],
    tipo: 'A domicilio o remoto',
  },
  {
    titulo: 'Formateo e instalación de sistema operativo',
    desc: 'Instalación limpia de Windows, drivers actualizados y programas básicos para que el equipo quede listo para trabajar.',
    desde: 'Desde $X.XXX',
    incluye: ['Instalación de Windows', 'Drivers y actualizaciones', 'Programas esenciales'],
    tipo: 'A domicilio (retirada) o en tu domicilio',
  },
  {
    titulo: 'Revisión de hardware y reemplazo de componentes',
    desc: 'Diagnóstico de fallos de disco, memoria y otros componentes, con recomendaciones claras de actualización o reemplazo.',
    desde: 'Presupuesto personalizado',
    incluye: ['Diagnóstico de hardware', 'Pruebas de estabilidad', 'Informe de estado'],
    tipo: 'A domicilio',
  },
  {
    titulo: 'Recuperación básica de archivos',
    desc: 'Intento de recuperación de archivos borrados recientemente o de discos con problemas lógicos (no físicos).',
    desde: 'Desde $X.XXX',
    incluye: ['Análisis del dispositivo', 'Recuperación de archivos posibles', 'Copia en medio externo'],
    tipo: 'A convenir según el caso',
  },
  {
    titulo: 'Soporte para pequeñas oficinas',
    desc: 'Mantenimiento y revisión de varias computadoras en el mismo domicilio, ideal para estudios y oficinas pequeñas.',
    desde: 'Plan a medida',
    incluye: ['Chequeo general por equipo', 'Recomendaciones de red y copias de seguridad', 'Calendario de mantenimiento'],
    tipo: 'En sitio',
  },
];

const zonas = [
  'Zona céntrica de la ciudad',
  'Barrios residenciales aledaños',
  'Atención remota para todo el país (según tipo de problema)',
];

export default function ServiciosPage() {
  return (
    <div className="section">
      <div className="container">
        <header className="section-header">
          <h1 className="section-title">Servicios y tipos de trabajos que realizo</h1>
          <p className="section-subtitle">
            Te explico de forma clara qué incluye cada servicio y qué puedes esperar del resultado.
            Los valores indicados son de referencia para que tengas una idea aproximada.
          </p>
        </header>

        <div className="grid-3 mb-10">
          {servicios.map((servicio) => (
            <article key={servicio.titulo} className="service-card">
              <h2 className="service-title">{servicio.titulo}</h2>
              <p className="service-desc">{servicio.desc}</p>
              <p className="service-meta">{servicio.desde}</p>
              <p className="service-meta mt-1">Modalidad: {servicio.tipo}</p>
              <ul className="mt-3 text-xs text-slate-600 space-y-1">
                {servicio.incluye.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">Área de cobertura</h2>
          <p className="section-subtitle">
            Para problemas que se pueden resolver de forma remota utilizo herramientas seguras de
            acceso temporal a tu equipo. Para trabajos de hardware, lo ideal es coordinar visita a
            domicilio.
          </p>
        </div>

        <div className="card mb-8">
          <ul className="text-sm text-slate-700 space-y-1">
            {zonas.map((zona) => (
              <li key={zona}>• {zona}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                ¿No estás seguro de qué servicio necesitas?
              </h2>
              <p className="text-sm text-slate-600">
                Cuéntame brevemente qué le ocurre a tu PC y te recomiendo la mejor opción, sin costo
                y sin compromiso.
              </p>
            </div>
            <a href="/contacto" className="primary-button">
              Enviar consulta ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


