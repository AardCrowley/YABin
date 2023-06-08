export const languageKeysByName = new Map([
	['Plain text', 'plaintext'],
	['Markup', 'markup'],
	['HTML', 'html'],
	['XML', 'xml'],
	['SVG', 'svg'],
	['MathML', 'mathml'],
	['SSML', 'ssml'],
	['Atom', 'atom'],
	['RSS', 'rss'],
	['CSS', 'css'],
	['C-like', 'clike'],
	['JavaScript', 'javascript'],
	['ABAP', 'abap'],
	['ABNF', 'abnf'],
	['ActionScript', 'actionscript'],
	['Ada', 'ada'],
	['Agda', 'agda'],
	['AL', 'al'],
	['ANTLR4', 'antlr4'],
	['Apache Configuration', 'apacheconf'],
	['Apex', 'apex'],
	['APL', 'apl'],
	['AppleScript', 'applescript'],
	['AQL', 'aql'],
	['Arduino', 'arduino'],
	['ARFF', 'arff'],
	['ARM Assembly', 'armasm'],
	['Arturo', 'arturo'],
	['AsciiDoc', 'asciidoc'],
	['ASP.NET (C#)', 'aspnet'],
	['6502 Assembly', 'asm6502'],
	['Atmel AVR Assembly', 'asmatmel'],
	['AutoHotkey', 'autohotkey'],
	['AutoIt', 'autoit'],
	['AviSynth', 'avisynth'],
	['Avro IDL', 'avro-idl'],
	['AWK', 'awk'],
	['GAWK', 'gawk'],
	['Bash', 'bash'],
	['Shell', 'sh'],
	['Shell', 'shell'],
	['BASIC', 'basic'],
	['Batch', 'batch'],
	['BBcode', 'bbcode'],
	['Shortcode', 'shortcode'],
	['BBj', 'bbj'],
	['Bicep', 'bicep'],
	['Birb', 'birb'],
	['Bison', 'bison'],
	['BNF', 'bnf'],
	['RBNF', 'rbnf'],
	['BQN', 'bqn'],
	['Brainfuck', 'brainfuck'],
	['BrightScript', 'brightscript'],
	['Bro', 'bro'],
	['BSL (1C:Enterprise)', 'bsl'],
	['OneScript', 'oscript'],
	['C', 'c'],
	['C#', 'csharp'],
	['C++', 'cpp'],
	['CFScript', 'cfscript'],
	['ChaiScript', 'chaiscript'],
	['CIL', 'cil'],
	['Cilk/C', 'cilkc'],
	['Cilk/C++', 'cilkcpp'],
	['Clojure', 'clojure'],
	['CMake', 'cmake'],
	['COBOL', 'cobol'],
	['CoffeeScript', 'coffeescript'],
	['Concurnas', 'concurnas'],
	['Content-Security-Policy', 'csp'],
	['Cooklang', 'cooklang'],
	['Coq', 'coq'],
	['Crystal', 'crystal'],
	['CSS Extras', 'css-extras'],
	['CSV', 'csv'],
	['CUE', 'cue'],
	['Cypher', 'cypher'],
	['D', 'd'],
	['Dart', 'dart'],
	['DataWeave', 'dataweave'],
	['DAX', 'dax'],
	['Dhall', 'dhall'],
	['Diff', 'diff'],
	['Django/Jinja2', 'django'],
	['DNS zone file', 'dns-zone-file'],
	['Docker', 'docker'],
	['DOT (Graphviz)', 'dot'],
	['EBNF', 'ebnf'],
	['EditorConfig', 'editorconfig'],
	['Eiffel', 'eiffel'],
	['EJS', 'ejs'],
	['Eta', 'eta'],
	['Elixir', 'elixir'],
	['Elm', 'elm'],
	['Embedded Lua templating', 'etlua'],
	['ERB', 'erb'],
	['Erlang', 'erlang'],
	['Excel Formula', 'excel-formula'],
	['F#', 'fsharp'],
	['Factor', 'factor'],
	['False', 'false'],
	['Firestore security rules', 'firestore-security-rules'],
	['Flow', 'flow'],
	['Fortran', 'fortran'],
	['FreeMarker Template Language', 'ftl'],
	['GameMaker Language', 'gml'],
	['GAP (CAS)', 'gap'],
	['G-code', 'gcode'],
	['GDScript', 'gdscript'],
	['GEDCOM', 'gedcom'],
	['gettext', 'gettext'],
	['Gherkin', 'gherkin'],
	['Git', 'git'],
	['GLSL', 'glsl'],
	['GN', 'gn'],
	['GNU Linker Script', 'linker-script'],
	['Go', 'go'],
	['Go module', 'go-module'],
	['Gradle', 'gradle'],
	['GraphQL', 'graphql'],
	['Groovy', 'groovy'],
	['Haml', 'haml'],
	['Handlebars', 'handlebars'],
	['Mustache', 'mustache'],
	['Haskell', 'haskell'],
	['Haxe', 'haxe'],
	['HCL', 'hcl'],
	['HLSL', 'hlsl'],
	['Hoon', 'hoon'],
	['HTTP', 'http'],
	['HTTP Public-Key-Pins', 'hpkp'],
	['HTTP Strict-Transport-Security', 'hsts'],
	['IchigoJam', 'ichigojam'],
	['Icon', 'icon'],
	['ICU Message Format', 'icu-message-format'],
	['Idris', 'idris'],
	['.ignore', 'ignore'],
	['.gitignore', 'gitignore'],
	['.hgignore', 'hgignore'],
	['.npmignore', 'npmignore'],
	['Inform 7', 'inform7'],
	['Ini', 'ini'],
	['Io', 'io'],
	['J', 'j'],
	['Java', 'java'],
	['JavaDoc', 'javadoc'],
	['JavaDoc-like', 'javadoclike'],
	['Java stack trace', 'javastacktrace'],
	['Jexl', 'jexl'],
	['Jolie', 'jolie'],
	['JQ', 'jq'],
	['JSDoc', 'jsdoc'],
	['JS Extras', 'js-extras'],
	['JSON', 'json'],
	['Web App Manifest', 'webmanifest'],
	['JSON5', 'json5'],
	['JSONP', 'jsonp'],
	['JS stack trace', 'jsstacktrace'],
	['JS Templates', 'js-templates'],
	['Julia', 'julia'],
	['Keepalived Configure', 'keepalived'],
	['Keyman', 'keyman'],
	['Kotlin', 'kotlin'],
	['Kotlin Script', 'kts'],
	['KuMir (КуМир)', 'kumir'],
	['Kusto', 'kusto'],
	['LaTeX', 'latex'],
	['TeX', 'tex'],
	['ConTeXt', 'context'],
	['Latte', 'latte'],
	['Less', 'less'],
	['LilyPond', 'lilypond'],
	['Liquid', 'liquid'],
	['Lisp', 'lisp'],
	['LiveScript', 'livescript'],
	['LLVM IR', 'llvm'],
	['Log file', 'log'],
	['LOLCODE', 'lolcode'],
	['Lua', 'lua'],
	['Magma (CAS)', 'magma'],
	['Makefile', 'makefile'],
	['Markdown', 'markdown'],
	['Markup templating', 'markup-templating'],
	['Mata', 'mata'],
	['MATLAB', 'matlab'],
	['MAXScript', 'maxscript'],
	['MEL', 'mel'],
	['Mermaid', 'mermaid'],
	['METAFONT', 'metafont'],
	['Mizar', 'mizar'],
	['MongoDB', 'mongodb'],
	['Monkey', 'monkey'],
	['MoonScript', 'moonscript'],
	['N1QL', 'n1ql'],
	['N4JS', 'n4js'],
	['Nand To Tetris HDL', 'nand2tetris-hdl'],
	['Naninovel Script', 'naniscript'],
	['NASM', 'nasm'],
	['NEON', 'neon'],
	['Nevod', 'nevod'],
	['nginx', 'nginx'],
	['Nim', 'nim'],
	['Nix', 'nix'],
	['NSIS', 'nsis'],
	['Objective-C', 'objectivec'],
	['OCaml', 'ocaml'],
	['Odin', 'odin'],
	['OpenCL', 'opencl'],
	['OpenQasm', 'openqasm'],
	['Oz', 'oz'],
	['PARI/GP', 'parigp'],
	['Parser', 'parser'],
	['Pascal', 'pascal'],
	['Object Pascal', 'objectpascal'],
	['Pascaligo', 'pascaligo'],
	['PATROL Scripting Language', 'psl'],
	['PC-Axis', 'pcaxis'],
	['PeopleCode', 'peoplecode'],
	['Perl', 'perl'],
	['PHP', 'php'],
	['PHPDoc', 'phpdoc'],
	['PHP Extras', 'php-extras'],
	['PlantUML', 'plant-uml'],
	['PL/SQL', 'plsql'],
	['PowerQuery', 'powerquery'],
	['PowerShell', 'powershell'],
	['Processing', 'processing'],
	['Prolog', 'prolog'],
	['PromQL', 'promql'],
	['.properties', 'properties'],
	['Protocol Buffers', 'protobuf'],
	['Pug', 'pug'],
	['Puppet', 'puppet'],
	['Pure', 'pure'],
	['PureBasic', 'purebasic'],
	['PureScript', 'purescript'],
	['Python', 'python'],
	['Q#', 'qsharp'],
	['Q (kdb+ database)', 'q'],
	['QML', 'qml'],
	['Qore', 'qore'],
	['R', 'r'],
	['Racket', 'racket'],
	['Razor C#', 'cshtml'],
	['React JSX', 'jsx'],
	['React TSX', 'tsx'],
	['Reason', 'reason'],
	['Regex', 'regex'],
	['Rego', 'rego'],
	["Ren'py", 'renpy'],
	['ReScript', 'rescript'],
	['reST (reStructuredText)', 'rest'],
	['Rip', 'rip'],
	['Roboconf', 'roboconf'],
	['Robot Framework', 'robotframework'],
	['Ruby', 'ruby'],
	['Rust', 'rust'],
	['SAS', 'sas'],
	['Sass (Sass)', 'sass'],
	['Sass (SCSS)', 'scss'],
	['Scala', 'scala'],
	['Scheme', 'scheme'],
	['Shell session', 'shell-session'],
	['Smali', 'smali'],
	['Smalltalk', 'smalltalk'],
	['Smarty', 'smarty'],
	['SML', 'sml'],
	['SML/NJ', 'smlnj'],
	['Solidity (Ethereum)', 'solidity'],
	['Solution file', 'solution-file'],
	['Soy (Closure Template)', 'soy'],
	['SPARQL', 'sparql'],
	['Splunk SPL', 'splunk-spl'],
	['SQF: Status Quo Function (Arma 3)', 'sqf'],
	['SQL', 'sql'],
	['Squirrel', 'squirrel'],
	['Stan', 'stan'],
	['Stata Ado', 'stata'],
	['Structured Text (IEC 61131-3)', 'iecst'],
	['Stylus', 'stylus'],
	['SuperCollider', 'supercollider'],
	['Swift', 'swift'],
	['Systemd configuration file', 'systemd'],
	['T4 templating', 't4-templating'],
	['T4 Text Templates (C#)', 't4-cs'],
	['T4 Text Templates (VB)', 't4-vb'],
	['TAP', 'tap'],
	['Tcl', 'tcl'],
	['Template Toolkit 2', 'tt2'],
	['Textile', 'textile'],
	['TOML', 'toml'],
	['Tremor', 'tremor'],
	['trickle', 'trickle'],
	['troy', 'troy'],
	['Turtle', 'turtle'],
	['TriG', 'trig'],
	['Twig', 'twig'],
	['TypeScript', 'typescript'],
	['TypoScript', 'typoscript'],
	['TSConfig', 'tsconfig'],
	['UnrealScript', 'unrealscript'],
	['UO Razor Script', 'uorazor'],
	['URI', 'uri'],
	['URL', 'url'],
	['V', 'v'],
	['Vala', 'vala'],
	['VB.Net', 'vbnet'],
	['Velocity', 'velocity'],
	['Verilog', 'verilog'],
	['VHDL', 'vhdl'],
	['vim', 'vim'],
	['Visual Basic', 'visual-basic'],
	['VBA', 'vba'],
	['WarpScript', 'warpscript'],
	['WebAssembly', 'wasm'],
	['Web IDL', 'web-idl'],
	['WGSL', 'wgsl'],
	['Wiki markup', 'wiki'],
	['Wolfram language', 'wolfram'],
	['Mathematica', 'mathematica'],
	['Mathematica Notebook', 'nb'],
	['Wren', 'wren'],
	['Xeora', 'xeora'],
	['XeoraCube', 'xeoracube'],
	['XML doc (.net)', 'xml-doc'],
	['Xojo (REALbasic)', 'xojo'],
	['XQuery', 'xquery'],
	['YAML', 'yaml'],
	['YANG', 'yang'],
	['Zig', 'zig']
]);