import * as process from "process";
import * as path from "path";
import * as fs from "fs";
import { WriteFileOptions } from "fs";
import { program } from "commander";

const SEPARATOR = path.sep;
const CWD = process.cwd();

program
  .name('leetcode-cli')
  .description("CLI to work with leetcode problems")
  .version('1.0.0');

program.command("generate <id> <url>")
  .description("Generate empty problem with template code")
  .action((id: string, url: string) => {
    const problemName = parseProblemNameFromUrl(url);
    const problemNameAndId = `[${id}] ${problemName}`;

    const problemPath = path.join(CWD, "src", problemNameAndId);

    createFolderIfNotExists(problemPath);
    createSourceCodeFile(problemPath);
    createUnitTestFile(problemPath);
    createMdFile(problemPath, url);
  });

const parseProblemNameFromUrl = (url: string) => {
  const urlChunks = url.replace(/\/$/, "").split("/");
  const nameChunk = urlChunks[urlChunks.length - 1];

  const problemName = nameChunk
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return problemName;
};

const createSourceCodeFile = (problemPath: string) => {
  const filePath = path.join(problemPath, "index.ts");

  createFileIfNotExists(filePath, "", {
    encoding: "utf8",
  });
};

const createUnitTestFile = (problemPath: string) => {
  const pathChunks = problemPath.split(SEPARATOR);
  const problemNameAndId = pathChunks[pathChunks.length - 1];

  const filePath = path.join(problemPath, "index.test.ts");

  const data = `
describe("${problemNameAndId}", () => {
  test("case 1", () => {
  
  });
  
  test("case 2", () => {
  
  });
  
  test("case 3", () => {
  
  });
});
  `;

  createFileIfNotExists(filePath, data.trim(), {
    encoding: "utf8",
  });
};

const createMdFile = (problemPath: string, url: string) => {
  const problemName = parseProblemNameFromUrl(url);

  const filePath = path.join(problemPath, "README.md");

  const data = `
### ${problemName}

[Leetcode](${url})
  `;

  createFileIfNotExists(filePath, data.trim(), {
    encoding: "utf8",
  });
};

const createFolderIfNotExists = (dirPath: string) => {
  if (fs.existsSync(dirPath)) {
    return;
  }

  fs.mkdirSync(dirPath);
};

const createFileIfNotExists = (
  filePath: string,
  data: string | NodeJS.ArrayBufferView,
  options?: WriteFileOptions,
) => {
  if (fs.existsSync(filePath)) {
    return;
  }

  fs.writeFileSync(filePath, data, options);
};

program.parse();
