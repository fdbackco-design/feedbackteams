import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

function setCORS(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCORS(res)

  // Preflight
  if (req.method === 'OPTIONS') return res.status(204).end()

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', allowed: ['POST'] })
  }

  // JSON 파싱
  let body: any
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }

  const { name, company, email, phone, inquiryType, message } = body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, message are required' })
  }

  try {
    // Gmail OAuth2 (환경변수 필요)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_FROM,            // 보내는 주소
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_FROM,
      to: process.env.GMAIL_TO || process.env.GMAIL_FROM, // 수신자
      replyTo: email,
      subject: `[Contact:${inquiryType || '일반'}] ${name} (${company || 'N/A'})`,
      text: `phone: ${phone || '-'}\n\n${message}`,
      html: `
        <p><b>Name</b>: ${name}</p>
        <p><b>Company</b>: ${company || '-'}</p>
        <p><b>Email</b>: ${email}</p>
        <p><b>Phone</b>: ${phone || '-'}</p>
        <p><b>Type</b>: ${inquiryType || '-'}</p>
        <hr/>
        <div>${String(message).replace(/\n/g, '<br/>')}</div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    return res.status(500).json({ error: err?.message ?? 'Send failed' })
  }
}
