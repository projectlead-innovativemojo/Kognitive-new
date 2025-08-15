import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, lastName, email, company, interest } = await request.json();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "sales@innovativemojo.com",
        pass: "kfmk uafj fqyp gikb",
      },
    });

    // Parse interest into heading and bullets
    let interestHeading = interest;
    let interestBullets: string[] = [];
    if (interest && interest.includes('\n')) {
      const [heading, ...bullets] = interest.split('\n');
      interestHeading = heading;
      interestBullets = bullets.map((b: string) => b.replace(/^•\s*/, ''));
    }

    const mailoptionsToAdmin = {
      from: "sales@innovativemojo.com",
      to: "sales@innovativemojo.com, developer@innovativemojo.com",
      subject: "New Feedback Form of Kognitiiv AI",
      html: `
        <p>A new user has submitted the form.</p>
        <ul>
          <li><b>Name:</b> ${name} ${lastName}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Company:</b> ${company}</li>
          <li><b>Interest:</b> <b>${interestHeading}</b>
            ${interestBullets.length > 0 ? `<ul style="margin: 4px 0 0 18px;">${interestBullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </li>
        </ul>
      `,
    };

    const mailoptionsToUser = {
      from: "sales@innovativemojo.com",
      to: email,
      subject: "Thank You for reaching us!",
      html: `
        <p>Dear ${name} ${lastName},</p>
        <p>Thank you for providing the details. We'll get back to you as soon as possible.</p>
        <p><b> We have received your following details:</b></p>
      `,
    };

    await transport.sendMail(mailoptionsToAdmin);
    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ error: "" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
