import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReparandoPC | Reparación de PC a domicilio',
  description:
    'Servicio profesional de reparación y optimización de computadoras a domicilio. Diagnóstico rápido, atención personalizada y soluciones claras.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <a href="/" className="text-lg font-semibold tracking-tight text-slate-900">
                ReparandoPC
              </a>
              <nav className="flex gap-6 text-sm font-medium text-slate-700">
                <a href="/" className="nav-link">
                  Inicio
                </a>
                <a href="/servicios" className="nav-link">
                  Servicios
                </a>
                <a href="/sobre-mi" className="nav-link">
                  Sobre mí
                </a>
                <a href="/contacto" className="nav-link">
                  Contacto
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="container py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ReparandoPC. Todos los derechos reservados.</p>
            <p>Servicio de reparación y mantenimiento de PC a domicilio.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


