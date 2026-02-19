import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public/assets');

const filesToOptimize = [
    {
        input: 'logo.png',
        output: 'logo.webp',
        width: 200 // Resize logo, 200px is plenty for header
    },
    {
        input: 'clients/librairie-des-ecoles.png',
        output: 'clients/librairie-des-ecoles.webp',
        width: 300
    },
    {
        input: 'clients/lets-travel.png',
        output: 'clients/lets-travel.webp',
        width: 300
    },
    {
        input: 'portfolio/almond/WhatsApp Image 2026-01-24 at 19.46.18.jpeg',
        output: 'portfolio/almond/team-building-1.webp',
        width: 800
    }
];

async function optimize() {
    console.log('Starting optimization...');

    for (const file of filesToOptimize) {
        const inputPath = path.join(publicDir, file.input);
        const outputPath = path.join(publicDir, file.output);

        if (!fs.existsSync(inputPath)) {
            console.warn(`⚠️  Input file not found: ${file.input}`);
            continue;
        }

        try {
            await sharp(inputPath)
                .resize(file.width ? { width: file.width } : null)
                .webp({ quality: 80 })
                .toFile(outputPath);

            const inputStats = fs.statSync(inputPath);
            const outputStats = fs.statSync(outputPath);
            const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);

            console.log(`✅ Optimized ${file.input} -> ${file.output}`);
            console.log(`   Size: ${(inputStats.size / 1024).toFixed(2)}KB -> ${(outputStats.size / 1024).toFixed(2)}KB (${savings}% saved)`);
        } catch (error) {
            console.error(`❌ Error converting ${file.input}:`, error);
        }
    }
}

optimize();
