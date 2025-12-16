## ReparandoPC

Sitio web de presentación para un servicio de reparación y optimización de computadoras, construido con Next.js (App Router), React y una ruta de API que envía las solicitudes de contacto por correo electrónico mediante Nodemailer.

El objetivo principal es convertir visitas en consultas, con un frontend sobrio, bien estructurado y sin animaciones innecesarias.

### Estructura general (3 capas)

- **Tecnologías principales**: Next.js 14, React 18, TypeScript en el frontend y Node/Express en el backend.
- **Frontend (`frontend/`)**: App Router (`frontend/app/`), diseño limpio basado en CSS propio.
- **Backend (`backend/`)**: Servidor Express con una ruta `POST /contacto` que recibe las solicitudes del formulario.
- **Correo**: Envío de mails con Nodemailer usando una cuenta de Gmail desde el backend.
- **Base de datos**: No se utiliza por defecto; los datos se usan solo para enviar el correo.

### Requisitos previos

- Node.js 18 o superior instalado.
- Una cuenta de Gmail (se recomienda configurar una cuenta específica para el sitio).

### Instalación

#### 1. Frontend (Next.js)

Desde la carpeta `frontend`:

```bash
cd frontend
npm install
```

#### 2. Backend (Node/Express)

Desde la carpeta `backend`:

```bash
cd backend
npm install
```

### Variables de entorno

#### Frontend (`frontend/.env.local`)

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

#### Backend (`backend/.env`)

```bash
GMAIL_USER=tu_correo@gmail.com
GMAIL_PASS=tu_contraseña_o_app_password
DESTINO_EMAIL=correo_que_recibe_las_consultas
PORT=4000
```

- **GMAIL_USER**: correo de la cuenta de Gmail que usará Nodemailer para enviar.
- **GMAIL_PASS**: contraseña de aplicación o credencial específica para SMTP.
- **DESTINO_EMAIL**: dirección a la que se enviarán las solicitudes (puede ser la misma que `GMAIL_USER`).
- **NEXT_PUBLIC_API_BASE_URL**: URL base del backend que el frontend utilizará para llamar a `/contacto`.

Para producción, configura estas variables en el proveedor donde despliegues el backend y el frontend.

### Comandos útiles

#### Frontend

- **Desarrollo**:

  ```bash
  cd frontend
  npm run dev
  ```

  La aplicación quedará disponible en `http://localhost:3000`.

- **Build de producción**:

  ```bash
  cd frontend
  npm run build
  ```

- **Ejecutar en modo producción**:

  ```bash
  cd frontend
  npm start
  ```

#### Backend

- **Desarrollo**:

  ```bash
  cd backend
  npm run dev
  ```

  El backend quedará escuchando en `http://localhost:4000`.

- **Producción**:

  ```bash
  cd backend
  npm start
  ```

### Páginas principales

- `/`  
  Página de inicio con propuesta de valor clara, servicios destacados y llamado a la acción hacia el formulario de contacto.

- `/servicios`  
  Detalle de los servicios ofrecidos, modalidades (a domicilio, remoto) y rangos de precios de referencia.

- `/sobre-mi`  
  Información sobre la persona detrás del servicio, experiencia y forma de trabajo.

- `/contacto`  
  Formulario de contacto validado en frontend y backend, que envía un correo con los datos: nombre, email, teléfono (opcional) y descripción del problema.

### API de contacto

En el backend (`backend/src/server.js`) se define la ruta:

- `POST /contacto`

Esta ruta:

- Valida los datos recibidos con Zod.
- Construye un correo con la información enviada.
- Envía el correo usando Nodemailer y responde con JSON indicando éxito o error.

La información del formulario no se almacena en una base de datos; solo se usa para generar el correo que llega a tu bandeja de entrada.


