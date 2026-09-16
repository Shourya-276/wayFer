import sharp from 'sharp';

async function makeTransparent() {
  const image = sharp('./wayfer-logo.jpeg');
  const metadata = await image.metadata();
  const width = metadata.width || 408;
  const height = metadata.height || 612;

  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // BFS / Flood fill from the corners to make only the outside background transparent
  // This preserves any white roads or the circular hole inside the pin!
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isBackground(idx) {
    const r = data[idx * 4];
    const g = data[idx * 4 + 1];
    const b = data[idx * 4 + 2];
    // Background is near white/light grey (typically > 230)
    return r > 228 && g > 228 && b > 228;
  }

  // Push all border pixels to queue if they match background
  for (let x = 0; x < width; x++) {
    const topIdx = x;
    const botIdx = (height - 1) * width + x;
    if (isBackground(topIdx)) {
      queue.push(topIdx);
      visited[topIdx] = 1;
    }
    if (isBackground(botIdx)) {
      queue.push(botIdx);
      visited[botIdx] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    const leftIdx = y * width;
    const rightIdx = y * width + (width - 1);
    if (!visited[leftIdx] && isBackground(leftIdx)) {
      queue.push(leftIdx);
      visited[leftIdx] = 1;
    }
    if (!visited[rightIdx] && isBackground(rightIdx)) {
      queue.push(rightIdx);
      visited[rightIdx] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // Make transparent
    data[curr * 4 + 3] = 0;

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx] && isBackground(nIdx)) {
          visited[nIdx] = 1;
          queue.push(nIdx);
        }
      }
    }
  }

  // Also trim / tight crop the image to the pin
  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile('./public/wayfer-logo-transparent.png');

  console.log('Successfully created ./public/wayfer-logo-transparent.png');
}

makeTransparent().catch(console.error);
