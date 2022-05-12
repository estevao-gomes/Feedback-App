import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5d4fb1a77133bd",
        pass: "ae3b590d7d3708"
    }
})

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail ({subject, body}: SendMailData) {
    await transport.sendMail({
        from: 'user <user@email.com>',
        to: 'Equipe Feedget <equipefidget@Feedget.com>',
        subject,
        html: body
    })
   };
}