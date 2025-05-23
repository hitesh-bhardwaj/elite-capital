import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/ContactDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, companyName, designation, message, number } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Required fields missing" });
    }
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["info@elitecapitalinvestments.com"],
      subject: "New Contact Form Submission",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userCompany: companyName,
        userDesignation: designation,
        userMessage: message || "No message provided",
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("API Error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
