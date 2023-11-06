import fs from 'fs';
import analyze from './../src/analyze';
import compileAndBuildAST from './../src/compile';
import issues from './../src/issues';
import { InputType, IssueTypes } from './../src/types';
import { recursiveExploration } from './../src/utils';

/**
 * @param basePath Path were the contracts lies
 * @param scopeFile .txt file containing the contest scope
 * @param githubLink github url to generate links to code
 * @param out where to save the report
 * @param scope optional text containing the .sol files in scope. Replaces `scopeFile`
 */
const main = async (
  issueTitle: string,
  scopeFile: string | null = null,
  basePath: string = 'test/contracts/',
  githubLink: string | null = null,
  out: string = 'report.md',
  scope?: string,
) => {
  let result = '';
  let fileNames: string[] = [];

  if (!!scopeFile) {
    fileNames.push(scopeFile)
  }

  // generates an array of file names based on a specified scope or by recursively exploring a directory
  // if (!!scopeFile || !!scope) {
  //   // Scope is specified in a .txt file or is passed in a string
  //   const content = scope ?? fs.readFileSync(scopeFile as string, { encoding: 'utf8', flag: 'r' });
  //   for (const word of [...content.matchAll(/[a-zA-Z\/\.\-\_0-9]+/g)].map(r => r[0])) {
  //     if (word.endsWith('.sol') && fs.existsSync(`${basePath}${word}`)) {
  //       fileNames.push(word);
  //     }
  //   }
  //   if (fileNames.length === 0) throw Error('Scope is empty');
  // } else {
  //   // Scope is not specified: exploration of the folder
  //   fileNames = recursiveExploration(basePath);
  // }

  console.log('Scope: ', fileNames);

  // Uncomment next lines to have the list of analyzed files in the report

  // result += '## Files analyzed\n\n';
  // fileNames.forEach(fileName => {
  //   result += ` - ${fileName}\n`;
  // });

  // Read file contents and build AST
  // reads the contents of multiple files and generates an array of objects that include the file name, content, and abstract syntax tree (AST)
  const files: InputType = [];
  const asts = await compileAndBuildAST(basePath, fileNames);
  fileNames.forEach((fileName, index) => {
    files.push({
      content: fs.readFileSync(`${basePath}${fileName}`, { encoding: 'utf8', flag: 'r' }),
      name: fileName,
      ast: asts[index],
    });
  });

  // analyze the files and issues in the files and report any issues found
  for (const t of Object.values(IssueTypes)) {
    result += analyze(
      files,
      issues.filter(i => i.type === t && i.title === issueTitle),
      !!githubLink ? githubLink : undefined,
    );
  }

  if (result.indexOf(issueTitle) !== -1) {
    console.log('The issue was found');
    console.log('Issue Title: ', issueTitle);
  }

  fs.writeFileSync(out, result);
};

export default main;
