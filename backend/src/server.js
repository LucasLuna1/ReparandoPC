import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const app = express();
const port = process.env.PORT || 4000;

const contactSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().optional(),
  mensaje: z.string().min(10),
});

app.use(cors());
app.use(express.json());

app.post('/contacto', async (req, res) => {
  const parse = contactSchema.safeParse(req.body);

  if (!parse.success) {
    return res.status(400).json({ success: false, message: 'Datos inválidos.' });
  }

  const { nombre, email, telefono, mensaje } = parse.data;

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return res.status(500).json({
      success: false,
      message: 'Faltan variables de entorno para el envío de correo.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ReparandoPC" <${process.env.GMAIL_USER}>`,
      to: process.env.DESTINO_EMAIL || process.env.GMAIL_USER,
      subject: 'Nueva solicitud de contacto desde ReparandoPC',
      text: `
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || 'No indicado'}

Mensaje:
${mensaje}
      `.trim(),
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Error al enviar correo', error);
    return res
      .status(500)
      .json({ success: false, message: 'Error interno al enviar el correo.' });
  }
});

app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});


