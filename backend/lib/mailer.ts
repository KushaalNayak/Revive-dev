import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendHandoffEmailProps {
  to: string;
  projectName: string;
  requesterName: string;
  message: string;
  revivalMode: string;
}

export async function sendHandoffRequestEmail({
  to,
  projectName,
  requesterName,
  message,
  revivalMode
}: SendHandoffEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ReviveDev <noreply@revive.dev>',
      to: [to],
      subject: `Legacy Inquiry: Handover Proposal for ${projectName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #000; background: #fff; border-radius: 20px; overflow: hidden; border: 1px solid #eee;">
          <div style="background: #00FF66; padding: 40px; text-align: center;">
             <h1 style="margin: 0; font-size: 32px; letter-spacing: -1px; font-weight: 800; color: #000;">REVIVE.DEV</h1>
          </div>
          
          <div style="padding: 40px;">
            <p style="font-size: 16px; line-height: 1.6;">Hello,</p>
            <p style="font-size: 16px; line-height: 1.6;">
              We are reaching out regarding your public repository: <strong>${projectName}</strong>. 
              Our platform identifies codebases that have shaped the developer community and may be ready for their next chapter.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              A developer in our network, <strong>${requesterName}</strong>, is significantly interested in your work and has proposed a <strong>${revivalMode.replace('_', ' ').toLowerCase()}</strong> strategy to revive or maintain it.
            </p>

            <div style="background: #f7f7f7; padding: 30px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #00FF66;">
              <p style="margin-top: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #888; letter-spacing: 1px;">Requester's Intent</p>
              <p style="font-style: italic; font-size: 15px; color: #333; margin-bottom: 0;">"${message}"</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              <strong>Would you like to explore this?</strong>
            </p>
            
            <p style="font-size: 14px; color: #666; line-height: 1.8;">
              • <strong>Collaborative Revival</strong>: Formally hand over maintenance or accept help.<br/>
              • <strong>Mark as Finished</strong>: Let us know if this project is complete and stable as-is.<br/>
              • <strong>No Action</strong>: If you are not interested, no action is required on your part.
            </p>

            <div style="margin-top: 40px; text-align: center;">
              <a href="https://revive.dev/dashboard" style="display: inline-block; background: #000; color: #fff; padding: 18px 36px; text-decoration: none; border-radius: 12px; font-weight: 700; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Review Proposal</a>
            </div>

            <hr style="margin-top: 50px; border: 0; border-top: 1px solid #eee;" />
            <p style="font-size: 11px; color: #999; text-align: center; margin-bottom: 0px;">
              Platform Inquiries: <a href="mailto:${process.env.ADMIN_EMAIL || 'admin.revivedev@gmail.com'}" style="color: #666; text-decoration: none;">admin.revivedev@gmail.com</a><br/>
              Strategic Consultations: <a href="mailto:${process.env.FOUNDER_EMAIL || 'founder@revive.dev'}" style="color: #666; text-decoration: none;">Contact Founder</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Email failed:', err);
    return { success: false, error: err };
  }
}

interface SendHandoffSuccessProps {
  to: string;
  projectName: string;
  ownerName: string;
  maintainerName: string;
  role: 'OWNER' | 'MAINTAINER';
}

export async function sendHandoffSuccessEmail({
  to,
  projectName,
  ownerName,
  maintainerName,
  role
}: SendHandoffSuccessProps) {
  try {
    const isOwner = role === 'OWNER';
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ReviveDev <noreply@revive.dev>',
      to: [to],
      subject: `Handover Certificate: ${projectName} has been Reborn`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #000; background: #fff; border-radius: 20px; overflow: hidden; border: 1px solid #eee;">
          <div style="background: #00FF66; padding: 40px; text-align: center;">
             <h1 style="margin: 0; font-size: 24px; letter-spacing: -1px; font-weight: 800; color: #000;">REVIVAL SUCCESSFUL</h1>
          </div>
          
          <div style="padding: 40px; text-align: center;">
            <p style="font-size: 18px; line-height: 1.6; font-weight: 600;">
              ${isOwner 
                ? `Heritage Secured. Your project <strong>${projectName}</strong> has a new guardian.` 
                : `Protocol Initiated. You are now the official maintainer of <strong>${projectName}</strong>.`}
            </p>
            
            <div style="background: #000; color: #00FF66; padding: 30px; border-radius: 16px; margin: 30px 0; display: inline-block; width: 100%; box-sizing: border-box;">
              <p style="margin: 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Handover Certificate</p>
              <h2 style="margin: 10px 0; font-size: 28px; color: #fff;">${projectName}</h2>
              <p style="margin: 0; font-size: 13px; color: #888;">
                From: <strong>@${ownerName}</strong><br/>
                To: <strong>@${maintainerName}</strong>
              </p>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #666;">
              ${isOwner 
                ? `You have formally passed the torch to ${maintainerName}. You will remain credited as the original founder of this codebase.`
                : `The original founder, ${ownerName}, has trusted you with this legacy. You now have full authorization to lead its revival.`}
            </p>

            <div style="margin-top: 40px;">
              <a href="https://revive.dev/p/${projectName.toLowerCase().replace(/ /g, '-')}" style="display: inline-block; background: #00FF66; color: #000; padding: 18px 36px; text-decoration: none; border-radius: 12px; font-weight: 700; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">View Reborn Project</a>
            </div>

            <hr style="margin-top: 50px; border: 0; border-top: 1px solid #eee;" />
            <p style="font-size: 11px; color: #999; margin-bottom: 0px;">
              Official ReviveDev Record ID: REC-${Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      `,
    });

    return { success: !error, data, error };
  } catch (err) {
    return { success: false, error: err };
  }
}
