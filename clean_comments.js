const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\ABRAHAM\\OneDrive_old\\Desktop\\PROJECTS\\IEEE-CASS-WEBSITE\\src\\components';

function cleanJSXComments(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove JSX comments: {/* ... */}
    content = content.replace(/\s*\{\/\*[\s\S]*?\*\/\}\s*/g, '\n');

    // Remove specific // comments
    content = content.replace(/\/\/ Default expand the first item/g, '');
    content = content.replace(/\/\* Simple text fallback if image is missing \*\//g, '');

    // Fix multiple blank lines that might have been created
    content = content.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned:', filePath);
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            cleanJSXComments(fullPath);
        }
    }
}

try {
    walk(srcDir);
    console.log('Done cleaning comments.');
} catch (e) {
    console.log('Error:', e.message);
}
