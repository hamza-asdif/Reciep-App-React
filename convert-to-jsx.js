// Script to convert .js files to .jsx
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to exclude
const excludeDirs = ['node_modules', 'dist', 'build'];

// Files that should remain .js
const excludePatterns = [
  'vite.config.js',
  '.eslintrc.js',
  'store.js',
  'api.js',
  'supabaseClient.js',
  '/utils/'
];

// Function to check if a file should be excluded
function shouldExclude(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  
  // Check excluded directories
  if (excludeDirs.some(dir => relativePath.startsWith(dir))) {
    return true;
  }
  
  // Check excluded patterns
  if (excludePatterns.some(pattern => relativePath.includes(pattern))) {
    return true;
  }
  
  return false;
}

// Function to convert a single file
function convertFile(filePath) {
  if (shouldExclude(filePath)) {
    console.log(`Skipping excluded file: ${filePath}`);
    return;
  }
  
  const newPath = filePath.replace(/\.js$/, '.jsx');
  console.log(`Converting ${filePath} to ${newPath}`);
  
  try {
    // Read file content
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Write to new file
    fs.writeFileSync(newPath, content, 'utf8');
    
    // Delete old file
    fs.unlinkSync(filePath);
    
    console.log(`Successfully converted ${filePath}`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err);
  }
}

// Function to update imports in a file
function updateImports(filePath) {
  try {
    // Skip if file doesn't exist (might have been renamed)
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Simple regex to find import statements ending with .js
    const jsImportRegex = /from\s+['"](.+)\.js['"]/g;
    content = content.replace(jsImportRegex, (match, importPath) => {
      // Don't update imports for excluded files
      if (excludePatterns.some(pattern => importPath.includes(pattern))) {
        return match;
      }
      updated = true;
      return `from "${importPath}.jsx"`;
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated imports in ${filePath}`);
    }
  } catch (err) {
    console.error(`Error updating imports in ${filePath}:`, err);
  }
}

// Function to process a directory recursively
function processDirectory(directory) {
  try {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        // Skip excluded directories
        if (!excludeDirs.includes(entry.name)) {
          processDirectory(fullPath);
        }
      } else if (entry.name.endsWith('.js')) {
        convertFile(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${directory}:`, err);
  }
}

// Function to update all imports
function updateAllImports(directory) {
  try {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        // Skip excluded directories
        if (!excludeDirs.includes(entry.name)) {
          updateAllImports(fullPath);
        }
      } else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) {
        updateImports(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error updating imports in directory ${directory}:`, err);
  }
}

// Main execution
console.log('Starting conversion of .js files to .jsx...');

// Convert files in src directory
const srcDir = path.join(process.cwd(), 'src');
processDirectory(srcDir);

console.log('Updating imports in all files...');
updateAllImports(srcDir);

console.log('Conversion complete!');
