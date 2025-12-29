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
        <header className="section-header text-center mb-12">
          <h1 className="section-title">Servicios</h1>
          <p className="section-subtitle">
            Soluciones claras para los problemas más comunes de tu PC.
          </p>
        </header>

        <div className="grid-3 mb-12">
          {servicios.map((servicio) => (
            <article key={servicio.titulo} className="service-card">
              <h2 className="service-title">{servicio.titulo}</h2>
              <p className="service-desc">{servicio.desc}</p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="service-meta font-semibold">{servicio.desde}</p>
                <p className="service-meta text-xs mt-1">{servicio.tipo}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="card text-center">
          <h2 className="text-xl font-semibold mb-3">
            ¿No estás seguro qué necesitas?
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Cuéntame qué le pasa a tu PC y te recomiendo la mejor opción.
          </p>
          <a href="/contacto" className="primary-button">
            Consultar ahora
          </a>
        </div>
      </div>
    </div>
  );
}


