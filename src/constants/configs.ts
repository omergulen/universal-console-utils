export const languageMappingsWithText: {[key: string]: string} = {
    c: "printf(\"{selectedSnippet}: %d\", {selectedSnippet});",
    cpp: "cout << \"{selectedSnippet}: \" << {selectedSnippet};",
    java: "System.out.println(\"{selectedSnippet}: \" + {selectedSnippet});",
    javascript: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    javascriptreact: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    php: "echo '<pre>';\necho '{selectedSnippet}: ';\nvar_dump({selectedSnippet});\ndie;",
    python: "print('{selectedSnippet}: ' + {selectedSnippet})",
    typescript: "console.log('{selectedSnippet}: ', {selectedSnippet});",
    typescriptreact: "console.log('{selectedSnippet}: ', {selectedSnippet});",
};

export const languageMappingsBase: {[key: string]: string} = {
    c: "printf();",
    cpp: "cout << \"\";",
    java: "System.out.println();",
    javascript: "console.log();",
    javascriptreact: "console.log();",
    php: "echo '<pre>';\nvar_dump();\ndie;",
    python: "print()",
    typescript: "console.log();",
    typescriptreact: "console.log();",
};

// abap
// bat
// bibtex
// clojure
// coffeescript
// c
// cpp
// csharp
// css
// diff
// dockerfile
// fsharp
// git-commit
// git-rebase
// go
// groovy
// handlebars
// html
// ini
// java
// javascript
// javascriptreact
// json
// jsonc
// latex
// less
// lua
// makefile
// markdown
// objective-c
// objective-cpp
// perl
// perl6
// php
// plaintext
// powershell
// jade
// python
// r
// razor
// ruby
// rust
// scss
// sass
// shaderlab
// shellscript
// sql
// swift
// typescript
// typescriptreact
// tex
// vb
// xml
// xsl
// yaml
