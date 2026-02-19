import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const portfolioDir = './public/assets/portfolio';
const quality = 80;

async function convertToWebP(inputPath) {
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    try {
        const inputStats = fs.statSync(inputPath);

        await sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);

        const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
        console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);

        return { input: inputStats.size, output: outputStats.size };
    } catch (err) {
        console.error(`✗ Error converting ${inputPath}:`, err.message);
        return null;
    }
}

async function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    let totalInput = 0;
    let totalOutput = 0;

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const subResult = await processDirectory(fullPath);
            totalInput += subResult.input;
            totalOutput += subResult.output;
        } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
            const result = await convertToWebP(fullPath);
            if (result) {
                totalInput += result.input;
                totalOutput += result.output;
            }
        }
    }

    return { input: totalInput, output: totalOutput };
}

console.log('🖼️  Converting portfolio images to WebP...\n');
console.log('-------------------------------------------');

processDirectory(portfolioDir).then(result => {
    console.log('-------------------------------------------');
    console.log(`\n📊 Total savings: ${(result.input / 1024 / 1024).toFixed(2)}MB → ${(result.output / 1024 / 1024).toFixed(2)}MB`);
    console.log(`   Reduced by ${((result.input - result.output) / result.input * 100).toFixed(1)}%\n`);
    console.log('✅ Done! Now update your code to use .webp extensions.');
});
