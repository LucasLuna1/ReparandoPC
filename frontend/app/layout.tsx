import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-white/20 bg-white/90 backdrop-blur-md">
          <div className="container py-4 sm:py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} ReparandoPC. Todos los derechos reservados.</p>
            <p className="text-center sm:text-right">Servicio de reparación y mantenimiento de PC a domicilio.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


