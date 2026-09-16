import sharp from 'sharp';

async function processTrimmed() {
  await sharp('./public/wayfer-logo-transparent.png')
    .trim()
    .toFile('./public/wayfer-logo-trimmed.png');

  console.log('Successfully trimmed logo');
}

processTrimmed().catch(console.error);
