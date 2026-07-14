const QRCode = require('qrcode');
const fs = require('fs');

QRCode.toFile('qr-code.png', 'https://colcob.contactvox.com/', {
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  },
  width: 400,
  margin: 2,
  errorCorrectionLevel: 'H'
}, (err) => {
  if (err) {
    console.error('Error generating QR:', err);
    process.exit(1);
  }
  console.log('✓ QR code generated successfully');
});
