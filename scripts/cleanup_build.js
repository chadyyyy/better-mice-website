import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// Files to remove from dist (duplicates or unused)
const filesToRemove = [
    'assets/logo.png',
    'assets/clients/librairie-des-ecoles.png',
    'assets/clients/lets-travel.png',
    'vite.svg',
];

// Patterns for files to always remove (system files)
const patternsToRemove = ['.DS_Store'];

function cleanupDist() {
    console.log('🧹 Cleaning up dist folder...\n');

    // Remove specific files
    filesToRemove.forEach(file => {
        const filePath = path.join(distDir, file);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`🗑️  Removed: ${file}`);
        }
    });

    // Remove pattern-matched files recursively
    cleanupPatterns(distDir);

    console.log('\n✨ Cleanup complete!');

    // Show final structure
    console.log('\n📁 Final dist structure:');
    showStructure(distDir, '');
}

function cleanupPatterns(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (patternsToRemove.some(p => file.includes(p))) {
            fs.unlinkSync(fullPath);
            console.log(`🗑️  Removed: ${path.relative(distDir, fullPath)}`);
        } else if (stat.isDirectory()) {
            cleanupPatterns(fullPath);
        }
    }
}

function showStructure(dir, indent) {
    const files = fs.readdirSync(dir).sort();
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        const sizeKB = (stat.size / 1024).toFixed(1);

        if (stat.isDirectory()) {
            console.log(`${indent}📁 ${file}/`);
            if (indent.length < 6) { // Limit depth
                showStructure(fullPath, indent + '  ');
            }
        } else {
            console.log(`${indent}📄 ${file} (${sizeKB} KB)`);
        }
    });
}

cleanupDist();
