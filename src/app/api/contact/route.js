// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "rumandevelops@gmail.com",
        pass: "ljyq wktr obil esxm",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "rumandevelops@gmail.com",
      subject: `New message from ${fullName}`,
      text: message,
      html: `<p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}


// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { fullName, email, message } = await req.json();

//   if (!fullName || !email || !message) {
//     return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
//   }

//   // Setup your mail transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // or 'hotmail', 'outlook' etc.
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.SMTP_USER, // your email to receive messages
//     subject: `New message from ${fullName}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     return new Response(JSON.stringify({ error: 'Email send failed', details: err.message }), {
//       status: 500,
//     });
//   }
// }
