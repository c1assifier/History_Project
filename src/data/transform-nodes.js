// src/data/transform-nodes.js
import { Project, SyntaxKind } from 'ts-morph';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Обработка nodes.ts начата...');

const filePath = path.resolve(__dirname, 'nodes.ts');

const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, '../../tsconfig.app.json'),
});

const sourceFile = project.addSourceFileAtPath(filePath);
const nodesVar = sourceFile.getVariableDeclarationOrThrow('nodes');
const nodesArray = nodesVar.getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

nodesArray.getElements().forEach((element, index) => {
  const node = element.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  const typeProp = node.getProperty('type');
  if (!typeProp || !typeProp.getText().includes("'custom'")) return;

  const dataProp = node.getProperty('data');
  if (!dataProp) return;

  const dataObj = dataProp.getFirstDescendantByKindOrThrow(SyntaxKind.ObjectLiteralExpression);

  // === year внутри data ===
  if (!dataObj.getProperty('year')) {
    dataObj.insertPropertyAssignment(0, {
      name: 'year',
      initializer: '0',
    });
  }

  // === pages внутри data ===
  if (!dataObj.getProperty('pages')) {
    dataObj.addPropertyAssignment({
      name: 'pages',
      initializer: "''",
    });
  }

  // === fullDescription ===
  if (!dataObj.getProperty('fullDescription')) {
    dataObj.addPropertyAssignment({ name: 'fullDescription', initializer: "''" });
  }

  // === images ===
  if (!dataObj.getProperty('images')) {
    dataObj.addPropertyAssignment({ name: 'images', initializer: '[]' });
  }

  // === table ===
  if (!dataObj.getProperty('table')) {
    dataObj.addPropertyAssignment({
      name: 'table',
      initializer: `{
        headers: [],
        rows: []
      }`,
    });
  }

  // лог по каждому узлу
  console.log(`🛠 Обработан узел #${index + 1}`);
});

sourceFile.saveSync();
console.log('✅ nodes.ts успешно обновлён (year, pages и прочее добавлены в data)');
