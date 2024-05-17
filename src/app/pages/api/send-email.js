import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber, email, appointmentDate } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App-specific password
      },
    });

    // Set up email data
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: 'opemibilal@gmail.com',
      subject: 'New Appointment Booking',
      text: `You have a new appointment booking:\n\nPhone Number: ${phoneNumber}\nEmail: ${email}\nDate of Appointment: ${appointmentDate}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
