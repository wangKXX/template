const loaderUtils = require("loader-utils");
const compiler = require("vue-template-compiler");
const babelParser = require("@babel/parser");
const enmus = require("./regx/index.js");
const babel = require("@babel/core");
module.exports = function(source) {
  const callback = this.async();
  // const options = loaderUtils.getOptions(source);
  // const template = splitComponent(source);
  // parseTemplate(template, source, this);
  // const temp = source.substring(templateStart, templateEnd + 10);
  // console.log(loopAst(compiler.compile(temp).ast));
  callback(null, source);
};

function parseTemplate(template, source, callback) {
  const { content } = template;
  // 正则匹配
  console.log(content);
  // const ast = compiler.compile(content).ast;
  // loopAst(ast, source, callback, template);
}

// function traverseTemplate(parseTemplate, callback, source) {
//   const templateStart = source.indexOf("</template>");
//   source = `${parseTemplate}${source.substring(templateStart + 11)}`;
//   console.log(source, 123);
//   callback.async(null, source);
// }

// function repalceSourceTemplate(str, code, source, callback, template) {
//   const { content, type } = template;
//   console.log(content);
//   const replaceContent = content.replace(str, code);
//   const parseTemplate = `<${type}>${replaceContent}</${type}>`;
//   console.log(parseTemplate);
//   traverseTemplate(parseTemplate, callback, source);
// }

function splitComponent(source) {
  const template = compiler.parseComponent(source).template;
  return template;
}

// function loopAst(ast, source, callback, template) {
//   if (!ast) {
//     return;
//   }
//   const { attrsMap, text } = ast;
//   attrsMap &&
//     Object.keys(attrsMap).forEach(k => {
//       enmus.includeDirectories.includes(k) && parserCode(attrsMap[k], source, callback, template);
//     });
//   ast.children &&
//     ast.children.forEach(child => {
//       loopAst(child, source, callback, template);
//     });
// }

// const parserCode = function(str, source, callback, template) {
//   const res = babel.transformSync(str, {
//     filename: "test.js",
//     presets: ["@babel/preset-env"]
//   });
//   if (res.code) {
//     repalceSourceTemplate(str, "test", source, callback, template);
//   }
//   // traverseAst(fun);
// };
