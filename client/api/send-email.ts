import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

const normalizeList = (v?: string) =>
  (v || '').split(/[;,]/).map(s => s.trim()).filter(Boolean)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS (필요 시)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' })

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { name, company, email, phone, inquiryType, message } = body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email, message are required' })
    }

    const from = (process.env.GMAIL_FROM || '').trim()
    const toList = normalizeList(process.env.GMAIL_TO || process.env.GMAIL_FROM)

    if (!from || toList.length === 0) {
      return res.status(500).json({ error: 'Set GMAIL_FROM and GMAIL_TO (or at least GMAIL_FROM)' })
    }
    if (!process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({ error: 'Set GMAIL_APP_PASSWORD' })
    }

    // ✅ Gmail SMTP (앱 비밀번호)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // 465
      auth: {
        user: from,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    })

    await transporter.sendMail({
      from,                      // Gmail은 송신 주소가 인증 계정과 동일해야 함
      to: toList,
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
    console.error('send-email failed:', err)
    return res.status(500).json({ error: err?.message ?? 'Send failed' })
  }
}
