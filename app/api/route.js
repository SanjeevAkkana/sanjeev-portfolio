import nodemailer from 'nodemailer';

export async function GET(request) {
  try {
    return new Response(
      JSON.stringify({ message: "GET POST" }), 
      {
        status: 200, // Status code indicating success
        headers: {
          "Content-Type": "application/json" // Specifying JSON response format
        }
      }
    );
  } catch (error) {
    console.error("Error:", error); // Log the error for debugging
    return new Response(
      JSON.stringify({ error: "An error occurred" }),
      {
        status: 500, // Status code for server error
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}


export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Simple validation check on backend if needed
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Create the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SMTP or any other service
      auth: {
        user: process.env.EMAIL, // Your sender email (configured in .env)
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password (configured in .env)
      },
    });

    // Define email options
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL, // Recipient's email (you can set it in .env or hardcode)
      subject: `New Contact Form Submission: ${name}`,
      text: `You have received a message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      { status: 500 }
    );
  }
}