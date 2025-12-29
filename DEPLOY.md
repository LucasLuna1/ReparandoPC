# Guía de Despliegue - ReparandoPC

Esta guía te explica cómo desplegar tu proyecto para que tu amigo pueda verlo en internet.

## Opción Recomendada: Vercel (Frontend) + Render (Backend)

### Paso 1: Desplegar el Backend en Render

1. **Crear cuenta en Render**
   - Ve a https://render.com
   - Regístrate con GitHub o email (gratis)

2. **Crear nuevo servicio**
   - Click en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub (o sube el código manualmente)

3. **Configuración del servicio**
   - **Name**: `reparando-pc-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Variables de entorno en Render**
   - En la sección "Environment Variables", agrega:
     ```
     GMAIL_USER=tu_correo@gmail.com
     GMAIL_PASS=tu_contraseña_de_aplicación
     DESTINO_EMAIL=correo_que_recibe_las_consultas
     PORT=10000
     ```
   - **Importante**: Para Gmail, necesitas una "Contraseña de aplicación", no tu contraseña normal.
     - Ve a tu cuenta de Google → Seguridad → Verificación en 2 pasos → Contraseñas de aplicaciones
     - Genera una nueva contraseña para "Correo" y úsala en `GMAIL_PASS`

5. **Desplegar**
   - Click en "Create Web Service"
   - Espera a que termine el despliegue
   - Copia la URL que te da Render (algo como: `https://reparando-pc-backend.onrender.com`)

### Paso 2: Desplegar el Frontend en Vercel

1. **Crear cuenta en Vercel**
   - Ve a https://vercel.com
   - Regístrate con GitHub (recomendado) o email

2. **Importar proyecto**
   - Click en "Add New..." → "Project"
   - Conecta tu repositorio de GitHub
   - Selecciona el proyecto

3. **Configuración del proyecto**
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (ya viene por defecto)
   - **Output Directory**: `.next` (ya viene por defecto)

4. **Variables de entorno en Vercel**
   - En "Environment Variables", agrega:
     ```
     NEXT_PUBLIC_API_BASE_URL=https://tu-backend-url.onrender.com
     ```
   - Reemplaza `https://tu-backend-url.onrender.com` con la URL real que te dio Render en el Paso 1

5. **Desplegar**
   - Click en "Deploy"
   - Espera a que termine (2-3 minutos)
   - Vercel te dará una URL como: `https://reparando-pc.vercel.app`

### Paso 3: Subir la imagen de fondo

1. **Copiar la imagen a public**
   ```bash
   cp "/home/lucasluna/Imágenes/work/lock.jpg" "/home/lucasluna/Trabajo/Leandro/frontend/public/lock.jpg"
   ```

2. **Hacer commit y push**
   ```bash
   cd /home/lucasluna/Trabajo/Leandro
   git add frontend/public/lock.jpg
   git commit -m "Agregar imagen de fondo"
   git push
   ```

3. **Vercel se actualizará automáticamente** cuando hagas push

### Paso 4: Verificar que todo funciona

1. Abre la URL de Vercel en tu navegador
2. Ve a la página de Contacto
3. Completa el formulario y envíalo
4. Deberías recibir el correo en `DESTINO_EMAIL`

## Alternativa: Desplegar todo en Vercel (más simple)

Si prefieres algo más simple, puedes usar las API Routes de Next.js y desplegar todo en Vercel:

1. Mueve la lógica del backend a `frontend/app/api/contacto/route.ts`
2. Despliega solo el frontend en Vercel
3. Configura las variables de entorno de Gmail directamente en Vercel

¿Quieres que te ayude a hacer esta alternativa?

## Notas importantes

- **Render (backend)**: El plan gratuito "duerme" después de 15 minutos de inactividad. La primera petición puede tardar 30-60 segundos en despertar.
- **Vercel (frontend)**: No tiene límites de tiempo, siempre está activo.
- **Gmail**: Si tienes problemas con el envío de correos, verifica que uses una "Contraseña de aplicación" y no tu contraseña normal.

## URLs finales

- Frontend: `https://tu-proyecto.vercel.app`
- Backend: `https://tu-backend.onrender.com`

Comparte la URL del frontend con tu amigo y listo.

