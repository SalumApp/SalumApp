import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Linking,
} from "react-native";

import { IconGlyph } from "../assets/Glyph";
import { TopNav } from "../components/Navigation/TopNav";
import { SafeAreaInsetsView } from "../utils/SafeArea";

export const AcknowledgementScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const colorScheme = useColorScheme();
  const titleColor = colorScheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <SafeAreaInsetsView className="flex-1 bg-s_light-60 dark:bg-s_dark_navy-100">
      <TopNav
        title="Acknowledgements"
        titleColor={titleColor}
        left={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="pl-5"
          >
            <IconGlyph glyph="Arrow-left" dim={32} fill={titleColor} />
          </TouchableOpacity>
        }
        right={<View className="w-8" />}
      />
      <ScrollView className="p-4">
        <Text className="text-xl font-semibold mb-4">
          Libraries and Dependencies
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-export-namespace-from 7.18.9
        </Text>
        <Text className="my-1">- @babel/helper-plugin-utils 7.24.0</Text>
        <Text className="my-1">
          - @babel/plugin-syntax-export-namespace-from 7.8.3
        </Text>
        <Text className="my-1">- @expo/webpack-config 19.0.1</Text>
        <Text className="my-1">- @babel/core 7.24.4</Text>
        <Text className="my-1">- @ampproject/remapping 2.3.0</Text>
        <Text className="my-1">- @jridgewell/gen-mapping 0.3.5</Text>
        <Text className="my-1">- @jridgewell/set-array 1.2.1</Text>
        <Text className="my-1">- @jridgewell/sourcemap-codec 1.4.15</Text>
        <Text className="my-1">- @jridgewell/trace-mapping 0.3.25</Text>
        <Text className="my-1">- @jridgewell/resolve-uri 3.1.2</Text>
        <Text className="my-1">- @babel/code-frame 7.24.2</Text>
        <Text className="my-1">- @babel/highlight 7.24.2</Text>
        <Text className="my-1">
          - @babel/helper-validator-identifier 7.22.20
        </Text>
        <Text className="my-1">- chalk 2.4.2</Text>
        <Text className="my-1">- ansi-styles 3.2.1</Text>
        <Text className="my-1">- color-convert 1.9.3</Text>
        <Text className="my-1">- color-name 1.1.3</Text>
        <Text className="my-1">- escape-string-regexp 1.0.5</Text>
        <Text className="my-1">- supports-color 5.5.0</Text>
        <Text className="my-1">- has-flag 3.0.0</Text>
        <Text className="my-1">- js-tokens 4.0.0</Text>
        <Text className="my-1">- picocolors 1.0.0</Text>
        <Text className="my-1">- @babel/generator 7.24.4</Text>
        <Text className="my-1">- @babel/types 7.24.0</Text>
        <Text className="my-1">- @babel/helper-string-parser 7.24.1</Text>
        <Text className="my-1">- to-fast-properties 2.0.0</Text>
        <Text className="my-1">- jsesc 2.5.2</Text>
        <Text className="my-1">- @babel/helper-compilation-targets 7.23.6</Text>
        <Text className="my-1">- @babel/compat-data 7.24.4</Text>
        <Text className="my-1">- @babel/helper-validator-option 7.23.5</Text>
        <Text className="my-1">- browserslist 4.23.0</Text>
        <Text className="my-1">- caniuse-lite 1.0.30001610</Text>
        <Text className="my-1">- electron-to-chromium 1.4.737</Text>
        <Text className="my-1">- node-releases 2.0.14</Text>
        <Text className="my-1">- update-browserslist-db 1.0.13</Text>
        <Text className="my-1">- escalade 3.1.2</Text>
        <Text className="my-1">- lru-cache 5.1.1</Text>
        <Text className="my-1">- yallist 3.1.1</Text>
        <Text className="my-1">- semver 6.3.1</Text>
        <Text className="my-1">- @babel/helper-module-transforms 7.23.3</Text>
        <Text className="my-1">
          - @babel/helper-environment-visitor 7.22.20
        </Text>
        <Text className="my-1">- @babel/helper-module-imports 7.24.3</Text>
        <Text className="my-1">- @babel/helper-simple-access 7.22.5</Text>
        <Text className="my-1">
          - @babel/helper-split-export-declaration 7.22.6
        </Text>
        <Text className="my-1">- @babel/helpers 7.24.4</Text>
        <Text className="my-1">- @babel/template 7.24.0</Text>
        <Text className="my-1">- @babel/parser 7.24.4</Text>
        <Text className="my-1">- @babel/traverse 7.24.1</Text>
        <Text className="my-1">- @babel/helper-function-name 7.23.0</Text>
        <Text className="my-1">- @babel/helper-hoist-variables 7.22.5</Text>
        <Text className="my-1">- debug 4.3.4</Text>
        <Text className="my-1">- ms 2.1.2</Text>
        <Text className="my-1">- globals 11.12.0</Text>
        <Text className="my-1">- convert-source-map 2.0.0</Text>
        <Text className="my-1">- gensync 1.0.0</Text>
        <Text className="my-1">- json5 2.2.3</Text>
        <Text className="my-1">- babel-loader 8.3.0</Text>
        <Text className="my-1">- find-cache-dir 3.3.2</Text>
        <Text className="my-1">- commondir 1.0.1</Text>
        <Text className="my-1">- make-dir 3.1.0</Text>
        <Text className="my-1">- pkg-dir 4.2.0</Text>
        <Text className="my-1">- find-up 4.1.0</Text>
        <Text className="my-1">- locate-path 5.0.0</Text>
        <Text className="my-1">- p-locate 4.1.0</Text>
        <Text className="my-1">- p-limit 2.3.0</Text>
        <Text className="my-1">- p-try 2.2.0</Text>
        <Text className="my-1">- path-exists 4.0.0</Text>
        <Text className="my-1">- loader-utils 2.0.4</Text>
        <Text className="my-1">- big.js 5.2.2</Text>
        <Text className="my-1">- emojis-list 3.0.0</Text>
        <Text className="my-1">- schema-utils 2.7.1</Text>
        <Text className="my-1">- ajv 6.12.6</Text>
        <Text className="my-1">- fast-deep-equal 3.1.3</Text>
        <Text className="my-1">- fast-json-stable-stringify 2.1.0</Text>
        <Text className="my-1">- json-schema-traverse 0.4.1</Text>
        <Text className="my-1">- uri-js 4.4.1</Text>
        <Text className="my-1">- punycode 2.3.1</Text>
        <Text className="my-1">- ajv-keywords 3.5.2</Text>
        <Text className="my-1">- @types/json-schema 7.0.15</Text>
        <Text className="my-1">- chalk 4.1.2</Text>
        <Text className="my-1">- ansi-styles 4.3.0</Text>
        <Text className="my-1">- color-convert 2.0.1</Text>
        <Text className="my-1">- color-name 1.1.4</Text>
        <Text className="my-1">- supports-color 7.2.0</Text>
        <Text className="my-1">- has-flag 4.0.0</Text>
        <Text className="my-1">- clean-webpack-plugin 4.0.0</Text>
        <Text className="my-1">- del 4.1.1</Text>
        <Text className="my-1">- @types/glob 7.2.0</Text>
        <Text className="my-1">- @types/minimatch 5.1.2</Text>
        <Text className="my-1">- @types/node 20.12.7</Text>
        <Text className="my-1">- undici-types 5.26.5</Text>
        <Text className="my-1">- globby 6.1.0</Text>
        <Text className="my-1">- array-union 1.0.2</Text>
        <Text className="my-1">- array-uniq 1.0.3</Text>
        <Text className="my-1">- glob 7.2.3</Text>
        <Text className="my-1">- fs.realpath 1.0.0</Text>
        <Text className="my-1">- inflight 1.0.6</Text>
        <Text className="my-1">- once 1.4.0</Text>
        <Text className="my-1">- wrappy 1.0.2</Text>
        <Text className="my-1">- inherits 2.0.4</Text>
        <Text className="my-1">- minimatch 3.1.2</Text>
        <Text className="my-1">- brace-expansion 1.1.11</Text>
        <Text className="my-1">- balanced-match 1.0.2</Text>
        <Text className="my-1">- concat-map 0.0.1</Text>
        <Text className="my-1">- path-is-absolute 1.0.1</Text>
        <Text className="my-1">- object-assign 4.1.1</Text>
        <Text className="my-1">- pify 2.3.0</Text>
        <Text className="my-1">- pinkie-promise 2.0.1</Text>
        <Text className="my-1">- pinkie 2.0.4</Text>
        <Text className="my-1">- is-path-cwd 2.2.0</Text>
        <Text className="my-1">- is-path-in-cwd 2.1.0</Text>
        <Text className="my-1">- is-path-inside 2.1.0</Text>
        <Text className="my-1">- path-is-inside 1.0.2</Text>
        <Text className="my-1">- p-map 2.1.0</Text>
        <Text className="my-1">- pify 4.0.1</Text>
        <Text className="my-1">- rimraf 2.7.1</Text>
        <Text className="my-1">- copy-webpack-plugin 10.2.4</Text>
        <Text className="my-1">- fast-glob 3.3.2</Text>
        <Text className="my-1">- @nodelib/fs.stat 2.0.5</Text>
        <Text className="my-1">- @nodelib/fs.walk 1.2.8</Text>
        <Text className="my-1">- @nodelib/fs.scandir 2.1.5</Text>
        <Text className="my-1">- run-parallel 1.2.0</Text>
        <Text className="my-1">- queue-microtask 1.2.3</Text>
        <Text className="my-1">- fastq 1.17.1</Text>
        <Text className="my-1">- reusify 1.0.4</Text>
        <Text className="my-1">- glob-parent 5.1.2</Text>
        <Text className="my-1">- is-glob 4.0.3</Text>
        <Text className="my-1">- is-extglob 2.1.1</Text>
        <Text className="my-1">- merge2 1.4.1</Text>
        <Text className="my-1">- micromatch 4.0.5</Text>
        <Text className="my-1">- braces 3.0.2</Text>
        <Text className="my-1">- fill-range 7.0.1</Text>
        <Text className="my-1">- to-regex-range 5.0.1</Text>
        <Text className="my-1">- is-number 7.0.0</Text>
        <Text className="my-1">- picomatch 2.3.1</Text>
        <Text className="my-1">- glob-parent 6.0.2</Text>
        <Text className="my-1">- globby 12.2.0</Text>
        <Text className="my-1">- array-union 3.0.1</Text>
        <Text className="my-1">- dir-glob 3.0.1</Text>
        <Text className="my-1">- path-type 4.0.0</Text>
        <Text className="my-1">- ignore 5.3.1</Text>
        <Text className="my-1">- slash 4.0.0</Text>
        <Text className="my-1">- normalize-path 3.0.0</Text>
        <Text className="my-1">- schema-utils 4.2.0</Text>
        <Text className="my-1">- ajv 8.12.0</Text>
        <Text className="my-1">- json-schema-traverse 1.0.0</Text>
        <Text className="my-1">- require-from-string 2.0.2</Text>
        <Text className="my-1">- ajv-formats 2.1.1</Text>
        <Text className="my-1">- ajv-keywords 5.1.0</Text>
        <Text className="my-1">- serialize-javascript 6.0.2</Text>
        <Text className="my-1">- randombytes 2.1.0</Text>
        <Text className="my-1">- safe-buffer 5.2.1</Text>
        <Text className="my-1">- css-loader 6.11.0</Text>
        <Text className="my-1">- icss-utils 5.1.0</Text>
        <Text className="my-1">- postcss 8.4.38</Text>
        <Text className="my-1">- nanoid 3.3.7</Text>
        <Text className="my-1">- source-map-js 1.2.0</Text>
        <Text className="my-1">- postcss-modules-extract-imports 3.1.0</Text>
        <Text className="my-1">- postcss-modules-local-by-default 4.0.5</Text>
        <Text className="my-1">- postcss-selector-parser 6.0.16</Text>
        <Text className="my-1">- cssesc 3.0.0</Text>
        <Text className="my-1">- util-deprecate 1.0.2</Text>
        <Text className="my-1">- postcss-value-parser 4.2.0</Text>
        <Text className="my-1">- postcss-modules-scope 3.2.0</Text>
        <Text className="my-1">- postcss-modules-values 4.0.0</Text>
        <Text className="my-1">- semver 7.6.0</Text>
        <Text className="my-1">- lru-cache 6.0.0</Text>
        <Text className="my-1">- yallist 4.0.0</Text>
        <Text className="my-1">- css-minimizer-webpack-plugin 3.4.1</Text>
        <Text className="my-1">- cssnano 5.1.15</Text>
        <Text className="my-1">- lilconfig 2.1.0</Text>
        <Text className="my-1">- yaml 1.10.2</Text>
        <Text className="my-1">- cssnano-preset-default 5.2.14</Text>
        <Text className="my-1">- css-declaration-sorter 6.4.1</Text>
        <Text className="my-1">- postcss-calc 8.2.4</Text>
        <Text className="my-1">- cssnano-utils 3.1.0</Text>
        <Text className="my-1">- postcss-discard-comments 5.1.2</Text>
        <Text className="my-1">- postcss-convert-values 5.1.3</Text>
        <Text className="my-1">- postcss-discard-duplicates 5.1.0</Text>
        <Text className="my-1">- postcss-colormin 5.3.1</Text>
        <Text className="my-1">- caniuse-api 3.0.0</Text>
        <Text className="my-1">- lodash.memoize 4.1.2</Text>
        <Text className="my-1">- lodash.uniq 4.5.0</Text>
        <Text className="my-1">- colord 2.9.3</Text>
        <Text className="my-1">- postcss-discard-empty 5.1.1</Text>
        <Text className="my-1">- postcss-discard-overridden 5.1.0</Text>
        <Text className="my-1">- postcss-merge-longhand 5.1.7</Text>
        <Text className="my-1">- stylehacks 5.1.1</Text>
        <Text className="my-1">- postcss-merge-rules 5.1.4</Text>
        <Text className="my-1">- postcss-minify-gradients 5.1.1</Text>
        <Text className="my-1">- postcss-minify-font-values 5.1.0</Text>
        <Text className="my-1">- postcss-minify-params 5.1.4</Text>
        <Text className="my-1">- postcss-normalize-charset 5.1.0</Text>
        <Text className="my-1">- postcss-minify-selectors 5.2.1</Text>
        <Text className="my-1">- postcss-normalize-display-values 5.1.0</Text>
        <Text className="my-1">- postcss-normalize-positions 5.1.1</Text>
        <Text className="my-1">- postcss-normalize-repeat-style 5.1.1</Text>
        <Text className="my-1">- postcss-normalize-string 5.1.0</Text>
        <Text className="my-1">- postcss-normalize-timing-functions 5.1.0</Text>
        <Text className="my-1">- postcss-normalize-unicode 5.1.1</Text>
        <Text className="my-1">- postcss-normalize-whitespace 5.1.1</Text>
        <Text className="my-1">- postcss-normalize-url 5.1.0</Text>
        <Text className="my-1">- normalize-url 6.1.0</Text>
        <Text className="my-1">- postcss-ordered-values 5.1.3</Text>
        <Text className="my-1">- postcss-reduce-initial 5.1.2</Text>
        <Text className="my-1">- postcss-reduce-transforms 5.1.0</Text>
        <Text className="my-1">- postcss-svgo 5.1.0</Text>
        <Text className="my-1">- svgo 2.8.0</Text>
        <Text className="my-1">- @trysound/sax 0.2.0</Text>
        <Text className="my-1">- commander 7.2.0</Text>
        <Text className="my-1">- css-select 4.3.0</Text>
        <Text className="my-1">- boolbase 1.0.0</Text>
        <Text className="my-1">- css-what 6.1.0</Text>
        <Text className="my-1">- domhandler 4.3.1</Text>
        <Text className="my-1">- domelementtype 2.3.0</Text>
        <Text className="my-1">- domutils 2.8.0</Text>
        <Text className="my-1">- dom-serializer 1.4.1</Text>
        <Text className="my-1">- entities 2.2.0</Text>
        <Text className="my-1">- nth-check 2.1.1</Text>
        <Text className="my-1">- css-tree 1.1.3</Text>
        <Text className="my-1">- mdn-data 2.0.14</Text>
        <Text className="my-1">- source-map 0.6.1</Text>
        <Text className="my-1">- csso 4.2.0</Text>
        <Text className="my-1">- stable 0.1.8</Text>
        <Text className="my-1">- postcss-unique-selectors 5.1.1</Text>
        <Text className="my-1">- jest-worker 27.5.1</Text>
        <Text className="my-1">- merge-stream 2.0.0</Text>
        <Text className="my-1">- supports-color 8.1.1</Text>
        <Text className="my-1">- expo-pwa 0.0.127</Text>
        <Text className="my-1">- @expo/image-utils 0.3.23</Text>
        <Text className="my-1">- @expo/spawn-async 1.5.0</Text>
        <Text className="my-1">- cross-spawn 6.0.5</Text>
        <Text className="my-1">- nice-try 1.0.5</Text>
        <Text className="my-1">- path-key 2.0.1</Text>
        <Text className="my-1">- semver 5.7.2</Text>
        <Text className="my-1">- shebang-command 1.2.0</Text>
        <Text className="my-1">- shebang-regex 1.0.0</Text>
        <Text className="my-1">- which 1.3.1</Text>
        <Text className="my-1">- isexe 2.0.0</Text>
        <Text className="my-1">- fs-extra 9.0.0</Text>
        <Text className="my-1">- at-least-node 1.0.0</Text>
        <Text className="my-1">- graceful-fs 4.2.11</Text>
        <Text className="my-1">- jsonfile 6.1.0</Text>
        <Text className="my-1">- universalify 2.0.1</Text>
        <Text className="my-1">- universalify 1.0.0</Text>
        <Text className="my-1">- getenv 1.0.0</Text>
        <Text className="my-1">- jimp-compact 0.16.1</Text>
        <Text className="my-1">- mime 2.6.0</Text>
        <Text className="my-1">- node-fetch 2.7.0</Text>
        <Text className="my-1">- whatwg-url 5.0.0</Text>
        <Text className="my-1">- tr46 0.0.3</Text>
        <Text className="my-1">- webidl-conversions 3.0.1</Text>
        <Text className="my-1">- parse-png 2.1.0</Text>
        <Text className="my-1">- pngjs 3.4.0</Text>
        <Text className="my-1">- resolve-from 5.0.0</Text>
        <Text className="my-1">- semver 7.3.2</Text>
        <Text className="my-1">- tempy 0.3.0</Text>
        <Text className="my-1">- temp-dir 1.0.0</Text>
        <Text className="my-1">- type-fest 0.3.1</Text>
        <Text className="my-1">- unique-string 1.0.0</Text>
        <Text className="my-1">- crypto-random-string 1.0.0</Text>
        <Text className="my-1">- commander 2.20.0</Text>
        <Text className="my-1">- update-check 1.5.3</Text>
        <Text className="my-1">- registry-auth-token 3.3.2</Text>
        <Text className="my-1">- rc 1.2.8</Text>
        <Text className="my-1">- deep-extend 0.6.0</Text>
        <Text className="my-1">- ini 1.3.8</Text>
        <Text className="my-1">- minimist 1.2.8</Text>
        <Text className="my-1">- strip-json-comments 2.0.1</Text>
        <Text className="my-1">- registry-url 3.1.0</Text>
        <Text className="my-1">- find-up 5.0.0</Text>
        <Text className="my-1">- locate-path 6.0.0</Text>
        <Text className="my-1">- p-locate 5.0.0</Text>
        <Text className="my-1">- p-limit 3.1.0</Text>
        <Text className="my-1">- yocto-queue 0.1.0</Text>
        <Text className="my-1">- find-yarn-workspace-root 2.0.0</Text>
        <Text className="my-1">- fs-extra 11.2.0</Text>
        <Text className="my-1">- html-webpack-plugin 5.6.0</Text>
        <Text className="my-1">- @types/html-minifier-terser 6.1.0</Text>
        <Text className="my-1">- html-minifier-terser 6.1.0</Text>
        <Text className="my-1">- camel-case 4.1.2</Text>
        <Text className="my-1">- pascal-case 3.1.2</Text>
        <Text className="my-1">- no-case 3.0.4</Text>
        <Text className="my-1">- lower-case 2.0.2</Text>
        <Text className="my-1">- tslib 2.6.2</Text>
        <Text className="my-1">- clean-css 5.3.3</Text>
        <Text className="my-1">- commander 8.3.0</Text>
        <Text className="my-1">- he 1.2.0</Text>
        <Text className="my-1">- param-case 3.0.4</Text>
        <Text className="my-1">- dot-case 3.0.4</Text>
        <Text className="my-1">- relateurl 0.2.7</Text>
        <Text className="my-1">- terser 5.30.3</Text>
        <Text className="my-1">- @jridgewell/source-map 0.3.6</Text>
        <Text className="my-1">- acorn 8.11.3</Text>
        <Text className="my-1">- commander 2.20.3</Text>
        <Text className="my-1">- source-map-support 0.5.21</Text>
        <Text className="my-1">- buffer-from 1.1.2</Text>
        <Text className="my-1">- lodash 4.17.21</Text>
        <Text className="my-1">- pretty-error 4.0.0</Text>
        <Text className="my-1">- renderkid 3.0.0</Text>
        <Text className="my-1">- dom-converter 0.2.0</Text>
        <Text className="my-1">- utila 0.4.0</Text>
        <Text className="my-1">- htmlparser2 6.1.0</Text>
        <Text className="my-1">- strip-ansi 6.0.1</Text>
        <Text className="my-1">- ansi-regex 5.0.1</Text>
        <Text className="my-1">- tapable 2.2.1</Text>
        <Text className="my-1">- is-wsl 2.2.0</Text>
        <Text className="my-1">- is-docker 2.2.1</Text>
        <Text className="my-1">- mini-css-extract-plugin 2.9.0</Text>
        <Text className="my-1">- node-html-parser 5.4.2</Text>
        <Text className="my-1">- semver 7.5.4</Text>
        <Text className="my-1">- source-map-loader 3.0.2</Text>
        <Text className="my-1">- abab 2.0.6</Text>
        <Text className="my-1">- iconv-lite 0.6.3</Text>
        <Text className="my-1">- safer-buffer 2.1.2</Text>
        <Text className="my-1">- style-loader 3.3.4</Text>
        <Text className="my-1">- terser-webpack-plugin 5.3.10</Text>
        <Text className="my-1">- schema-utils 3.3.0</Text>
        <Text className="my-1">- webpack 5.91.0</Text>
        <Text className="my-1">- @types/eslint-scope 3.7.7</Text>
        <Text className="my-1">- @types/eslint 8.56.9</Text>
        <Text className="my-1">- @types/estree 1.0.5</Text>
        <Text className="my-1">- @webassemblyjs/ast 1.12.1</Text>
        <Text className="my-1">- @webassemblyjs/helper-numbers 1.11.6</Text>
        <Text className="my-1">
          - @webassemblyjs/floating-point-hex-parser 1.11.6
        </Text>
        <Text className="my-1">- @webassemblyjs/helper-api-error 1.11.6</Text>
        <Text className="my-1">- @xtuc/long 4.2.2</Text>
        <Text className="my-1">
          - @webassemblyjs/helper-wasm-bytecode 1.11.6
        </Text>
        <Text className="my-1">- @webassemblyjs/wasm-edit 1.12.1</Text>
        <Text className="my-1">- @webassemblyjs/helper-buffer 1.12.1</Text>
        <Text className="my-1">
          - @webassemblyjs/helper-wasm-section 1.12.1
        </Text>
        <Text className="my-1">- @webassemblyjs/wasm-gen 1.12.1</Text>
        <Text className="my-1">- @webassemblyjs/ieee754 1.11.6</Text>
        <Text className="my-1">- @xtuc/ieee754 1.2.0</Text>
        <Text className="my-1">- @webassemblyjs/leb128 1.11.6</Text>
        <Text className="my-1">- @webassemblyjs/utf8 1.11.6</Text>
        <Text className="my-1">- @webassemblyjs/wasm-opt 1.12.1</Text>
        <Text className="my-1">- @webassemblyjs/wasm-parser 1.12.1</Text>
        <Text className="my-1">- @webassemblyjs/wast-printer 1.12.1</Text>
        <Text className="my-1">- acorn-import-assertions 1.9.0</Text>
        <Text className="my-1">- chrome-trace-event 1.0.3</Text>
        <Text className="my-1">- enhanced-resolve 5.16.0</Text>
        <Text className="my-1">- es-module-lexer 1.5.0</Text>
        <Text className="my-1">- eslint-scope 5.1.1</Text>
        <Text className="my-1">- esrecurse 4.3.0</Text>
        <Text className="my-1">- estraverse 5.3.0</Text>
        <Text className="my-1">- estraverse 4.3.0</Text>
        <Text className="my-1">- events 3.3.0</Text>
        <Text className="my-1">- glob-to-regexp 0.4.1</Text>
        <Text className="my-1">- json-parse-even-better-errors 2.3.1</Text>
        <Text className="my-1">- loader-runner 4.3.0</Text>
        <Text className="my-1">- mime-types 2.1.35</Text>
        <Text className="my-1">- mime-db 1.52.0</Text>
        <Text className="my-1">- neo-async 2.6.2</Text>
        <Text className="my-1">- watchpack 2.4.1</Text>
        <Text className="my-1">- webpack-sources 3.2.3</Text>
        <Text className="my-1">- webpack-dev-server 4.15.2</Text>
        <Text className="my-1">- @types/bonjour 3.5.13</Text>
        <Text className="my-1">
          - @types/connect-history-api-fallback 1.5.4
        </Text>
        <Text className="my-1">- @types/express-serve-static-core 4.19.0</Text>
        <Text className="my-1">- @types/qs 6.9.15</Text>
        <Text className="my-1">- @types/range-parser 1.2.7</Text>
        <Text className="my-1">- @types/send 0.17.4</Text>
        <Text className="my-1">- @types/mime 1.3.5</Text>
        <Text className="my-1">- @types/express 4.17.21</Text>
        <Text className="my-1">- @types/body-parser 1.19.5</Text>
        <Text className="my-1">- @types/connect 3.4.38</Text>
        <Text className="my-1">- @types/serve-static 1.15.7</Text>
        <Text className="my-1">- @types/http-errors 2.0.4</Text>
        <Text className="my-1">- @types/serve-index 1.9.4</Text>
        <Text className="my-1">- @types/sockjs 0.3.36</Text>
        <Text className="my-1">- @types/ws 8.5.10</Text>
        <Text className="my-1">- ansi-html-community 0.0.8</Text>
        <Text className="my-1">- bonjour-service 1.2.1</Text>
        <Text className="my-1">- multicast-dns 7.2.5</Text>
        <Text className="my-1">- dns-packet 5.6.1</Text>
        <Text className="my-1">- @leichtgewicht/ip-codec 2.0.5</Text>
        <Text className="my-1">- thunky 1.1.0</Text>
        <Text className="my-1">- chokidar 3.6.0</Text>
        <Text className="my-1">- anymatch 3.1.3</Text>
        <Text className="my-1">- is-binary-path 2.1.0</Text>
        <Text className="my-1">- binary-extensions 2.3.0</Text>
        <Text className="my-1">- readdirp 3.6.0</Text>
        <Text className="my-1">- colorette 2.0.20</Text>
        <Text className="my-1">- compression 1.7.4</Text>
        <Text className="my-1">- accepts 1.3.8</Text>
        <Text className="my-1">- negotiator 0.6.3</Text>
        <Text className="my-1">- bytes 3.0.0</Text>
        <Text className="my-1">- compressible 2.0.18</Text>
        <Text className="my-1">- debug 2.6.9</Text>
        <Text className="my-1">- ms 2.0.0</Text>
        <Text className="my-1">- on-headers 1.0.2</Text>
        <Text className="my-1">- safe-buffer 5.1.2</Text>
        <Text className="my-1">- vary 1.1.2</Text>
        <Text className="my-1">- connect-history-api-fallback 2.0.0</Text>
        <Text className="my-1">- default-gateway 6.0.3</Text>
        <Text className="my-1">- execa 5.1.1</Text>
        <Text className="my-1">- cross-spawn 7.0.3</Text>
        <Text className="my-1">- path-key 3.1.1</Text>
        <Text className="my-1">- shebang-command 2.0.0</Text>
        <Text className="my-1">- shebang-regex 3.0.0</Text>
        <Text className="my-1">- which 2.0.2</Text>
        <Text className="my-1">- get-stream 6.0.1</Text>
        <Text className="my-1">- human-signals 2.1.0</Text>
        <Text className="my-1">- is-stream 2.0.1</Text>
        <Text className="my-1">- npm-run-path 4.0.1</Text>
        <Text className="my-1">- onetime 5.1.2</Text>
        <Text className="my-1">- mimic-fn 2.1.0</Text>
        <Text className="my-1">- signal-exit 3.0.7</Text>
        <Text className="my-1">- strip-final-newline 2.0.0</Text>
        <Text className="my-1">- express 4.19.2</Text>
        <Text className="my-1">- array-flatten 1.1.1</Text>
        <Text className="my-1">- body-parser 1.20.2</Text>
        <Text className="my-1">- bytes 3.1.2</Text>
        <Text className="my-1">- content-type 1.0.5</Text>
        <Text className="my-1">- depd 2.0.0</Text>
        <Text className="my-1">- destroy 1.2.0</Text>
        <Text className="my-1">- http-errors 2.0.0</Text>
        <Text className="my-1">- setprototypeof 1.2.0</Text>
        <Text className="my-1">- statuses 2.0.1</Text>
        <Text className="my-1">- toidentifier 1.0.1</Text>
        <Text className="my-1">- iconv-lite 0.4.24</Text>
        <Text className="my-1">- on-finished 2.4.1</Text>
        <Text className="my-1">- ee-first 1.1.1</Text>
        <Text className="my-1">- qs 6.11.0</Text>
        <Text className="my-1">- side-channel 1.0.6</Text>
        <Text className="my-1">- call-bind 1.0.7</Text>
        <Text className="my-1">- es-define-property 1.0.0</Text>
        <Text className="my-1">- get-intrinsic 1.2.4</Text>
        <Text className="my-1">- es-errors 1.3.0</Text>
        <Text className="my-1">- function-bind 1.1.2</Text>
        <Text className="my-1">- has-proto 1.0.3</Text>
        <Text className="my-1">- has-symbols 1.0.3</Text>
        <Text className="my-1">- hasown 2.0.2</Text>
        <Text className="my-1">- set-function-length 1.2.2</Text>
        <Text className="my-1">- define-data-property 1.1.4</Text>
        <Text className="my-1">- gopd 1.0.1</Text>
        <Text className="my-1">- has-property-descriptors 1.0.2</Text>
        <Text className="my-1">- object-inspect 1.13.1</Text>
        <Text className="my-1">- raw-body 2.5.2</Text>
        <Text className="my-1">- unpipe 1.0.0</Text>
        <Text className="my-1">- type-is 1.6.18</Text>
        <Text className="my-1">- media-typer 0.3.0</Text>
        <Text className="my-1">- content-disposition 0.5.4</Text>
        <Text className="my-1">- cookie 0.6.0</Text>
        <Text className="my-1">- cookie-signature 1.0.6</Text>
        <Text className="my-1">- encodeurl 1.0.2</Text>
        <Text className="my-1">- escape-html 1.0.3</Text>
        <Text className="my-1">- etag 1.8.1</Text>
        <Text className="my-1">- finalhandler 1.2.0</Text>
        <Text className="my-1">- parseurl 1.3.3</Text>
        <Text className="my-1">- fresh 0.5.2</Text>
        <Text className="my-1">- merge-descriptors 1.0.1</Text>
        <Text className="my-1">- methods 1.1.2</Text>
        <Text className="my-1">- path-to-regexp 0.1.7</Text>
        <Text className="my-1">- proxy-addr 2.0.7</Text>
        <Text className="my-1">- forwarded 0.2.0</Text>
        <Text className="my-1">- ipaddr.js 1.9.1</Text>
        <Text className="my-1">- range-parser 1.2.1</Text>
        <Text className="my-1">- send 0.18.0</Text>
        <Text className="my-1">- mime 1.6.0</Text>
        <Text className="my-1">- ms 2.1.3</Text>
        <Text className="my-1">- serve-static 1.15.0</Text>
        <Text className="my-1">- utils-merge 1.0.1</Text>
        <Text className="my-1">- html-entities 2.5.2</Text>
        <Text className="my-1">- http-proxy-middleware 2.0.6</Text>
        <Text className="my-1">- @types/http-proxy 1.17.14</Text>
        <Text className="my-1">- http-proxy 1.18.1</Text>
        <Text className="my-1">- eventemitter3 4.0.7</Text>
        <Text className="my-1">- requires-port 1.0.0</Text>
        <Text className="my-1">- follow-redirects 1.15.6</Text>
        <Text className="my-1">- is-plain-obj 3.0.0</Text>
        <Text className="my-1">- ipaddr.js 2.1.0</Text>
        <Text className="my-1">- launch-editor 2.6.1</Text>
        <Text className="my-1">- shell-quote 1.8.1</Text>
        <Text className="my-1">- open 8.4.2</Text>
        <Text className="my-1">- define-lazy-prop 2.0.0</Text>
        <Text className="my-1">- p-retry 4.6.2</Text>
        <Text className="my-1">- @types/retry 0.12.0</Text>
        <Text className="my-1">- retry 0.13.1</Text>
        <Text className="my-1">- rimraf 3.0.2</Text>
        <Text className="my-1">- selfsigned 2.4.1</Text>
        <Text className="my-1">- @types/node-forge 1.3.11</Text>
        <Text className="my-1">- node-forge 1.3.1</Text>
        <Text className="my-1">- serve-index 1.9.1</Text>
        <Text className="my-1">- batch 0.6.1</Text>
        <Text className="my-1">- http-errors 1.6.3</Text>
        <Text className="my-1">- depd 1.1.2</Text>
        <Text className="my-1">- inherits 2.0.3</Text>
        <Text className="my-1">- setprototypeof 1.1.0</Text>
        <Text className="my-1">- statuses 1.5.0</Text>
        <Text className="my-1">- sockjs 0.3.24</Text>
        <Text className="my-1">- faye-websocket 0.11.4</Text>
        <Text className="my-1">- websocket-driver 0.7.4</Text>
        <Text className="my-1">- http-parser-js 0.5.8</Text>
        <Text className="my-1">- websocket-extensions 0.1.4</Text>
        <Text className="my-1">- uuid 8.3.2</Text>
        <Text className="my-1">- spdy 4.0.2</Text>
        <Text className="my-1">- handle-thing 2.0.1</Text>
        <Text className="my-1">- http-deceiver 1.2.7</Text>
        <Text className="my-1">- select-hose 2.0.0</Text>
        <Text className="my-1">- spdy-transport 3.0.0</Text>
        <Text className="my-1">- detect-node 2.1.0</Text>
        <Text className="my-1">- hpack.js 2.1.6</Text>
        <Text className="my-1">- obuf 1.1.2</Text>
        <Text className="my-1">- readable-stream 2.3.8</Text>
        <Text className="my-1">- core-util-is 1.0.3</Text>
        <Text className="my-1">- isarray 1.0.0</Text>
        <Text className="my-1">- process-nextick-args 2.0.1</Text>
        <Text className="my-1">- string_decoder 1.1.1</Text>
        <Text className="my-1">- wbuf 1.7.3</Text>
        <Text className="my-1">- minimalistic-assert 1.0.1</Text>
        <Text className="my-1">- readable-stream 3.6.2</Text>
        <Text className="my-1">- string_decoder 1.3.0</Text>
        <Text className="my-1">- webpack-dev-middleware 5.3.4</Text>
        <Text className="my-1">- memfs 3.6.0</Text>
        <Text className="my-1">- fs-monkey 1.0.5</Text>
        <Text className="my-1">- ws 8.16.0</Text>
        <Text className="my-1">- webpack-manifest-plugin 4.1.1</Text>
        <Text className="my-1">- webpack-sources 2.3.1</Text>
        <Text className="my-1">- source-list-map 2.0.1</Text>
        <Text className="my-1">- @react-native-community/slider 4.4.2</Text>
        <Text className="my-1">
          - @react-native-google-signin/google-signin 11.0.1
        </Text>
        <Text className="my-1">
          - @react-native-masked-view/masked-view 0.3.0
        </Text>
        <Text className="my-1">- @react-navigation/bottom-tabs 6.5.20</Text>
        <Text className="my-1">- @react-navigation/elements 1.3.30</Text>
        <Text className="my-1">- color 4.2.3</Text>
        <Text className="my-1">- color-string 1.9.1</Text>
        <Text className="my-1">- simple-swizzle 0.2.2</Text>
        <Text className="my-1">- is-arrayish 0.3.2</Text>
        <Text className="my-1">- warn-once 0.1.1</Text>
        <Text className="my-1">- @react-navigation/native 7.0.0</Text>
        <Text className="my-1">- @react-navigation/core 7.0.0</Text>
        <Text className="my-1">- @react-navigation/routers 7.0.0</Text>
        <Text className="my-1">- escape-string-regexp 4.0.0</Text>
        <Text className="my-1">- query-string 7.1.3</Text>
        <Text className="my-1">- decode-uri-component 0.2.2</Text>
        <Text className="my-1">- filter-obj 1.1.0</Text>
        <Text className="my-1">- split-on-first 1.1.0</Text>
        <Text className="my-1">- strict-uri-encode 2.0.0</Text>
        <Text className="my-1">- react-is 18.2.0</Text>
        <Text className="my-1">- use-latest-callback 0.1.9</Text>
        <Text className="my-1">- @react-navigation/native-stack 6.9.26</Text>
        <Text className="my-1">- @react-navigation/stack 7.0.0</Text>
        <Text className="my-1">- @react-navigation/elements 2.0.0</Text>
        <Text className="my-1">- @realm/react 0.6.2</Text>
        <Text className="my-1">- @rneui/base 4.0.0</Text>
        <Text className="my-1">- @types/react-native-vector-icons 6.4.18</Text>
        <Text className="my-1">- @types/react 18.2.79</Text>
        <Text className="my-1">- @types/prop-types 15.7.12</Text>
        <Text className="my-1">- csstype 3.1.3</Text>
        <Text className="my-1">- @types/react-native 0.70.19</Text>
        <Text className="my-1">- color 3.2.1</Text>
        <Text className="my-1">- deepmerge 4.3.1</Text>
        <Text className="my-1">- hoist-non-react-statics 3.3.2</Text>
        <Text className="my-1">- react-is 16.13.1</Text>
        <Text className="my-1">- react-native-ratings 8.1.0</Text>
        <Text className="my-1">- react-native-size-matters 0.4.2</Text>
        <Text className="my-1">- @rneui/themed 4.0.0</Text>
        <Text className="my-1">
          - @robinbobin/react-native-google-drive-api-wrapper 1.2.4
        </Text>
        <Text className="my-1">- base64-js 1.5.1</Text>
        <Text className="my-1">- simple-common-utils 2.6.0</Text>
        <Text className="my-1">- utf8 3.0.0</Text>
        <Text className="my-1">
          - @storybook/addon-ondevice-backgrounds 7.6.17
        </Text>
        <Text className="my-1">- @storybook/manager-api 7.6.17</Text>
        <Text className="my-1">- @storybook/channels 7.6.17</Text>
        <Text className="my-1">- @storybook/client-logger 7.6.17</Text>
        <Text className="my-1">- @storybook/global 5.0.0</Text>
        <Text className="my-1">- @storybook/core-events 7.6.17</Text>
        <Text className="my-1">- ts-dedent 2.2.0</Text>
        <Text className="my-1">- qs 6.12.1</Text>
        <Text className="my-1">- telejson 7.2.0</Text>
        <Text className="my-1">- memoizerific 1.11.3</Text>
        <Text className="my-1">- map-or-similar 1.5.0</Text>
        <Text className="my-1">- tiny-invariant 1.3.3</Text>
        <Text className="my-1">- @storybook/csf 0.1.4</Text>
        <Text className="my-1">- type-fest 2.19.0</Text>
        <Text className="my-1">- @storybook/router 7.6.17</Text>
        <Text className="my-1">- @storybook/theming 7.6.17</Text>
        <Text className="my-1">
          - @emotion/use-insertion-effect-with-fallbacks 1.0.1
        </Text>
        <Text className="my-1">- @storybook/types 7.6.17</Text>
        <Text className="my-1">- @types/babel__core 7.20.5</Text>
        <Text className="my-1">- @types/babel__generator 7.6.8</Text>
        <Text className="my-1">- @types/babel__template 7.4.4</Text>
        <Text className="my-1">- @types/babel__traverse 7.20.5</Text>
        <Text className="my-1">- file-system-cache 2.3.0</Text>
        <Text className="my-1">- fs-extra 11.1.1</Text>
        <Text className="my-1">- ramda 0.29.0</Text>
        <Text className="my-1">- dequal 2.0.3</Text>
        <Text className="my-1">- store2 2.14.3</Text>
        <Text className="my-1">- @storybook/preview-api 7.6.17</Text>
        <Text className="my-1">- synchronous-promise 2.0.17</Text>
        <Text className="my-1">- @storybook/react-native-theming 7.6.17</Text>
        <Text className="my-1">- @storybook/addon-ondevice-notes 7.6.17</Text>
        <Text className="my-1">- react-native-markdown-display 6.1.6</Text>
        <Text className="my-1">- css-to-react-native 3.2.0</Text>
        <Text className="my-1">- camelize 1.0.1</Text>
        <Text className="my-1">- css-color-keywords 1.0.0</Text>
        <Text className="my-1">- markdown-it 10.0.0</Text>
        <Text className="my-1">- argparse 1.0.10</Text>
        <Text className="my-1">- sprintf-js 1.0.3</Text>
        <Text className="my-1">- entities 2.0.3</Text>
        <Text className="my-1">- linkify-it 2.2.0</Text>
        <Text className="my-1">- uc.micro 1.0.6</Text>
        <Text className="my-1">- mdurl 1.0.1</Text>
        <Text className="my-1">- prop-types 15.8.1</Text>
        <Text className="my-1">- loose-envify 1.4.0</Text>
        <Text className="my-1">- react-native-fit-image 1.5.5</Text>
        <Text className="my-1">- @types/jest 29.5.12</Text>
        <Text className="my-1">- expect 29.7.0</Text>
        <Text className="my-1">- @jest/expect-utils 29.7.0</Text>
        <Text className="my-1">- jest-get-type 29.6.3</Text>
        <Text className="my-1">- jest-matcher-utils 29.7.0</Text>
        <Text className="my-1">- jest-diff 29.7.0</Text>
        <Text className="my-1">- diff-sequences 29.6.3</Text>
        <Text className="my-1">- pretty-format 29.7.0</Text>
        <Text className="my-1">- @jest/schemas 29.6.3</Text>
        <Text className="my-1">- @sinclair/typebox 0.27.8</Text>
        <Text className="my-1">- ansi-styles 5.2.0</Text>
        <Text className="my-1">- jest-message-util 29.7.0</Text>
        <Text className="my-1">- @jest/types 29.6.3</Text>
        <Text className="my-1">- @types/istanbul-lib-coverage 2.0.6</Text>
        <Text className="my-1">- @types/istanbul-reports 3.0.4</Text>
        <Text className="my-1">- @types/istanbul-lib-report 3.0.3</Text>
        <Text className="my-1">- @types/yargs 17.0.32</Text>
        <Text className="my-1">- @types/yargs-parser 21.0.3</Text>
        <Text className="my-1">- @types/stack-utils 2.0.3</Text>
        <Text className="my-1">- slash 3.0.0</Text>
        <Text className="my-1">- stack-utils 2.0.6</Text>
        <Text className="my-1">- escape-string-regexp 2.0.0</Text>
        <Text className="my-1">- jest-util 29.7.0</Text>
        <Text className="my-1">- ci-info 3.9.0</Text>
        <Text className="my-1">- @types/react-native 0.73.0</Text>
        <Text className="my-1">- react-native 0.73.6</Text>
        <Text className="my-1">- @jest/create-cache-key-function 29.7.0</Text>
        <Text className="my-1">- @react-native-community/cli 12.3.6</Text>
        <Text className="my-1">- @react-native-community/cli-clean 12.3.6</Text>
        <Text className="my-1">- @react-native-community/cli-tools 12.3.6</Text>
        <Text className="my-1">- appdirsjs 1.2.7</Text>
        <Text className="my-1">- open 6.4.0</Text>
        <Text className="my-1">- is-wsl 1.1.0</Text>
        <Text className="my-1">- ora 5.4.1</Text>
        <Text className="my-1">- bl 4.1.0</Text>
        <Text className="my-1">- buffer 5.7.1</Text>
        <Text className="my-1">- ieee754 1.2.1</Text>
        <Text className="my-1">- cli-cursor 3.1.0</Text>
        <Text className="my-1">- restore-cursor 3.1.0</Text>
        <Text className="my-1">- cli-spinners 2.9.2</Text>
        <Text className="my-1">- is-interactive 1.0.0</Text>
        <Text className="my-1">- is-unicode-supported 0.1.0</Text>
        <Text className="my-1">- log-symbols 4.1.0</Text>
        <Text className="my-1">- wcwidth 1.0.1</Text>
        <Text className="my-1">- defaults 1.0.4</Text>
        <Text className="my-1">- clone 1.0.4</Text>
        <Text className="my-1">- sudo-prompt 9.2.1</Text>
        <Text className="my-1">
          - @react-native-community/cli-config 12.3.6
        </Text>
        <Text className="my-1">- cosmiconfig 5.2.1</Text>
        <Text className="my-1">- import-fresh 2.0.0</Text>
        <Text className="my-1">- caller-path 2.0.0</Text>
        <Text className="my-1">- caller-callsite 2.0.0</Text>
        <Text className="my-1">- callsites 2.0.0</Text>
        <Text className="my-1">- resolve-from 3.0.0</Text>
        <Text className="my-1">- is-directory 0.3.1</Text>
        <Text className="my-1">- js-yaml 3.14.1</Text>
        <Text className="my-1">- esprima 4.0.1</Text>
        <Text className="my-1">- parse-json 4.0.0</Text>
        <Text className="my-1">- error-ex 1.3.2</Text>
        <Text className="my-1">- is-arrayish 0.2.1</Text>
        <Text className="my-1">- json-parse-better-errors 1.0.2</Text>
        <Text className="my-1">- joi 17.12.3</Text>
        <Text className="my-1">- @hapi/hoek 9.3.0</Text>
        <Text className="my-1">- @hapi/topo 5.1.0</Text>
        <Text className="my-1">- @sideway/address 4.1.5</Text>
        <Text className="my-1">- @sideway/formula 3.0.1</Text>
        <Text className="my-1">- @sideway/pinpoint 2.0.0</Text>
        <Text className="my-1">
          - @react-native-community/cli-debugger-ui 12.3.6
        </Text>
        <Text className="my-1">
          - @react-native-community/cli-doctor 12.3.6
        </Text>
        <Text className="my-1">
          - @react-native-community/cli-platform-android 12.3.6
        </Text>
        <Text className="my-1">- fast-xml-parser 4.3.6</Text>
        <Text className="my-1">- strnum 1.0.5</Text>
        <Text className="my-1">- logkitty 0.7.1</Text>
        <Text className="my-1">- ansi-fragments 0.2.1</Text>
        <Text className="my-1">- colorette 1.4.0</Text>
        <Text className="my-1">- slice-ansi 2.1.0</Text>
        <Text className="my-1">- astral-regex 1.0.0</Text>
        <Text className="my-1">- is-fullwidth-code-point 2.0.0</Text>
        <Text className="my-1">- strip-ansi 5.2.0</Text>
        <Text className="my-1">- ansi-regex 4.1.1</Text>
        <Text className="my-1">- dayjs 1.11.10</Text>
        <Text className="my-1">- yargs 15.4.1</Text>
        <Text className="my-1">- cliui 6.0.0</Text>
        <Text className="my-1">- string-width 4.2.3</Text>
        <Text className="my-1">- emoji-regex 8.0.0</Text>
        <Text className="my-1">- is-fullwidth-code-point 3.0.0</Text>
        <Text className="my-1">- wrap-ansi 6.2.0</Text>
        <Text className="my-1">- decamelize 1.2.0</Text>
        <Text className="my-1">- get-caller-file 2.0.5</Text>
        <Text className="my-1">- require-directory 2.1.1</Text>
        <Text className="my-1">- require-main-filename 2.0.0</Text>
        <Text className="my-1">- set-blocking 2.0.0</Text>
        <Text className="my-1">- which-module 2.0.1</Text>
        <Text className="my-1">- y18n 4.0.3</Text>
        <Text className="my-1">- yargs-parser 18.1.3</Text>
        <Text className="my-1">- camelcase 5.3.1</Text>
        <Text className="my-1">
          - @react-native-community/cli-platform-ios 12.3.6
        </Text>
        <Text className="my-1">- command-exists 1.2.9</Text>
        <Text className="my-1">- envinfo 7.12.0</Text>
        <Text className="my-1">- hermes-profile-transformer 0.0.6</Text>
        <Text className="my-1">- source-map 0.7.4</Text>
        <Text className="my-1">- node-stream-zip 1.15.0</Text>
        <Text className="my-1">- yaml 2.4.1</Text>
        <Text className="my-1">
          - @react-native-community/cli-hermes 12.3.6
        </Text>
        <Text className="my-1">
          - @react-native-community/cli-plugin-metro 12.3.6
        </Text>
        <Text className="my-1">
          - @react-native-community/cli-server-api 12.3.6
        </Text>
        <Text className="my-1">- connect 3.7.0</Text>
        <Text className="my-1">- finalhandler 1.1.2</Text>
        <Text className="my-1">- on-finished 2.3.0</Text>
        <Text className="my-1">- errorhandler 1.5.1</Text>
        <Text className="my-1">- nocache 3.0.4</Text>
        <Text className="my-1">- pretty-format 26.6.2</Text>
        <Text className="my-1">- @jest/types 26.6.2</Text>
        <Text className="my-1">- @types/yargs 15.0.19</Text>
        <Text className="my-1">- react-is 17.0.2</Text>
        <Text className="my-1">- ws 7.5.9</Text>
        <Text className="my-1">- @react-native-community/cli-types 12.3.6</Text>
        <Text className="my-1">- commander 9.5.0</Text>
        <Text className="my-1">- fs-extra 8.1.0</Text>
        <Text className="my-1">- jsonfile 4.0.0</Text>
        <Text className="my-1">- universalify 0.1.2</Text>
        <Text className="my-1">- prompts 2.4.2</Text>
        <Text className="my-1">- kleur 3.0.3</Text>
        <Text className="my-1">- sisteransi 1.0.5</Text>
        <Text className="my-1">- @react-native/assets-registry 0.73.1</Text>
        <Text className="my-1">
          - @react-native/community-cli-plugin 0.73.17
        </Text>
        <Text className="my-1">- @react-native/dev-middleware 0.73.8</Text>
        <Text className="my-1">- @isaacs/ttlcache 1.4.1</Text>
        <Text className="my-1">- @react-native/debugger-frontend 0.73.3</Text>
        <Text className="my-1">- chrome-launcher 0.15.2</Text>
        <Text className="my-1">- lighthouse-logger 1.4.2</Text>
        <Text className="my-1">- marky 1.2.5</Text>
        <Text className="my-1">- chromium-edge-launcher 1.0.0</Text>
        <Text className="my-1">- mkdirp 1.0.4</Text>
        <Text className="my-1">- open 7.4.2</Text>
        <Text className="my-1">- temp-dir 2.0.0</Text>
        <Text className="my-1">- ws 6.2.2</Text>
        <Text className="my-1">- async-limiter 1.0.1</Text>
        <Text className="my-1">
          - @react-native/metro-babel-transformer 0.73.15
        </Text>
        <Text className="my-1">- @react-native/babel-preset 0.73.21</Text>
        <Text className="my-1">
          - @babel/plugin-proposal-async-generator-functions 7.20.7
        </Text>
        <Text className="my-1">
          - @babel/helper-remap-async-to-generator 7.22.20
        </Text>
        <Text className="my-1">- @babel/helper-annotate-as-pure 7.22.5</Text>
        <Text className="my-1">- @babel/helper-wrap-function 7.22.20</Text>
        <Text className="my-1">
          - @babel/plugin-syntax-async-generators 7.8.4
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-class-properties 7.18.6
        </Text>
        <Text className="my-1">
          - @babel/helper-create-class-features-plugin 7.24.4
        </Text>
        <Text className="my-1">
          - @babel/helper-member-expression-to-functions 7.23.0
        </Text>
        <Text className="my-1">
          - @babel/helper-optimise-call-expression 7.22.5
        </Text>
        <Text className="my-1">- @babel/helper-replace-supers 7.24.1</Text>
        <Text className="my-1">
          - @babel/helper-skip-transparent-expression-wrappers 7.22.5
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-export-default-from 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-export-default-from 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-nullish-coalescing-operator 7.18.6
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-nullish-coalescing-operator 7.8.3
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-numeric-separator 7.18.6
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-numeric-separator 7.10.4
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-object-rest-spread 7.20.7
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-object-rest-spread 7.8.3
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-parameters 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-optional-catch-binding 7.18.6
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-optional-catch-binding 7.8.3
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-optional-chaining 7.21.0
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-optional-chaining 7.8.3
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-dynamic-import 7.8.3
        </Text>
        <Text className="my-1">- @babel/plugin-syntax-flow 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-arrow-functions 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-async-to-generator 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-block-scoping 7.24.4
        </Text>
        <Text className="my-1">- @babel/plugin-transform-classes 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-computed-properties 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-destructuring 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-flow-strip-types 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-function-name 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-transform-literals 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-modules-commonjs 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-named-capturing-groups-regex 7.22.5
        </Text>
        <Text className="my-1">
          - @babel/helper-create-regexp-features-plugin 7.22.15
        </Text>
        <Text className="my-1">- regexpu-core 5.3.2</Text>
        <Text className="my-1">- regenerate 1.4.2</Text>
        <Text className="my-1">- regenerate-unicode-properties 10.1.1</Text>
        <Text className="my-1">- @babel/regjsgen 0.8.0</Text>
        <Text className="my-1">- regjsparser 0.9.1</Text>
        <Text className="my-1">- jsesc 0.5.0</Text>
        <Text className="my-1">- unicode-match-property-ecmascript 2.0.0</Text>
        <Text className="my-1">
          - unicode-canonical-property-names-ecmascript 2.0.0
        </Text>
        <Text className="my-1">
          - unicode-property-aliases-ecmascript 2.1.0
        </Text>
        <Text className="my-1">
          - unicode-match-property-value-ecmascript 2.1.0
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-private-methods 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-private-property-in-object 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-private-property-in-object 7.14.5
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-react-display-name 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-transform-react-jsx 7.23.4</Text>
        <Text className="my-1">- @babel/plugin-syntax-jsx 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-react-jsx-self 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-react-jsx-source 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-transform-runtime 7.24.3</Text>
        <Text className="my-1">- babel-plugin-polyfill-corejs2 0.4.10</Text>
        <Text className="my-1">
          - @babel/helper-define-polyfill-provider 0.6.1
        </Text>
        <Text className="my-1">- lodash.debounce 4.0.8</Text>
        <Text className="my-1">- resolve 1.22.8</Text>
        <Text className="my-1">- is-core-module 2.13.1</Text>
        <Text className="my-1">- path-parse 1.0.7</Text>
        <Text className="my-1">- supports-preserve-symlinks-flag 1.0.0</Text>
        <Text className="my-1">- babel-plugin-polyfill-corejs3 0.10.4</Text>
        <Text className="my-1">- core-js-compat 3.37.0</Text>
        <Text className="my-1">- babel-plugin-polyfill-regenerator 0.6.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-shorthand-properties 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-transform-spread 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-sticky-regex 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-typescript 7.24.4
        </Text>
        <Text className="my-1">- @babel/plugin-syntax-typescript 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-unicode-regex 7.24.1
        </Text>
        <Text className="my-1">
          - @react-native/babel-plugin-codegen 0.73.4
        </Text>
        <Text className="my-1">- @react-native/codegen 0.73.3</Text>
        <Text className="my-1">- flow-parser 0.206.0</Text>
        <Text className="my-1">- invariant 2.2.4</Text>
        <Text className="my-1">- jscodeshift 0.14.0</Text>
        <Text className="my-1">- @babel/preset-flow 7.24.1</Text>
        <Text className="my-1">- @babel/preset-typescript 7.24.1</Text>
        <Text className="my-1">- @babel/register 7.23.7</Text>
        <Text className="my-1">- clone-deep 4.0.1</Text>
        <Text className="my-1">- is-plain-object 2.0.4</Text>
        <Text className="my-1">- isobject 3.0.1</Text>
        <Text className="my-1">- kind-of 6.0.3</Text>
        <Text className="my-1">- shallow-clone 3.0.1</Text>
        <Text className="my-1">- find-cache-dir 2.1.0</Text>
        <Text className="my-1">- make-dir 2.1.0</Text>
        <Text className="my-1">- pkg-dir 3.0.0</Text>
        <Text className="my-1">- find-up 3.0.0</Text>
        <Text className="my-1">- locate-path 3.0.0</Text>
        <Text className="my-1">- p-locate 3.0.0</Text>
        <Text className="my-1">- path-exists 3.0.0</Text>
        <Text className="my-1">- pirates 4.0.6</Text>
        <Text className="my-1">- babel-core 7.0.0</Text>
        <Text className="my-1">- flow-parser 0.233.0</Text>
        <Text className="my-1">- node-dir 0.1.17</Text>
        <Text className="my-1">- recast 0.21.5</Text>
        <Text className="my-1">- ast-types 0.15.2</Text>
        <Text className="my-1">- temp 0.8.4</Text>
        <Text className="my-1">- rimraf 2.6.3</Text>
        <Text className="my-1">- write-file-atomic 2.4.3</Text>
        <Text className="my-1">- imurmurhash 0.1.4</Text>
        <Text className="my-1">- mkdirp 0.5.6</Text>
        <Text className="my-1">- nullthrows 1.1.1</Text>
        <Text className="my-1">- babel-plugin-transform-flow-enums 0.0.2</Text>
        <Text className="my-1">- react-refresh 0.14.0</Text>
        <Text className="my-1">- hermes-parser 0.15.0</Text>
        <Text className="my-1">- hermes-estree 0.15.0</Text>
        <Text className="my-1">- metro 0.80.8</Text>
        <Text className="my-1">- ci-info 2.0.0</Text>
        <Text className="my-1">- denodeify 1.2.1</Text>
        <Text className="my-1">- error-stack-parser 2.1.4</Text>
        <Text className="my-1">- stackframe 1.3.4</Text>
        <Text className="my-1">- hermes-parser 0.20.1</Text>
        <Text className="my-1">- hermes-estree 0.20.1</Text>
        <Text className="my-1">- image-size 1.1.1</Text>
        <Text className="my-1">- queue 6.0.2</Text>
        <Text className="my-1">- jest-worker 29.7.0</Text>
        <Text className="my-1">- jsc-safe-url 0.2.4</Text>
        <Text className="my-1">- lodash.throttle 4.1.1</Text>
        <Text className="my-1">- metro-babel-transformer 0.80.8</Text>
        <Text className="my-1">- metro-cache 0.80.8</Text>
        <Text className="my-1">- metro-core 0.80.8</Text>
        <Text className="my-1">- metro-resolver 0.80.8</Text>
        <Text className="my-1">- metro-cache-key 0.80.8</Text>
        <Text className="my-1">- metro-config 0.80.8</Text>
        <Text className="my-1">- jest-validate 29.7.0</Text>
        <Text className="my-1">- camelcase 6.3.0</Text>
        <Text className="my-1">- leven 3.1.0</Text>
        <Text className="my-1">- metro-runtime 0.80.8</Text>
        <Text className="my-1">- @babel/runtime 7.24.4</Text>
        <Text className="my-1">- regenerator-runtime 0.14.1</Text>
        <Text className="my-1">- metro-file-map 0.80.8</Text>
        <Text className="my-1">- fb-watchman 2.0.2</Text>
        <Text className="my-1">- bser 2.1.1</Text>
        <Text className="my-1">- node-int64 0.4.0</Text>
        <Text className="my-1">- node-abort-controller 3.1.1</Text>
        <Text className="my-1">- walker 1.0.8</Text>
        <Text className="my-1">- makeerror 1.0.12</Text>
        <Text className="my-1">- tmpl 1.0.5</Text>
        <Text className="my-1">- metro-source-map 0.80.8</Text>
        <Text className="my-1">- metro-symbolicate 0.80.8</Text>
        <Text className="my-1">- source-map 0.5.7</Text>
        <Text className="my-1">- through2 2.0.5</Text>
        <Text className="my-1">- xtend 4.0.2</Text>
        <Text className="my-1">- vlq 1.0.1</Text>
        <Text className="my-1">- ob1 0.80.8</Text>
        <Text className="my-1">- metro-transform-plugins 0.80.8</Text>
        <Text className="my-1">- metro-transform-worker 0.80.8</Text>
        <Text className="my-1">- metro-minify-terser 0.80.8</Text>
        <Text className="my-1">- serialize-error 2.1.0</Text>
        <Text className="my-1">- throat 5.0.0</Text>
        <Text className="my-1">- yargs 17.7.2</Text>
        <Text className="my-1">- cliui 8.0.1</Text>
        <Text className="my-1">- wrap-ansi 7.0.0</Text>
        <Text className="my-1">- y18n 5.0.8</Text>
        <Text className="my-1">- yargs-parser 21.1.1</Text>
        <Text className="my-1">- readline 1.3.0</Text>
        <Text className="my-1">- @react-native/gradle-plugin 0.73.4</Text>
        <Text className="my-1">- @react-native/js-polyfills 0.73.1</Text>
        <Text className="my-1">- @react-native/normalize-colors 0.73.2</Text>
        <Text className="my-1">- @react-native/virtualized-lists 0.73.4</Text>
        <Text className="my-1">- abort-controller 3.0.0</Text>
        <Text className="my-1">- event-target-shim 5.0.1</Text>
        <Text className="my-1">- anser 1.4.10</Text>
        <Text className="my-1">- deprecated-react-native-prop-types 5.0.0</Text>
        <Text className="my-1">- flow-enums-runtime 0.0.6</Text>
        <Text className="my-1">- jest-environment-node 29.7.0</Text>
        <Text className="my-1">- @jest/environment 29.7.0</Text>
        <Text className="my-1">- @jest/fake-timers 29.7.0</Text>
        <Text className="my-1">- @sinonjs/fake-timers 10.3.0</Text>
        <Text className="my-1">- @sinonjs/commons 3.0.1</Text>
        <Text className="my-1">- type-detect 4.0.8</Text>
        <Text className="my-1">- jest-mock 29.7.0</Text>
        <Text className="my-1">- jsc-android 250231.0.0</Text>
        <Text className="my-1">- memoize-one 5.2.1</Text>
        <Text className="my-1">- promise 8.3.0</Text>
        <Text className="my-1">- asap 2.0.6</Text>
        <Text className="my-1">- react-devtools-core 4.28.5</Text>
        <Text className="my-1">- react-shallow-renderer 16.15.0</Text>
        <Text className="my-1">- regenerator-runtime 0.13.11</Text>
        <Text className="my-1">- scheduler 0.24.0</Text>
        <Text className="my-1">- stacktrace-parser 0.1.10</Text>
        <Text className="my-1">- type-fest 0.7.1</Text>
        <Text className="my-1">- whatwg-fetch 3.6.20</Text>
        <Text className="my-1">- autoprefixer 10.4.19</Text>
        <Text className="my-1">- fraction.js 4.3.7</Text>
        <Text className="my-1">- normalize-range 0.1.2</Text>
        <Text className="my-1">- base-64 1.0.0</Text>
        <Text className="my-1">- compromise 14.13.0</Text>
        <Text className="my-1">- efrt 2.7.0</Text>
        <Text className="my-1">- grad-school 0.0.5</Text>
        <Text className="my-1">- suffix-thumb 5.0.2</Text>
        <Text className="my-1">- date-fns 3.6.0</Text>
        <Text className="my-1">- expo 50.0.15</Text>
        <Text className="my-1">- @expo/cli 0.17.8</Text>
        <Text className="my-1">- @expo/code-signing-certificates 0.0.5</Text>
        <Text className="my-1">- @expo/config 8.5.4</Text>
        <Text className="my-1">- @babel/code-frame 7.10.4</Text>
        <Text className="my-1">- @expo/config-plugins 7.8.4</Text>
        <Text className="my-1">- @expo/config-types 50.0.0</Text>
        <Text className="my-1">- @expo/fingerprint 0.6.0</Text>
        <Text className="my-1">- @expo/spawn-async 1.7.2</Text>
        <Text className="my-1">- @expo/json-file 8.3.0</Text>
        <Text className="my-1">- @expo/plist 0.1.0</Text>
        <Text className="my-1">- @xmldom/xmldom 0.7.13</Text>
        <Text className="my-1">- xmlbuilder 14.0.0</Text>
        <Text className="my-1">- @expo/sdk-runtime-versions 1.0.0</Text>
        <Text className="my-1">- @react-native/normalize-color 2.1.0</Text>
        <Text className="my-1">- glob 7.1.6</Text>
        <Text className="my-1">- slugify 1.6.6</Text>
        <Text className="my-1">- xcode 3.0.1</Text>
        <Text className="my-1">- simple-plist 1.3.1</Text>
        <Text className="my-1">- bplist-creator 0.1.0</Text>
        <Text className="my-1">- stream-buffers 2.2.0</Text>
        <Text className="my-1">- bplist-parser 0.3.1</Text>
        <Text className="my-1">- big-integer 1.6.52</Text>
        <Text className="my-1">- plist 3.1.0</Text>
        <Text className="my-1">- @xmldom/xmldom 0.8.10</Text>
        <Text className="my-1">- xmlbuilder 15.1.1</Text>
        <Text className="my-1">- uuid 7.0.3</Text>
        <Text className="my-1">- xml2js 0.6.0</Text>
        <Text className="my-1">- sax 1.3.0</Text>
        <Text className="my-1">- xmlbuilder 11.0.1</Text>
        <Text className="my-1">- semver 7.5.3</Text>
        <Text className="my-1">- sucrase 3.34.0</Text>
        <Text className="my-1">- commander 4.1.1</Text>
        <Text className="my-1">- lines-and-columns 1.2.4</Text>
        <Text className="my-1">- mz 2.7.0</Text>
        <Text className="my-1">- any-promise 1.3.0</Text>
        <Text className="my-1">- thenify-all 1.6.0</Text>
        <Text className="my-1">- thenify 3.3.1</Text>
        <Text className="my-1">- ts-interface-checker 0.1.13</Text>
        <Text className="my-1">- @expo/devcert 1.1.0</Text>
        <Text className="my-1">- application-config-path 0.1.1</Text>
        <Text className="my-1">- debug 3.2.7</Text>
        <Text className="my-1">- eol 0.9.1</Text>
        <Text className="my-1">- get-port 3.2.0</Text>
        <Text className="my-1">- password-prompt 1.1.3</Text>
        <Text className="my-1">- ansi-escapes 4.3.2</Text>
        <Text className="my-1">- type-fest 0.21.3</Text>
        <Text className="my-1">- sudo-prompt 8.2.5</Text>
        <Text className="my-1">- tmp 0.0.33</Text>
        <Text className="my-1">- os-tmpdir 1.0.2</Text>
        <Text className="my-1">- @expo/env 0.2.3</Text>
        <Text className="my-1">- dotenv 16.4.5</Text>
        <Text className="my-1">- dotenv-expand 11.0.6</Text>
        <Text className="my-1">- @expo/image-utils 0.4.1</Text>
        <Text className="my-1">- @expo/metro-config 0.17.6</Text>
        <Text className="my-1">- babel-preset-fbjs 3.4.0</Text>
        <Text className="my-1">
          - @babel/plugin-syntax-class-properties 7.12.13
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-block-scoped-functions 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-transform-for-of 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-member-expression-literals 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-object-super 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-property-literals 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-template-literals 7.24.1
        </Text>
        <Text className="my-1">
          - babel-plugin-syntax-trailing-function-commas 7.0.0
        </Text>
        <Text className="my-1">- fs-extra 9.1.0</Text>
        <Text className="my-1">- lightningcss 1.19.0</Text>
        <Text className="my-1">- detect-libc 1.0.3</Text>
        <Text className="my-1">- lightningcss-linux-x64-gnu 1.19.0</Text>
        <Text className="my-1">- lightningcss-linux-x64-musl 1.19.0</Text>
        <Text className="my-1">- @expo/osascript 2.1.0</Text>
        <Text className="my-1">- exec-async 2.2.0</Text>
        <Text className="my-1">- @expo/package-manager 1.4.2</Text>
        <Text className="my-1">- npm-package-arg 7.0.0</Text>
        <Text className="my-1">- hosted-git-info 3.0.8</Text>
        <Text className="my-1">- osenv 0.1.5</Text>
        <Text className="my-1">- os-homedir 1.0.2</Text>
        <Text className="my-1">- validate-npm-package-name 3.0.0</Text>
        <Text className="my-1">- builtins 1.0.3</Text>
        <Text className="my-1">- ora 3.4.0</Text>
        <Text className="my-1">- cli-cursor 2.1.0</Text>
        <Text className="my-1">- restore-cursor 2.0.0</Text>
        <Text className="my-1">- onetime 2.0.1</Text>
        <Text className="my-1">- mimic-fn 1.2.0</Text>
        <Text className="my-1">- log-symbols 2.2.0</Text>
        <Text className="my-1">- split 1.0.1</Text>
        <Text className="my-1">- through 2.3.8</Text>
        <Text className="my-1">- sudo-prompt 9.1.1</Text>
        <Text className="my-1">- @expo/prebuild-config 6.7.4</Text>
        <Text className="my-1">- @expo/rudder-sdk-node 1.1.1</Text>
        <Text className="my-1">- @expo/bunyan 4.0.0</Text>
        <Text className="my-1">- @segment/loosely-validate-event 2.0.0</Text>
        <Text className="my-1">- component-type 1.2.2</Text>
        <Text className="my-1">- join-component 1.1.0</Text>
        <Text className="my-1">- fetch-retry 4.1.1</Text>
        <Text className="my-1">- md5 2.3.0</Text>
        <Text className="my-1">- charenc 0.0.2</Text>
        <Text className="my-1">- crypt 0.0.2</Text>
        <Text className="my-1">- is-buffer 1.1.6</Text>
        <Text className="my-1">- remove-trailing-slash 0.1.1</Text>
        <Text className="my-1">- @expo/xcpretty 4.3.1</Text>
        <Text className="my-1">- js-yaml 4.1.0</Text>
        <Text className="my-1">- argparse 2.0.1</Text>
        <Text className="my-1">- @urql/core 2.3.6</Text>
        <Text className="my-1">- @graphql-typed-document-node/core 3.2.0</Text>
        <Text className="my-1">- wonka 4.0.15</Text>
        <Text className="my-1">- @urql/exchange-retry 0.3.0</Text>
        <Text className="my-1">- @urql/core 5.0.0</Text>
        <Text className="my-1">- @0no-co/graphql.web 1.0.6</Text>
        <Text className="my-1">- wonka 6.3.4</Text>
        <Text className="my-1">- arg 5.0.2</Text>
        <Text className="my-1">- better-opn 3.0.2</Text>
        <Text className="my-1">- bplist-parser 0.3.2</Text>
        <Text className="my-1">- cacache 15.3.0</Text>
        <Text className="my-1">- @npmcli/fs 1.1.1</Text>
        <Text className="my-1">- @gar/promisify 1.1.3</Text>
        <Text className="my-1">- @npmcli/move-file 1.1.2</Text>
        <Text className="my-1">- chownr 2.0.0</Text>
        <Text className="my-1">- fs-minipass 2.1.0</Text>
        <Text className="my-1">- minipass 3.3.6</Text>
        <Text className="my-1">- infer-owner 1.0.4</Text>
        <Text className="my-1">- minipass-collect 1.0.2</Text>
        <Text className="my-1">- minipass-flush 1.0.5</Text>
        <Text className="my-1">- minipass-pipeline 1.2.4</Text>
        <Text className="my-1">- p-map 4.0.0</Text>
        <Text className="my-1">- aggregate-error 3.1.0</Text>
        <Text className="my-1">- clean-stack 2.2.0</Text>
        <Text className="my-1">- indent-string 4.0.0</Text>
        <Text className="my-1">- promise-inflight 1.0.1</Text>
        <Text className="my-1">- ssri 8.0.1</Text>
        <Text className="my-1">- tar 6.2.1</Text>
        <Text className="my-1">- minipass 5.0.0</Text>
        <Text className="my-1">- minizlib 2.1.2</Text>
        <Text className="my-1">- unique-filename 1.1.1</Text>
        <Text className="my-1">- unique-slug 2.0.2</Text>
        <Text className="my-1">- env-editor 0.4.2</Text>
        <Text className="my-1">- form-data 3.0.1</Text>
        <Text className="my-1">- asynckit 0.4.0</Text>
        <Text className="my-1">- combined-stream 1.0.8</Text>
        <Text className="my-1">- delayed-stream 1.0.0</Text>
        <Text className="my-1">- freeport-async 2.0.0</Text>
        <Text className="my-1">- graphql 15.8.0</Text>
        <Text className="my-1">- graphql-tag 2.12.6</Text>
        <Text className="my-1">- https-proxy-agent 5.0.1</Text>
        <Text className="my-1">- agent-base 6.0.2</Text>
        <Text className="my-1">- internal-ip 4.3.0</Text>
        <Text className="my-1">- default-gateway 4.2.0</Text>
        <Text className="my-1">- execa 1.0.0</Text>
        <Text className="my-1">- get-stream 4.1.0</Text>
        <Text className="my-1">- pump 3.0.0</Text>
        <Text className="my-1">- end-of-stream 1.4.4</Text>
        <Text className="my-1">- is-stream 1.1.0</Text>
        <Text className="my-1">- npm-run-path 2.0.2</Text>
        <Text className="my-1">- p-finally 1.0.0</Text>
        <Text className="my-1">- strip-eof 1.0.0</Text>
        <Text className="my-1">- ip-regex 2.1.0</Text>
        <Text className="my-1">- json-schema-deref-sync 0.13.0</Text>
        <Text className="my-1">- clone 2.1.2</Text>
        <Text className="my-1">- dag-map 1.0.2</Text>
        <Text className="my-1">- is-valid-path 0.1.1</Text>
        <Text className="my-1">- is-invalid-path 0.1.0</Text>
        <Text className="my-1">- is-glob 2.0.1</Text>
        <Text className="my-1">- is-extglob 1.0.0</Text>
        <Text className="my-1">- md5 2.2.1</Text>
        <Text className="my-1">- memory-cache 0.2.0</Text>
        <Text className="my-1">- traverse 0.6.9</Text>
        <Text className="my-1">- typedarray.prototype.slice 1.0.3</Text>
        <Text className="my-1">- define-properties 1.2.1</Text>
        <Text className="my-1">- object-keys 1.1.1</Text>
        <Text className="my-1">- es-abstract 1.23.3</Text>
        <Text className="my-1">- array-buffer-byte-length 1.0.1</Text>
        <Text className="my-1">- is-array-buffer 3.0.4</Text>
        <Text className="my-1">- arraybuffer.prototype.slice 1.0.3</Text>
        <Text className="my-1">- is-shared-array-buffer 1.0.3</Text>
        <Text className="my-1">- available-typed-arrays 1.0.7</Text>
        <Text className="my-1">- possible-typed-array-names 1.0.0</Text>
        <Text className="my-1">- data-view-buffer 1.0.1</Text>
        <Text className="my-1">- is-data-view 1.0.1</Text>
        <Text className="my-1">- is-typed-array 1.1.13</Text>
        <Text className="my-1">- which-typed-array 1.1.15</Text>
        <Text className="my-1">- for-each 0.3.3</Text>
        <Text className="my-1">- is-callable 1.2.7</Text>
        <Text className="my-1">- has-tostringtag 1.0.2</Text>
        <Text className="my-1">- data-view-byte-length 1.0.1</Text>
        <Text className="my-1">- data-view-byte-offset 1.0.0</Text>
        <Text className="my-1">- es-object-atoms 1.0.0</Text>
        <Text className="my-1">- es-set-tostringtag 2.0.3</Text>
        <Text className="my-1">- es-to-primitive 1.2.1</Text>
        <Text className="my-1">- is-date-object 1.0.5</Text>
        <Text className="my-1">- is-symbol 1.0.4</Text>
        <Text className="my-1">- function.prototype.name 1.1.6</Text>
        <Text className="my-1">- functions-have-names 1.2.3</Text>
        <Text className="my-1">- get-symbol-description 1.0.2</Text>
        <Text className="my-1">- globalthis 1.0.3</Text>
        <Text className="my-1">- internal-slot 1.0.7</Text>
        <Text className="my-1">- is-negative-zero 2.0.3</Text>
        <Text className="my-1">- is-regex 1.1.4</Text>
        <Text className="my-1">- is-string 1.0.7</Text>
        <Text className="my-1">- is-weakref 1.0.2</Text>
        <Text className="my-1">- object.assign 4.1.5</Text>
        <Text className="my-1">- regexp.prototype.flags 1.5.2</Text>
        <Text className="my-1">- set-function-name 2.0.2</Text>
        <Text className="my-1">- safe-array-concat 1.1.2</Text>
        <Text className="my-1">- isarray 2.0.5</Text>
        <Text className="my-1">- safe-regex-test 1.0.3</Text>
        <Text className="my-1">- string.prototype.trim 1.2.9</Text>
        <Text className="my-1">- string.prototype.trimend 1.0.8</Text>
        <Text className="my-1">- string.prototype.trimstart 1.0.8</Text>
        <Text className="my-1">- typed-array-buffer 1.0.2</Text>
        <Text className="my-1">- typed-array-byte-length 1.0.1</Text>
        <Text className="my-1">- typed-array-byte-offset 1.0.2</Text>
        <Text className="my-1">- typed-array-length 1.0.6</Text>
        <Text className="my-1">- unbox-primitive 1.0.2</Text>
        <Text className="my-1">- has-bigints 1.0.2</Text>
        <Text className="my-1">- which-boxed-primitive 1.0.2</Text>
        <Text className="my-1">- is-bigint 1.0.4</Text>
        <Text className="my-1">- is-boolean-object 1.1.2</Text>
        <Text className="my-1">- is-number-object 1.0.7</Text>
        <Text className="my-1">- valid-url 1.0.9</Text>
        <Text className="my-1">- md5hex 1.0.0</Text>
        <Text className="my-1">- picomatch 3.0.1</Text>
        <Text className="my-1">- pretty-bytes 5.6.0</Text>
        <Text className="my-1">- progress 2.0.3</Text>
        <Text className="my-1">- qrcode-terminal 0.11.0</Text>
        <Text className="my-1">- requireg 0.2.2</Text>
        <Text className="my-1">- nested-error-stacks 2.0.1</Text>
        <Text className="my-1">- resolve 1.7.1</Text>
        <Text className="my-1">- resolve.exports 2.0.2</Text>
        <Text className="my-1">- structured-headers 0.4.1</Text>
        <Text className="my-1">- tempy 0.7.1</Text>
        <Text className="my-1">- del 6.1.1</Text>
        <Text className="my-1">- globby 11.1.0</Text>
        <Text className="my-1">- array-union 2.1.0</Text>
        <Text className="my-1">- is-path-inside 3.0.3</Text>
        <Text className="my-1">- type-fest 0.16.0</Text>
        <Text className="my-1">- unique-string 2.0.0</Text>
        <Text className="my-1">- crypto-random-string 2.0.0</Text>
        <Text className="my-1">- terminal-link 2.1.1</Text>
        <Text className="my-1">- supports-hyperlinks 2.3.0</Text>
        <Text className="my-1">- text-table 0.2.0</Text>
        <Text className="my-1">- url-join 4.0.0</Text>
        <Text className="my-1">- @expo/vector-icons 14.0.0</Text>
        <Text className="my-1">- babel-preset-expo 10.0.1</Text>
        <Text className="my-1">- @babel/plugin-proposal-decorators 7.24.1</Text>
        <Text className="my-1">- @babel/plugin-syntax-decorators 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-object-rest-spread 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-export-namespace-from 7.24.1
        </Text>
        <Text className="my-1">- @babel/preset-env 7.24.4</Text>
        <Text className="my-1">
          - @babel/plugin-bugfix-firefox-class-in-computed-class-key 7.24.4
        </Text>
        <Text className="my-1">
          -
          @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression
          7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining
          7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-optional-chaining 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-bugfix-v8-static-class-fields-redefine-readonly 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-proposal-private-property-in-object 7.21.0
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-class-static-block 7.14.5
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-import-assertions 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-import-attributes 7.24.1
        </Text>
        <Text className="my-1">- @babel/plugin-syntax-import-meta 7.10.4</Text>
        <Text className="my-1">- @babel/plugin-syntax-json-strings 7.8.3</Text>
        <Text className="my-1">
          - @babel/plugin-syntax-logical-assignment-operators 7.10.4
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-top-level-await 7.14.5
        </Text>
        <Text className="my-1">
          - @babel/plugin-syntax-unicode-sets-regex 7.18.6
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-async-generator-functions 7.24.3
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-class-properties 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-class-static-block 7.24.4
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-dotall-regex 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-duplicate-keys 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-dynamic-import 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-exponentiation-operator 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/helper-builder-binary-assignment-operator-visitor 7.22.15
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-json-strings 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-logical-assignment-operators 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-modules-amd 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-modules-systemjs 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-modules-umd 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-new-target 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-nullish-coalescing-operator 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-numeric-separator 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-optional-catch-binding 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-regenerator 7.24.1
        </Text>
        <Text className="my-1">- regenerator-transform 0.15.2</Text>
        <Text className="my-1">
          - @babel/plugin-transform-reserved-words 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-typeof-symbol 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-unicode-escapes 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-unicode-property-regex 7.24.1
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-unicode-sets-regex 7.24.1
        </Text>
        <Text className="my-1">- @babel/preset-modules 0.1.6</Text>
        <Text className="my-1">- esutils 2.0.3</Text>
        <Text className="my-1">- @babel/preset-react 7.24.1</Text>
        <Text className="my-1">
          - @babel/plugin-transform-react-jsx-development 7.22.5
        </Text>
        <Text className="my-1">
          - @babel/plugin-transform-react-pure-annotations 7.24.1
        </Text>
        <Text className="my-1">- babel-plugin-react-native-web 0.18.12</Text>
        <Text className="my-1">- expo-asset 9.0.2</Text>
        <Text className="my-1">- blueimp-md5 2.19.0</Text>
        <Text className="my-1">- md5-file 3.2.3</Text>
        <Text className="my-1">- buffer-alloc 1.2.0</Text>
        <Text className="my-1">- buffer-alloc-unsafe 1.1.0</Text>
        <Text className="my-1">- buffer-fill 1.0.0</Text>
        <Text className="my-1">- expo-constants 15.4.5</Text>
        <Text className="my-1">- expo-file-system 16.0.8</Text>
        <Text className="my-1">- expo-font 11.10.3</Text>
        <Text className="my-1">- fontfaceobserver 2.3.0</Text>
        <Text className="my-1">- expo-keep-awake 12.8.2</Text>
        <Text className="my-1">- expo-modules-autolinking 1.10.3</Text>
        <Text className="my-1">- expo-modules-core 1.11.13</Text>
        <Text className="my-1">- fbemitter 3.0.0</Text>
        <Text className="my-1">- fbjs 3.0.5</Text>
        <Text className="my-1">- cross-fetch 3.1.8</Text>
        <Text className="my-1">- fbjs-css-vars 1.0.2</Text>
        <Text className="my-1">- promise 7.3.1</Text>
        <Text className="my-1">- setimmediate 1.0.5</Text>
        <Text className="my-1">- ua-parser-js 1.0.37</Text>
        <Text className="my-1">- whatwg-url-without-unicode 8.0.0</Text>
        <Text className="my-1">- webidl-conversions 5.0.0</Text>
        <Text className="my-1">- expo-app-loading 2.1.1</Text>
        <Text className="my-1">- expo-splash-screen 0.17.5</Text>
        <Text className="my-1">- @expo/configure-splash-screen 0.6.0</Text>
        <Text className="my-1">- commander 5.1.0</Text>
        <Text className="my-1">- pngjs 5.0.0</Text>
        <Text className="my-1">- xml-js 1.6.11</Text>
        <Text className="my-1">- @expo/prebuild-config 5.0.7</Text>
        <Text className="my-1">- @expo/config 7.0.3</Text>
        <Text className="my-1">- @expo/config-plugins 5.0.4</Text>
        <Text className="my-1">- @expo/config-types 47.0.0</Text>
        <Text className="my-1">- @expo/json-file 8.2.36</Text>
        <Text className="my-1">- json5 1.0.2</Text>
        <Text className="my-1">- @expo/plist 0.0.18</Text>
        <Text className="my-1">- xml2js 0.4.23</Text>
        <Text className="my-1">- sucrase 3.35.0</Text>
        <Text className="my-1">- glob 10.3.12</Text>
        <Text className="my-1">- foreground-child 3.1.1</Text>
        <Text className="my-1">- signal-exit 4.1.0</Text>
        <Text className="my-1">- jackspeak 2.3.6</Text>
        <Text className="my-1">- @isaacs/cliui 8.0.2</Text>
        <Text className="my-1">- string-width 5.1.2</Text>
        <Text className="my-1">- eastasianwidth 0.2.0</Text>
        <Text className="my-1">- emoji-regex 9.2.2</Text>
        <Text className="my-1">- strip-ansi 7.1.0</Text>
        <Text className="my-1">- ansi-regex 6.0.1</Text>
        <Text className="my-1">- wrap-ansi 8.1.0</Text>
        <Text className="my-1">- ansi-styles 6.2.1</Text>
        <Text className="my-1">- minimatch 9.0.4</Text>
        <Text className="my-1">- brace-expansion 2.0.1</Text>
        <Text className="my-1">- minipass 7.0.4</Text>
        <Text className="my-1">- path-scurry 1.10.2</Text>
        <Text className="my-1">- lru-cache 10.2.0</Text>
        <Text className="my-1">- @expo/image-utils 0.3.22</Text>
        <Text className="my-1">- expo-blur 12.9.2</Text>
        <Text className="my-1">- expo-dev-client 3.3.11</Text>
        <Text className="my-1">- expo-dev-launcher 3.6.9</Text>
        <Text className="my-1">- ajv 8.11.0</Text>
        <Text className="my-1">- expo-dev-menu 4.5.8</Text>
        <Text className="my-1">- expo-dev-menu-interface 1.7.2</Text>
        <Text className="my-1">- expo-manifests 0.13.2</Text>
        <Text className="my-1">- expo-json-utils 0.12.3</Text>
        <Text className="my-1">- expo-updates-interface 0.15.3</Text>
        <Text className="my-1">- expo-document-picker 11.10.1</Text>
        <Text className="my-1">- expo-image 1.10.6</Text>
        <Text className="my-1">- expo-image-picker 14.7.1</Text>
        <Text className="my-1">- expo-image-loader 4.6.0</Text>
        <Text className="my-1">- expo-linear-gradient 12.7.2</Text>
        <Text className="my-1">- expo-local-authentication 13.8.0</Text>
        <Text className="my-1">- expo-secure-store 12.8.1</Text>
        <Text className="my-1">- expo-sharing 11.10.0</Text>
        <Text className="my-1">- expo-splash-screen 0.26.4</Text>
        <Text className="my-1">- expo-status-bar 1.11.1</Text>
        <Text className="my-1">- expo-system-ui 2.9.3</Text>
        <Text className="my-1">- jest 29.7.0</Text>
        <Text className="my-1">- @jest/core 29.7.0</Text>
        <Text className="my-1">- @jest/console 29.7.0</Text>
        <Text className="my-1">- @jest/reporters 29.7.0</Text>
        <Text className="my-1">- @bcoe/v8-coverage 0.2.3</Text>
        <Text className="my-1">- @jest/test-result 29.7.0</Text>
        <Text className="my-1">- collect-v8-coverage 1.0.2</Text>
        <Text className="my-1">- @jest/transform 29.7.0</Text>
        <Text className="my-1">- babel-plugin-istanbul 6.1.1</Text>
        <Text className="my-1">- @istanbuljs/load-nyc-config 1.1.0</Text>
        <Text className="my-1">- get-package-type 0.1.0</Text>
        <Text className="my-1">- @istanbuljs/schema 0.1.3</Text>
        <Text className="my-1">- istanbul-lib-instrument 5.2.1</Text>
        <Text className="my-1">- istanbul-lib-coverage 3.2.2</Text>
        <Text className="my-1">- test-exclude 6.0.0</Text>
        <Text className="my-1">- jest-haste-map 29.7.0</Text>
        <Text className="my-1">- @types/graceful-fs 4.1.9</Text>
        <Text className="my-1">- jest-regex-util 29.6.3</Text>
        <Text className="my-1">- write-file-atomic 4.0.2</Text>
        <Text className="my-1">- exit 0.1.2</Text>
        <Text className="my-1">- istanbul-lib-instrument 6.0.2</Text>
        <Text className="my-1">- istanbul-lib-report 3.0.1</Text>
        <Text className="my-1">- make-dir 4.0.0</Text>
        <Text className="my-1">- istanbul-lib-source-maps 4.0.1</Text>
        <Text className="my-1">- istanbul-reports 3.1.7</Text>
        <Text className="my-1">- html-escaper 2.0.2</Text>
        <Text className="my-1">- string-length 4.0.2</Text>
        <Text className="my-1">- char-regex 1.0.2</Text>
        <Text className="my-1">- v8-to-istanbul 9.2.0</Text>
        <Text className="my-1">- jest-changed-files 29.7.0</Text>
        <Text className="my-1">- jest-config 29.7.0</Text>
        <Text className="my-1">- @jest/test-sequencer 29.7.0</Text>
        <Text className="my-1">- babel-jest 29.7.0</Text>
        <Text className="my-1">- babel-preset-jest 29.6.3</Text>
        <Text className="my-1">- babel-plugin-jest-hoist 29.6.3</Text>
        <Text className="my-1">- babel-preset-current-node-syntax 1.0.1</Text>
        <Text className="my-1">- @babel/plugin-syntax-bigint 7.8.3</Text>
        <Text className="my-1">- jest-circus 29.7.0</Text>
        <Text className="my-1">- @jest/expect 29.7.0</Text>
        <Text className="my-1">- jest-snapshot 29.7.0</Text>
        <Text className="my-1">- natural-compare 1.4.0</Text>
        <Text className="my-1">- co 4.6.0</Text>
        <Text className="my-1">- dedent 1.5.3</Text>
        <Text className="my-1">- is-generator-fn 2.1.0</Text>
        <Text className="my-1">- jest-each 29.7.0</Text>
        <Text className="my-1">- jest-runtime 29.7.0</Text>
        <Text className="my-1">- @jest/globals 29.7.0</Text>
        <Text className="my-1">- @jest/source-map 29.6.3</Text>
        <Text className="my-1">- callsites 3.1.0</Text>
        <Text className="my-1">- cjs-module-lexer 1.2.3</Text>
        <Text className="my-1">- jest-resolve 29.7.0</Text>
        <Text className="my-1">- jest-pnp-resolver 1.2.3</Text>
        <Text className="my-1">- strip-bom 4.0.0</Text>
        <Text className="my-1">- pure-rand 6.1.0</Text>
        <Text className="my-1">- jest-runner 29.7.0</Text>
        <Text className="my-1">- emittery 0.13.1</Text>
        <Text className="my-1">- jest-docblock 29.7.0</Text>
        <Text className="my-1">- detect-newline 3.1.0</Text>
        <Text className="my-1">- jest-leak-detector 29.7.0</Text>
        <Text className="my-1">- jest-watcher 29.7.0</Text>
        <Text className="my-1">- source-map-support 0.5.13</Text>
        <Text className="my-1">- parse-json 5.2.0</Text>
        <Text className="my-1">- strip-json-comments 3.1.1</Text>
        <Text className="my-1">- jest-resolve-dependencies 29.7.0</Text>
        <Text className="my-1">- import-local 3.1.0</Text>
        <Text className="my-1">- resolve-cwd 3.0.0</Text>
        <Text className="my-1">- jest-cli 29.7.0</Text>
        <Text className="my-1">- create-jest 29.7.0</Text>
        <Text className="my-1">- jest-expo 50.0.4</Text>
        <Text className="my-1">- jest-environment-jsdom 29.7.0</Text>
        <Text className="my-1">- @types/jsdom 20.0.1</Text>
        <Text className="my-1">- @types/tough-cookie 4.0.5</Text>
        <Text className="my-1">- parse5 7.1.2</Text>
        <Text className="my-1">- entities 4.5.0</Text>
        <Text className="my-1">- jsdom 20.0.3</Text>
        <Text className="my-1">- acorn-globals 7.0.1</Text>
        <Text className="my-1">- acorn-walk 8.3.2</Text>
        <Text className="my-1">- cssom 0.5.0</Text>
        <Text className="my-1">- cssstyle 2.3.0</Text>
        <Text className="my-1">- cssom 0.3.8</Text>
        <Text className="my-1">- data-urls 3.0.2</Text>
        <Text className="my-1">- whatwg-mimetype 3.0.0</Text>
        <Text className="my-1">- whatwg-url 11.0.0</Text>
        <Text className="my-1">- tr46 3.0.0</Text>
        <Text className="my-1">- webidl-conversions 7.0.0</Text>
        <Text className="my-1">- decimal.js 10.4.3</Text>
        <Text className="my-1">- domexception 4.0.0</Text>
        <Text className="my-1">- escodegen 2.1.0</Text>
        <Text className="my-1">- form-data 4.0.0</Text>
        <Text className="my-1">- html-encoding-sniffer 3.0.0</Text>
        <Text className="my-1">- whatwg-encoding 2.0.0</Text>
        <Text className="my-1">- http-proxy-agent 5.0.0</Text>
        <Text className="my-1">- @tootallnate/once 2.0.0</Text>
        <Text className="my-1">- is-potential-custom-element-name 1.0.1</Text>
        <Text className="my-1">- nwsapi 2.2.7</Text>
        <Text className="my-1">- saxes 6.0.0</Text>
        <Text className="my-1">- xmlchars 2.2.0</Text>
        <Text className="my-1">- symbol-tree 3.2.4</Text>
        <Text className="my-1">- tough-cookie 4.1.3</Text>
        <Text className="my-1">- psl 1.9.0</Text>
        <Text className="my-1">- universalify 0.2.0</Text>
        <Text className="my-1">- url-parse 1.5.10</Text>
        <Text className="my-1">- querystringify 2.2.0</Text>
        <Text className="my-1">- w3c-xmlserializer 4.0.0</Text>
        <Text className="my-1">- xml-name-validator 4.0.0</Text>
        <Text className="my-1">- jest-watch-select-projects 2.0.0</Text>
        <Text className="my-1">- chalk 3.0.0</Text>
        <Text className="my-1">- jest-watch-typeahead 2.2.1</Text>
        <Text className="my-1">- ansi-escapes 6.2.1</Text>
        <Text className="my-1">- slash 5.1.0</Text>
        <Text className="my-1">- string-length 5.0.1</Text>
        <Text className="my-1">- char-regex 2.0.1</Text>
        <Text className="my-1">- react-test-renderer 18.2.0</Text>
        <Text className="my-1">- scheduler 0.23.0</Text>
        <Text className="my-1">- stacktrace-js 2.0.2</Text>
        <Text className="my-1">- stack-generator 2.0.10</Text>
        <Text className="my-1">- stacktrace-gps 3.1.2</Text>
        <Text className="my-1">- source-map 0.5.6</Text>
        <Text className="my-1">- moment 2.30.1</Text>
        <Text className="my-1">- nativewind 4.0.36</Text>
        <Text className="my-1">- react-native-css-interop 0.0.36</Text>
        <Text className="my-1">- babel-plugin-tester 11.0.4</Text>
        <Text className="my-1">- core-js 3.37.0</Text>
        <Text className="my-1">- lodash.mergewith 4.6.2</Text>
        <Text className="my-1">- prettier 2.8.8</Text>
        <Text className="my-1">- strip-indent 3.0.0</Text>
        <Text className="my-1">- min-indent 1.0.1</Text>
        <Text className="my-1">- lightningcss 1.22.0</Text>
        <Text className="my-1">- postcss 8.4.23</Text>
        <Text className="my-1">- postcss-loader 8.1.1</Text>
        <Text className="my-1">- cosmiconfig 9.0.0</Text>
        <Text className="my-1">- env-paths 2.2.1</Text>
        <Text className="my-1">- import-fresh 3.3.0</Text>
        <Text className="my-1">- parent-module 1.0.1</Text>
        <Text className="my-1">- resolve-from 4.0.0</Text>
        <Text className="my-1">- jiti 1.21.0</Text>
        <Text className="my-1">- react 18.2.0</Text>
        <Text className="my-1">- react-dom 18.2.0</Text>
        <Text className="my-1">- react-native-css-interop 0.0.34</Text>
        <Text className="my-1">- react-native-csv 0.2.0</Text>
        <Text className="my-1">- @types/papaparse 5.3.14</Text>
        <Text className="my-1">- papaparse 5.4.1</Text>
        <Text className="my-1">- react-native-curved-bottom-bar 3.2.7</Text>
        <Text className="my-1">- d3-shape 3.2.0</Text>
        <Text className="my-1">- d3-path 3.1.0</Text>
        <Text className="my-1">- react-native-size-scaling 0.5.1</Text>
        <Text className="my-1">- react-native-format-currency 0.0.5</Text>
        <Text className="my-1">- react-native-gesture-handler 2.14.1</Text>
        <Text className="my-1">- @egjs/hammerjs 2.0.17</Text>
        <Text className="my-1">- @types/hammerjs 2.0.45</Text>
        <Text className="my-1">- react-native-get-random-values 1.11.0</Text>
        <Text className="my-1">- fast-base64-decode 1.0.0</Text>
        <Text className="my-1">- react-native-gifted-charts 1.4.10</Text>
        <Text className="my-1">- gifted-charts-core 0.1.4</Text>
        <Text className="my-1">- react-native-linear-gradient 2.8.3</Text>
        <Text className="my-1">
          - react-native-modal-datetime-picker 17.1.0
        </Text>
        <Text className="my-1">- react-native-reanimated 3.6.3</Text>
        <Text className="my-1">
          - @babel/plugin-transform-object-assign 7.24.1
        </Text>
        <Text className="my-1">- react-native-safe-area-context 4.8.2</Text>
        <Text className="my-1">- react-native-screens 3.29.0</Text>
        <Text className="my-1">- react-freeze 1.0.4</Text>
        <Text className="my-1">- react-native-svg 14.1.0</Text>
        <Text className="my-1">- css-select 5.1.0</Text>
        <Text className="my-1">- domhandler 5.0.3</Text>
        <Text className="my-1">- domutils 3.1.0</Text>
        <Text className="my-1">- dom-serializer 2.0.0</Text>
        <Text className="my-1">- react-native-web 0.19.10</Text>
        <Text className="my-1">- inline-style-prefixer 6.0.4</Text>
        <Text className="my-1">- css-in-js-utils 3.1.0</Text>
        <Text className="my-1">- hyphenate-style-name 1.0.4</Text>
        <Text className="my-1">- fast-loops 1.1.3</Text>
        <Text className="my-1">- memoize-one 6.0.0</Text>
        <Text className="my-1">- styleq 0.1.3</Text>
        <Text className="my-1">- react-navigation 5.0.0</Text>
        <Text className="my-1">- realm 12.6.2</Text>
        <Text className="my-1">- @realm/fetch 0.1.1</Text>
        <Text className="my-1">- bson 4.7.2</Text>
        <Text className="my-1">- node-machine-id 1.1.12</Text>
        <Text className="my-1">- path-browserify 1.0.1</Text>
        <Text className="my-1">- prebuild-install 7.1.2</Text>
        <Text className="my-1">- detect-libc 2.0.3</Text>
        <Text className="my-1">- expand-template 2.0.3</Text>
        <Text className="my-1">- github-from-package 0.0.0</Text>
        <Text className="my-1">- mkdirp-classic 0.5.3</Text>
        <Text className="my-1">- napi-build-utils 1.0.2</Text>
        <Text className="my-1">- node-abi 3.58.0</Text>
        <Text className="my-1">- simple-get 4.0.1</Text>
        <Text className="my-1">- decompress-response 6.0.0</Text>
        <Text className="my-1">- mimic-response 3.1.0</Text>
        <Text className="my-1">- simple-concat 1.0.1</Text>
        <Text className="my-1">- tar-fs 2.1.1</Text>
        <Text className="my-1">- chownr 1.1.4</Text>
        <Text className="my-1">- tar-stream 2.2.0</Text>
        <Text className="my-1">- fs-constants 1.0.0</Text>
        <Text className="my-1">- tunnel-agent 0.6.0</Text>
        <Text className="my-1">- ts-jest 29.1.2</Text>
        <Text className="my-1">- bs-logger 0.2.6</Text>
        <Text className="my-1">- make-error 1.3.6</Text>
        <Text className="my-1">- typescript 5.3.3</Text>
        <Text className="my-1">- @pkgr/core 0.1.1</Text>
        <Text className="my-1">- @aashutoshrathi/word-wrap 1.2.6</Text>
        <Text className="my-1">- @alloc/quick-lru 5.2.0</Text>
        <Text className="my-1">- @esbuild/linux-x64 0.18.20</Text>
        <Text className="my-1">- @eslint-community/regexpp 4.10.0</Text>
        <Text className="my-1">- @eslint/js 8.57.0</Text>
        <Text className="my-1">- @eslint-community/eslint-utils 4.4.0</Text>
        <Text className="my-1">- eslint-visitor-keys 3.4.3</Text>
        <Text className="my-1">- @base2/pretty-print-object 1.0.1</Text>
        <Text className="my-1">- @floating-ui/core 1.6.0</Text>
        <Text className="my-1">- @floating-ui/utils 0.2.1</Text>
        <Text className="my-1">- @floating-ui/react-dom 2.0.8</Text>
        <Text className="my-1">- @floating-ui/dom 1.6.3</Text>
        <Text className="my-1">- @humanwhocodes/module-importer 1.0.1</Text>
        <Text className="my-1">- @humanwhocodes/config-array 0.11.14</Text>
        <Text className="my-1">- @humanwhocodes/object-schema 2.0.3</Text>
        <Text className="my-1">- @juggle/resize-observer 3.4.0</Text>
        <Text className="my-1">- @radix-ui/primitive 1.0.1</Text>
        <Text className="my-1">- @radix-ui/number 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-arrow 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-primitive 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-slot 1.0.2</Text>
        <Text className="my-1">- @radix-ui/react-compose-refs 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-context 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-collection 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-dismissable-layer 1.0.4</Text>
        <Text className="my-1">- @radix-ui/react-use-callback-ref 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-use-escape-keydown 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-focus-scope 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-direction 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-focus-guards 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-popper 1.1.2</Text>
        <Text className="my-1">- @radix-ui/react-use-layout-effect 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-use-rect 1.0.1</Text>
        <Text className="my-1">- @radix-ui/rect 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-use-size 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-id 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-portal 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-roving-focus 1.0.4</Text>
        <Text className="my-1">
          - @radix-ui/react-use-controllable-state 1.0.1
        </Text>
        <Text className="my-1">- @radix-ui/react-select 1.2.2</Text>
        <Text className="my-1">- @radix-ui/react-use-previous 1.0.1</Text>
        <Text className="my-1">- @radix-ui/react-visually-hidden 1.0.3</Text>
        <Text className="my-1">- aria-hidden 1.2.4</Text>
        <Text className="my-1">- react-remove-scroll 2.5.5</Text>
        <Text className="my-1">- react-remove-scroll-bar 2.3.6</Text>
        <Text className="my-1">- react-style-singleton 2.2.1</Text>
        <Text className="my-1">- get-nonce 1.0.1</Text>
        <Text className="my-1">- use-callback-ref 1.3.2</Text>
        <Text className="my-1">- use-sidecar 1.1.2</Text>
        <Text className="my-1">- detect-node-es 1.1.0</Text>
        <Text className="my-1">- @radix-ui/react-separator 1.0.3</Text>
        <Text className="my-1">- @pkgjs/parseargs 0.11.0</Text>
        <Text className="my-1">- @radix-ui/react-toggle 1.0.3</Text>
        <Text className="my-1">- @radix-ui/react-toolbar 1.0.4</Text>
        <Text className="my-1">- @radix-ui/react-toggle-group 1.0.4</Text>
        <Text className="my-1">
          - @react-native-async-storage/async-storage 1.21.0
        </Text>
        <Text className="my-1">- merge-options 3.0.4</Text>
        <Text className="my-1">- is-plain-obj 2.1.0</Text>
        <Text className="my-1">
          - @react-native-community/datetimepicker 7.6.3
        </Text>
        <Text className="my-1">- @storybook/addon-controls 7.6.17</Text>
        <Text className="my-1">- @storybook/blocks 7.6.17</Text>
        <Text className="my-1">- @storybook/components 7.6.17</Text>
        <Text className="my-1">- use-resize-observer 9.1.0</Text>
        <Text className="my-1">- @storybook/docs-tools 7.6.17</Text>
        <Text className="my-1">- @storybook/core-common 7.6.17</Text>
        <Text className="my-1">- @storybook/node-logger 7.6.17</Text>
        <Text className="my-1">- @types/find-cache-dir 3.2.1</Text>
        <Text className="my-1">- @types/node 18.19.31</Text>
        <Text className="my-1">- @types/node-fetch 2.6.11</Text>
        <Text className="my-1">- @types/pretty-hrtime 1.0.3</Text>
        <Text className="my-1">- esbuild 0.18.20</Text>
        <Text className="my-1">- esbuild-register 3.5.0</Text>
        <Text className="my-1">- handlebars 4.7.8</Text>
        <Text className="my-1">- wordwrap 1.0.0</Text>
        <Text className="my-1">- lazy-universal-dotenv 4.0.0</Text>
        <Text className="my-1">- app-root-dir 1.0.2</Text>
        <Text className="my-1">- dotenv-expand 10.0.0</Text>
        <Text className="my-1">- pkg-dir 5.0.0</Text>
        <Text className="my-1">- pretty-hrtime 1.0.3</Text>
        <Text className="my-1">- @types/doctrine 0.0.3</Text>
        <Text className="my-1">- assert 2.1.0</Text>
        <Text className="my-1">- is-nan 1.3.2</Text>
        <Text className="my-1">- object-is 1.1.6</Text>
        <Text className="my-1">- util 0.12.5</Text>
        <Text className="my-1">- is-arguments 1.1.1</Text>
        <Text className="my-1">- is-generator-function 1.0.10</Text>
        <Text className="my-1">- doctrine 3.0.0</Text>
        <Text className="my-1">- @types/lodash 4.17.0</Text>
        <Text className="my-1">- markdown-to-jsx 7.4.7</Text>
        <Text className="my-1">- polished 4.3.1</Text>
        <Text className="my-1">- react-colorful 5.6.1</Text>
        <Text className="my-1">- tocbot 4.25.0</Text>
        <Text className="my-1">- @storybook/core-client 7.6.17</Text>
        <Text className="my-1">- @storybook/react-dom-shim 7.6.17</Text>
        <Text className="my-1">
          - @svgr/babel-plugin-add-jsx-attribute 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-remove-jsx-empty-expression 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-remove-jsx-attribute 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-transform-react-native-svg 8.1.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-replace-jsx-attribute-value 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-svg-dynamic-title 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-svg-em-dimensions 8.0.0
        </Text>
        <Text className="my-1">
          - @svgr/babel-plugin-transform-svg-component 8.0.0
        </Text>
        <Text className="my-1">- @svgr/babel-preset 8.1.0</Text>
        <Text className="my-1">- @svgr/hast-util-to-babel-ast 8.0.0</Text>
        <Text className="my-1">- @testing-library/react-native 12.4.5</Text>
        <Text className="my-1">- redent 3.0.0</Text>
        <Text className="my-1">- @svgr/plugin-jsx 8.1.0</Text>
        <Text className="my-1">- svg-parser 2.0.4</Text>
        <Text className="my-1">- @types/escodegen 0.0.6</Text>
        <Text className="my-1">- @types/json5 0.0.29</Text>
        <Text className="my-1">- @types/moment 2.13.0</Text>
        <Text className="my-1">
          - @types/react-native-get-random-values 1.8.2
        </Text>
        <Text className="my-1">- @types/semver 7.5.8</Text>
        <Text className="my-1">- @types/uuid 9.0.8</Text>
        <Text className="my-1">- @storybook/preview-web 7.6.17</Text>
        <Text className="my-1">- @typescript-eslint/parser 6.21.0</Text>
        <Text className="my-1">- @typescript-eslint/scope-manager 6.21.0</Text>
        <Text className="my-1">- @typescript-eslint/types 6.21.0</Text>
        <Text className="my-1">- @typescript-eslint/visitor-keys 6.21.0</Text>
        <Text className="my-1">
          - @typescript-eslint/typescript-estree 6.21.0
        </Text>
        <Text className="my-1">- minimatch 9.0.3</Text>
        <Text className="my-1">- ts-api-utils 1.3.0</Text>
        <Text className="my-1">- @typescript-eslint/eslint-plugin 6.21.0</Text>
        <Text className="my-1">- @typescript-eslint/type-utils 6.21.0</Text>
        <Text className="my-1">- @typescript-eslint/utils 6.21.0</Text>
        <Text className="my-1">- graphemer 1.4.0</Text>
        <Text className="my-1">- @ungap/structured-clone 1.2.0</Text>
        <Text className="my-1">- acorn-walk 7.2.0</Text>
        <Text className="my-1">- array-includes 3.1.8</Text>
        <Text className="my-1">- array.prototype.findlast 1.2.5</Text>
        <Text className="my-1">- es-shim-unscopables 1.0.2</Text>
        <Text className="my-1">- array.prototype.findlastindex 1.2.5</Text>
        <Text className="my-1">- array.prototype.flat 1.3.2</Text>
        <Text className="my-1">- array.prototype.tosorted 1.1.3</Text>
        <Text className="my-1">- array.prototype.flatmap 1.3.2</Text>
        <Text className="my-1">- array.prototype.toreversed 1.1.2</Text>
        <Text className="my-1">- ast-types 0.14.2</Text>
        <Text className="my-1">- babel-plugin-react-docgen 4.2.1</Text>
        <Text className="my-1">- react-docgen 5.4.3</Text>
        <Text className="my-1">- estree-to-babel 3.2.1</Text>
        <Text className="my-1">- c8 7.14.0</Text>
        <Text className="my-1">- foreground-child 2.0.0</Text>
        <Text className="my-1">- yargs 16.2.0</Text>
        <Text className="my-1">- cliui 7.0.4</Text>
        <Text className="my-1">- yargs-parser 20.2.9</Text>
        <Text className="my-1">
          - babel-plugin-react-docgen-typescript 1.5.1
        </Text>
        <Text className="my-1">- react-docgen-typescript 1.22.0</Text>
        <Text className="my-1">- camelcase-css 2.0.1</Text>
        <Text className="my-1">- deep-equal 1.1.2</Text>
        <Text className="my-1">- deep-is 0.1.4</Text>
        <Text className="my-1">- didyoumean 1.2.2</Text>
        <Text className="my-1">- dlv 1.1.3</Text>
        <Text className="my-1">- es-iterator-helpers 1.0.18</Text>
        <Text className="my-1">- iterator.prototype 1.1.2</Text>
        <Text className="my-1">- reflect.getprototypeof 1.0.6</Text>
        <Text className="my-1">- which-builtin-type 1.1.3</Text>
        <Text className="my-1">- is-async-function 2.0.0</Text>
        <Text className="my-1">- is-finalizationregistry 1.0.2</Text>
        <Text className="my-1">- which-collection 1.0.2</Text>
        <Text className="my-1">- is-map 2.0.3</Text>
        <Text className="my-1">- is-set 2.0.3</Text>
        <Text className="my-1">- is-weakmap 2.0.2</Text>
        <Text className="my-1">- is-weakset 2.0.3</Text>
        <Text className="my-1">- eslint-config-universe 12.0.0</Text>
        <Text className="my-1">- eslint-config-prettier 8.10.0</Text>
        <Text className="my-1">- eslint-plugin-import 2.29.1</Text>
        <Text className="my-1">- doctrine 2.1.0</Text>
        <Text className="my-1">- eslint-import-resolver-node 0.3.9</Text>
        <Text className="my-1">- eslint-module-utils 2.8.1</Text>
        <Text className="my-1">- object.fromentries 2.0.8</Text>
        <Text className="my-1">- object.groupby 1.0.3</Text>
        <Text className="my-1">- object.values 1.2.0</Text>
        <Text className="my-1">- tsconfig-paths 3.15.0</Text>
        <Text className="my-1">- strip-bom 3.0.0</Text>
        <Text className="my-1">- eslint-plugin-node 11.1.0</Text>
        <Text className="my-1">- eslint-plugin-es 3.0.1</Text>
        <Text className="my-1">- eslint-utils 2.1.0</Text>
        <Text className="my-1">- eslint-visitor-keys 1.3.0</Text>
        <Text className="my-1">- regexpp 3.2.0</Text>
        <Text className="my-1">- eslint-plugin-prettier 5.1.3</Text>
        <Text className="my-1">- prettier-linter-helpers 1.0.0</Text>
        <Text className="my-1">- fast-diff 1.3.0</Text>
        <Text className="my-1">- synckit 0.8.8</Text>
        <Text className="my-1">- eslint-plugin-react 7.34.1</Text>
        <Text className="my-1">- jsx-ast-utils 3.3.5</Text>
        <Text className="my-1">- object.entries 1.1.8</Text>
        <Text className="my-1">- object.hasown 1.1.4</Text>
        <Text className="my-1">- resolve 2.0.0</Text>
        <Text className="my-1">- string.prototype.matchall 4.0.11</Text>
        <Text className="my-1">- eslint-plugin-react-hooks 4.6.0</Text>
        <Text className="my-1">- eslint-scope 7.2.2</Text>
        <Text className="my-1">- espree 9.6.1</Text>
        <Text className="my-1">- acorn-jsx 5.3.2</Text>
        <Text className="my-1">- acorn 7.4.1</Text>
        <Text className="my-1">- esquery 1.5.0</Text>
        <Text className="my-1">- fast-levenshtein 2.0.6</Text>
        <Text className="my-1">- file-entry-cache 6.0.1</Text>
        <Text className="my-1">- flat-cache 3.2.0</Text>
        <Text className="my-1">- flatted 3.3.1</Text>
        <Text className="my-1">- keyv 4.5.4</Text>
        <Text className="my-1">- json-buffer 3.0.1</Text>
        <Text className="my-1">- html-tags 3.3.1</Text>
        <Text className="my-1">- is-plain-object 5.0.0</Text>
        <Text className="my-1">
          - json-stable-stringify-without-jsonify 1.0.1
        </Text>
        <Text className="my-1">- levn 0.4.1</Text>
        <Text className="my-1">- prelude-ls 1.2.1</Text>
        <Text className="my-1">- type-check 0.4.0</Text>
        <Text className="my-1">- lightningcss-linux-x64-gnu 1.22.0</Text>
        <Text className="my-1">- lightningcss-linux-x64-musl 1.22.0</Text>
        <Text className="my-1">- lodash.merge 4.6.2</Text>
        <Text className="my-1">- object-hash 3.0.0</Text>
        <Text className="my-1">- optionator 0.9.3</Text>
        <Text className="my-1">- path-dirname 1.0.2</Text>
        <Text className="my-1">- react-native-modal-selector 2.1.2</Text>
        <Text className="my-1">- react-native-swipe-gestures 1.0.5</Text>
        <Text className="my-1">- react-native-svg-transformer 1.3.0</Text>
        <Text className="my-1">- @svgr/core 8.1.0</Text>
        <Text className="my-1">- cosmiconfig 8.3.6</Text>
        <Text className="my-1">- snake-case 3.0.4</Text>
        <Text className="my-1">- @svgr/plugin-svgo 8.1.0</Text>
        <Text className="my-1">- svgo 3.2.0</Text>
        <Text className="my-1">- css-tree 2.3.1</Text>
        <Text className="my-1">- mdn-data 2.0.30</Text>
        <Text className="my-1">- csso 5.0.5</Text>
        <Text className="my-1">- css-tree 2.2.1</Text>
        <Text className="my-1">- mdn-data 2.0.28</Text>
        <Text className="my-1">- read-cache 1.0.0</Text>
        <Text className="my-1">- safe-json-stringify 1.2.0</Text>
        <Text className="my-1">- tinycolor2 1.6.0</Text>
        <Text className="my-1">- ncp 2.0.0</Text>
        <Text className="my-1">- prettier 3.2.5</Text>
        <Text className="my-1">- uglify-js 3.17.4</Text>
        <Text className="my-1">- @eslint/eslintrc 2.1.4</Text>
        <Text className="my-1">- globals 13.24.0</Text>
        <Text className="my-1">- type-fest 0.20.2</Text>
        <Text className="my-1">- @storybook/addon-ondevice-actions 7.6.17</Text>
        <Text className="my-1">- @storybook/addon-actions 7.6.17</Text>
        <Text className="my-1">- uuid 9.0.1</Text>
        <Text className="my-1">- fast-deep-equal 2.0.1</Text>
        <Text className="my-1">
          - @storybook/addon-ondevice-controls 7.6.17
        </Text>
        <Text className="my-1">
          - react-native-modal-datetime-picker 14.0.1
        </Text>
        <Text className="my-1">- react-element-to-jsx-string 15.0.0</Text>
        <Text className="my-1">- react-is 18.1.0</Text>
        <Text className="my-1">- @storybook/react 7.6.17</Text>
        <Text className="my-1">- @types/estree 0.0.51</Text>
        <Text className="my-1">- eslint 8.57.0</Text>
        <Text className="my-1">- mv 2.1.1</Text>
        <Text className="my-1">- rimraf 2.4.5</Text>
        <Text className="my-1">- glob 6.0.4</Text>
        <Text className="my-1">- @storybook/react-native 7.6.17</Text>
        <Text className="my-1">- tailwindcss 3.4.3</Text>
        <Text className="my-1">- postcss-import 15.1.0</Text>
        <Text className="my-1">- postcss-js 4.0.1</Text>
        <Text className="my-1">- postcss-load-config 4.0.2</Text>
        <Text className="my-1">- lilconfig 3.1.1</Text>
        <Text className="my-1">- postcss-nested 6.0.1</Text>
        <Text className="my-4 text-xl font-semibold">Figma Designs</Text>
        <Text className="mb-8">
          Some pages adapted from
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() =>
              Linking.openURL(
                "https://www.figma.com/community/file/998557875473123405/montra-expense-tracker-ui-kit",
              )
            }
          >
            {" Montra "}
          </Text>
          by Braja Omar Justico, used under{" "}
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() =>
              Linking.openURL("http://creativecommons.org/licenses/by/4.0/")
            }
          >
            CC BY 4.0
          </Text>
          .
        </Text>
      </ScrollView>
    </SafeAreaInsetsView>
  );
};
