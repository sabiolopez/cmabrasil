import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nome, email, telefone, mensagem } = body;

        if (!nome || !email || !mensagem) {
            return NextResponse.json(
                { error: 'Campos obrigatórios: nome, e-mail e mensagem.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Site CMA Brasil" <${process.env.SMTP_USER}>`,
            to: 'cmanobrasil@gmail.com',
            replyTo: email,
            subject: `Nova mensagem de contato - ${nome}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2d6a6a;">Nova mensagem de contato - CMA Brasil</h2>
                    <hr style="border-color: #e5e7eb;" />
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    ${telefone ? `<p><strong>Telefone:</strong> ${telefone}</p>` : ''}
                    <p><strong>Mensagem:</strong></p>
                    <p style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${mensagem}</p>
                    <hr style="border-color: #e5e7eb;" />
                    <p style="color: #9ca3af; font-size: 12px;">Mensagem enviada pelo formulário em cmabrasil.org</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json(
            { error: 'Falha ao enviar mensagem. Tente novamente.' },
            { status: 500 }
        );
    }
}
