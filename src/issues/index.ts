import { Issue } from '../types';
import { recursiveExploration } from '../utils';
import path from 'path';

const fileNames = recursiveExploration(__dirname + '/', '.ts');

const issues: Issue[] = [];
// add all issues from the inner directories to the array
for (let file of fileNames) {
  file = path.join(__dirname, file);
  if (file !== __filename) {
    issues.push(require(file).default);
  }
}

export default issues;
