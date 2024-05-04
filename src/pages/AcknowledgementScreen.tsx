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
        <Text className="text-xl font-semibold mb-4 dark:text-s_light-100">
          Libraries and Dependencies
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- salumapp 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-export-namespace-from 7.18.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-plugin-utils 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-export-namespace-from 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/webpack-config 19.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @babel/core 7.24.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @ampproject/remapping 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/gen-mapping 0.3.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/set-array 1.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/sourcemap-codec 1.4.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/trace-mapping 0.3.25
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/resolve-uri 3.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/code-frame 7.24.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/highlight 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-validator-identifier 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- chalk 2.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-styles 3.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - color-convert 1.9.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- color-name 1.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - escape-string-regexp 1.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - supports-color 5.5.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- has-flag 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- js-tokens 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- picocolors 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/generator 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/types 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-string-parser 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - to-fast-properties 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jsesc 2.5.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-compilation-targets 7.23.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/compat-data 7.24.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-validator-option 7.23.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - browserslist 4.23.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - caniuse-lite 1.0.30001615
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - electron-to-chromium 1.4.756
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - node-releases 2.0.14
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - update-browserslist-db 1.0.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- escalade 3.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- lru-cache 5.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- yallist 3.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 6.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-module-transforms 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-environment-visitor 7.22.20
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-module-imports 7.24.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-simple-access 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-split-export-declaration 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helpers 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/template 7.24.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/parser 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/traverse 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-function-name 7.23.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-hoist-variables 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- debug 4.3.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- ms 2.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- globals 11.12.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - convert-source-map 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- gensync 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- json5 2.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- babel-loader 8.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - find-cache-dir 3.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- commondir 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- make-dir 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pkg-dir 4.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- find-up 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- locate-path 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-locate 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-limit 2.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-try 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-exists 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- loader-utils 2.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- big.js 5.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- emojis-list 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- schema-utils 2.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv 6.12.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-deep-equal 3.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-json-stable-stringify 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-schema-traverse 0.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- uri-js 4.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- punycode 2.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv-keywords 3.5.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/json-schema 7.0.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- chalk 4.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-styles 4.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - color-convert 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- color-name 1.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - supports-color 7.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- has-flag 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - clean-webpack-plugin 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- del 4.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/glob 7.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/minimatch 5.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/node 20.12.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - undici-types 5.26.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- globby 6.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- array-union 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- array-uniq 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- glob 7.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs.realpath 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- inflight 1.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- once 1.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- wrappy 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- inherits 2.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- minimatch 3.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - brace-expansion 1.1.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - balanced-match 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- concat-map 0.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - path-is-absolute 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object-assign 4.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- pify 2.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - pinkie-promise 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- pinkie 2.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-path-cwd 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-path-in-cwd 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-path-inside 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - path-is-inside 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- p-map 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pify 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- rimraf 2.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - copy-webpack-plugin 10.2.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fast-glob 3.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @nodelib/fs.stat 2.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @nodelib/fs.walk 1.2.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @nodelib/fs.scandir 2.1.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- run-parallel 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - queue-microtask 1.2.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fastq 1.17.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- reusify 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- glob-parent 5.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-glob 4.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-extglob 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- merge2 1.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- micromatch 4.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- braces 3.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- fill-range 7.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - to-regex-range 5.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-number 7.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- picomatch 2.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- glob-parent 6.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- globby 12.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- array-union 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- dir-glob 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-type 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ignore 5.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- slash 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - normalize-path 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- schema-utils 4.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv 8.13.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-schema-traverse 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - require-from-string 2.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv-formats 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv-keywords 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - serialize-javascript 6.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- randombytes 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- safe-buffer 5.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-loader 6.11.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- icss-utils 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- postcss 8.4.38</Text>
        <Text className="mb-2 dark:text-s_light-100">- nanoid 3.3.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - source-map-js 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-modules-extract-imports 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-modules-local-by-default 4.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-selector-parser 6.0.16
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cssesc 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - util-deprecate 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-value-parser 4.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-modules-scope 3.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-modules-values 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 7.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- lru-cache 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- yallist 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - css-minimizer-webpack-plugin 3.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cssnano 5.1.15</Text>
        <Text className="mb-2 dark:text-s_light-100">- lilconfig 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- yaml 1.10.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - cssnano-preset-default 5.2.14
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - css-declaration-sorter 6.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- postcss-calc 8.2.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - cssnano-utils 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-discard-comments 5.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-convert-values 5.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-discard-duplicates 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-colormin 5.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- caniuse-api 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lodash.memoize 4.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- lodash.uniq 4.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- colord 2.9.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-discard-empty 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-discard-overridden 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-merge-longhand 5.1.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- stylehacks 5.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-merge-rules 5.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-minify-gradients 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-minify-font-values 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-minify-params 5.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-charset 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-minify-selectors 5.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-display-values 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-positions 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-repeat-style 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-string 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-timing-functions 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-unicode 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-whitespace 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-normalize-url 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - normalize-url 6.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-ordered-values 5.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-reduce-initial 5.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-reduce-transforms 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- postcss-svgo 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- svgo 2.8.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @trysound/sax 0.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 7.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-select 4.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- boolbase 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-what 6.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- domhandler 4.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - domelementtype 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- domutils 2.8.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - dom-serializer 1.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- entities 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- nth-check 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-tree 1.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- mdn-data 2.0.14</Text>
        <Text className="mb-2 dark:text-s_light-100">- source-map 0.6.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- csso 4.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- stable 0.1.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-unique-selectors 5.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-worker 27.5.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- merge-stream 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - supports-color 8.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-pwa 0.0.127</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/image-utils 0.3.23
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/spawn-async 1.5.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cross-spawn 6.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- nice-try 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-key 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 5.7.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - shebang-command 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - shebang-regex 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- which 1.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- isexe 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-extra 9.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - at-least-node 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- graceful-fs 4.2.11</Text>
        <Text className="mb-2 dark:text-s_light-100">- jsonfile 6.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- universalify 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- universalify 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- getenv 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jimp-compact 0.16.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- mime 2.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- node-fetch 2.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- whatwg-url 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- tr46 0.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webidl-conversions 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- parse-png 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pngjs 3.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve-from 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 7.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- tempy 0.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- temp-dir 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 0.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unique-string 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - crypto-random-string 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 2.20.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- update-check 1.5.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - registry-auth-token 3.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- rc 1.2.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- deep-extend 0.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ini 1.3.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- minimist 1.2.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - strip-json-comments 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- registry-url 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- find-up 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- locate-path 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-locate 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-limit 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- yocto-queue 0.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - find-yarn-workspace-root 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-extra 11.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - html-webpack-plugin 5.6.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/html-minifier-terser 6.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - html-minifier-terser 6.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- camel-case 4.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- pascal-case 3.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- no-case 3.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- lower-case 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- tslib 2.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- clean-css 5.3.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 8.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- he 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- param-case 3.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- dot-case 3.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- relateurl 0.2.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- terser 5.31.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jridgewell/source-map 0.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- acorn 8.11.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 2.20.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - source-map-support 0.5.21
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- buffer-from 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- lodash 4.17.21</Text>
        <Text className="mb-2 dark:text-s_light-100">- pretty-error 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- renderkid 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - dom-converter 0.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- utila 0.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- htmlparser2 6.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-ansi 6.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-regex 5.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- tapable 2.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-wsl 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-docker 2.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - mini-css-extract-plugin 2.9.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - node-html-parser 5.4.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 7.5.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - source-map-loader 3.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- abab 2.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- iconv-lite 0.6.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- safer-buffer 2.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- style-loader 3.3.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - terser-webpack-plugin 5.3.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- schema-utils 3.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- webpack 5.91.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/eslint-scope 3.7.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/eslint 8.56.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/estree 1.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/ast 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/helper-numbers 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/floating-point-hex-parser 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/helper-api-error 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @xtuc/long 4.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/helper-wasm-bytecode 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/wasm-edit 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/helper-buffer 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/helper-wasm-section 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/wasm-gen 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/ieee754 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @xtuc/ieee754 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/leb128 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/utf8 1.11.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/wasm-opt 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/wasm-parser 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @webassemblyjs/wast-printer 1.12.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - acorn-import-assertions 1.9.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - chrome-trace-event 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - enhanced-resolve 5.16.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-module-lexer 1.5.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- eslint-scope 5.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- esrecurse 4.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- estraverse 5.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- estraverse 4.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- events 3.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - glob-to-regexp 0.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-parse-even-better-errors 2.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - loader-runner 4.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- mime-types 2.1.35</Text>
        <Text className="mb-2 dark:text-s_light-100">- mime-db 1.52.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- neo-async 2.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- watchpack 2.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webpack-sources 3.2.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webpack-dev-server 4.15.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/bonjour 3.5.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/connect-history-api-fallback 1.5.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/express-serve-static-core 4.19.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/qs 6.9.15</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/range-parser 1.2.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/send 0.17.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/mime 1.3.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/express 4.17.21
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/body-parser 1.19.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/connect 3.4.38
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/serve-static 1.15.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/http-errors 2.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/serve-index 1.9.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/sockjs 0.3.36
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/ws 8.5.10</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - ansi-html-community 0.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - bonjour-service 1.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - multicast-dns 7.2.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- dns-packet 5.6.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @leichtgewicht/ip-codec 2.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- thunky 1.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- chokidar 3.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- anymatch 3.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-binary-path 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - binary-extensions 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- readdirp 3.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- colorette 2.0.20</Text>
        <Text className="mb-2 dark:text-s_light-100">- compression 1.7.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- accepts 1.3.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- negotiator 0.6.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- bytes 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - compressible 2.0.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- debug 2.6.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- ms 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- on-headers 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- safe-buffer 5.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- vary 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - connect-history-api-fallback 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - default-gateway 6.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- execa 5.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- cross-spawn 7.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-key 3.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - shebang-command 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - shebang-regex 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- which 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- get-stream 6.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - human-signals 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-stream 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- npm-run-path 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- onetime 5.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- mimic-fn 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- signal-exit 3.0.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - strip-final-newline 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- express 4.19.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array-flatten 1.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- body-parser 1.20.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- bytes 3.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- content-type 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- depd 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- destroy 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- http-errors 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - setprototypeof 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- statuses 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- toidentifier 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- iconv-lite 0.4.24</Text>
        <Text className="mb-2 dark:text-s_light-100">- on-finished 2.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ee-first 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- qs 6.11.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- side-channel 1.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- call-bind 1.0.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-define-property 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - get-intrinsic 1.2.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- es-errors 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - function-bind 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- has-proto 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- has-symbols 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- hasown 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - set-function-length 1.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - define-data-property 1.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- gopd 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - has-property-descriptors 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object-inspect 1.13.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- raw-body 2.5.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- unpipe 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- type-is 1.6.18</Text>
        <Text className="mb-2 dark:text-s_light-100">- media-typer 0.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - content-disposition 0.5.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cookie 0.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - cookie-signature 1.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- encodeurl 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- escape-html 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- etag 1.8.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- finalhandler 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- parseurl 1.3.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- fresh 0.5.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - merge-descriptors 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- methods 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - path-to-regexp 0.1.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- proxy-addr 2.0.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- forwarded 0.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ipaddr.js 1.9.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- range-parser 1.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- send 0.18.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- mime 1.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ms 2.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - serve-static 1.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- utils-merge 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - html-entities 2.5.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - http-proxy-middleware 2.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/http-proxy 1.17.14
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- http-proxy 1.18.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eventemitter3 4.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - requires-port 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - follow-redirects 1.15.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-plain-obj 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ipaddr.js 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - launch-editor 2.6.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- shell-quote 1.8.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- open 8.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - define-lazy-prop 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- p-retry 4.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/retry 0.12.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- retry 0.13.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- rimraf 3.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- selfsigned 2.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/node-forge 1.3.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- node-forge 1.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- serve-index 1.9.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- batch 0.6.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- http-errors 1.6.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- depd 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- inherits 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - setprototypeof 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- statuses 1.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- sockjs 0.3.24</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - faye-websocket 0.11.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - websocket-driver 0.7.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - http-parser-js 0.5.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - websocket-extensions 0.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- uuid 8.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- spdy 4.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- handle-thing 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - http-deceiver 1.2.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- select-hose 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - spdy-transport 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- detect-node 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- hpack.js 2.1.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- obuf 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - readable-stream 2.3.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- core-util-is 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- isarray 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - process-nextick-args 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string_decoder 1.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- wbuf 1.7.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - minimalistic-assert 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - readable-stream 3.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string_decoder 1.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webpack-dev-middleware 5.3.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- memfs 3.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-monkey 1.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- ws 8.17.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webpack-manifest-plugin 4.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webpack-sources 2.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - source-list-map 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/slider 4.4.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-google-signin/google-signin 11.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-masked-view/masked-view 0.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/bottom-tabs 6.5.20
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/elements 1.3.30
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- color 4.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- color-string 1.9.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - simple-swizzle 0.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-arrayish 0.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- warn-once 0.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/native 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/core 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/routers 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - escape-string-regexp 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- query-string 7.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - decode-uri-component 0.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- filter-obj 1.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - split-on-first 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - strict-uri-encode 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-is 18.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - use-latest-callback 0.1.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/native-stack 6.9.26
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/stack 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-navigation/elements 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @realm/react 0.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native 0.74.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/create-cache-key-function 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @jest/types 29.6.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/schemas 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sinclair/typebox 0.27.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/istanbul-lib-coverage 2.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/istanbul-reports 3.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/istanbul-lib-report 3.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/yargs 17.0.32
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/yargs-parser 21.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-clean 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-tools 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- appdirsjs 1.2.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- open 6.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-wsl 1.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ora 5.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- bl 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- buffer 5.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- base64-js 1.5.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ieee754 1.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- cli-cursor 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - restore-cursor 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cli-spinners 2.9.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-interactive 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-unicode-supported 0.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- log-symbols 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- wcwidth 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- defaults 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- clone 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- sudo-prompt 9.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-config 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cosmiconfig 5.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- import-fresh 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- caller-path 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - caller-callsite 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- callsites 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve-from 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-directory 0.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- js-yaml 3.14.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- argparse 1.0.10</Text>
        <Text className="mb-2 dark:text-s_light-100">- sprintf-js 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- esprima 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- parse-json 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- error-ex 1.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-arrayish 0.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-parse-better-errors 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- deepmerge 4.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- joi 17.13.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- @hapi/hoek 9.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- @hapi/topo 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sideway/address 4.1.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sideway/formula 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sideway/pinpoint 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-debugger-ui 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-doctor 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-platform-android 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-xml-parser 4.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- strnum 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- logkitty 0.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - ansi-fragments 0.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- colorette 1.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- slice-ansi 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- astral-regex 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-fullwidth-code-point 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-ansi 5.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-regex 4.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- dayjs 1.11.11</Text>
        <Text className="mb-2 dark:text-s_light-100">- yargs 15.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- cliui 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- string-width 4.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- emoji-regex 8.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-fullwidth-code-point 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- wrap-ansi 6.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- decamelize 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - get-caller-file 2.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - require-directory 2.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - require-main-filename 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- set-blocking 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- which-module 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- y18n 4.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - yargs-parser 18.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- camelcase 5.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-platform-apple 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-platform-ios 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - command-exists 1.2.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- envinfo 7.13.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-profile-transformer 0.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- source-map 0.7.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - node-stream-zip 1.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- yaml 2.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-hermes 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-server-api 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- connect 3.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- finalhandler 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- on-finished 2.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- errorhandler 1.5.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- nocache 3.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - pretty-format 26.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @jest/types 26.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/yargs 15.0.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-is 17.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- ws 6.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - async-limiter 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-types 13.6.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 9.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-extra 8.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jsonfile 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- universalify 0.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- prompts 2.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- kleur 3.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- sisteransi 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/assets-registry 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/codegen 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-parser 0.19.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-estree 0.19.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- invariant 2.2.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- loose-envify 1.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jscodeshift 0.14.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-class-properties 7.18.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-create-class-features-plugin 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-annotate-as-pure 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-member-expression-to-functions 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-optimise-call-expression 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-replace-supers 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-skip-transparent-expression-wrappers 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-nullish-coalescing-operator 7.18.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-nullish-coalescing-operator 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-optional-chaining 7.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-optional-chaining 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-modules-commonjs 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/preset-flow 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-flow-strip-types 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-flow 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/preset-typescript 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-jsx 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-typescript 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-typescript 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/register 7.23.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- clone-deep 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-plain-object 2.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- isobject 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- kind-of 6.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - shallow-clone 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - find-cache-dir 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- make-dir 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pkg-dir 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- find-up 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- locate-path 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-locate 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-exists 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pirates 4.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- babel-core 7.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - flow-parser 0.235.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- node-dir 0.1.17</Text>
        <Text className="mb-2 dark:text-s_light-100">- recast 0.21.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- ast-types 0.15.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- temp 0.8.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- rimraf 2.6.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - write-file-atomic 2.4.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- imurmurhash 0.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- mkdirp 0.5.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- nullthrows 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/community-cli-plugin 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/dev-middleware 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @isaacs/ttlcache 1.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/debugger-frontend 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @rnx-kit/chromium-edge-launcher 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/node 18.19.31
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lighthouse-logger 1.4.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- marky 1.2.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- mkdirp 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - chrome-launcher 0.15.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- open 7.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- temp-dir 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/metro-babel-transformer 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/babel-preset 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-async-generator-functions 7.20.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-remap-async-to-generator 7.22.20
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-wrap-function 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-async-generators 7.8.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-export-default-from 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-export-default-from 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-logical-assignment-operators 7.20.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-logical-assignment-operators 7.10.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-numeric-separator 7.18.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-numeric-separator 7.10.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-object-rest-spread 7.20.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-object-rest-spread 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-parameters 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-optional-catch-binding 7.18.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-optional-catch-binding 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-dynamic-import 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-arrow-functions 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-async-to-generator 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-block-scoping 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-classes 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-computed-properties 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-destructuring 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-function-name 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-literals 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-named-capturing-groups-regex 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-create-regexp-features-plugin 7.22.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- regexpu-core 5.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- regenerate 1.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - regenerate-unicode-properties 10.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/regjsgen 0.8.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- regjsparser 0.9.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- jsesc 0.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unicode-match-property-ecmascript 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unicode-canonical-property-names-ecmascript 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unicode-property-aliases-ecmascript 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unicode-match-property-value-ecmascript 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-private-methods 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-private-property-in-object 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-private-property-in-object 7.14.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-display-name 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-jsx 7.23.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-jsx-self 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-jsx-source 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-runtime 7.24.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-polyfill-corejs2 0.4.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-define-polyfill-provider 0.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lodash.debounce 4.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve 1.22.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-core-module 2.13.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- path-parse 1.0.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - supports-preserve-symlinks-flag 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-polyfill-corejs3 0.10.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - core-js-compat 3.37.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-polyfill-regenerator 0.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-shorthand-properties 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-spread 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-sticky-regex 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-unicode-regex 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/babel-plugin-codegen 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-transform-flow-enums 0.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-refresh 0.14.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- metro 0.80.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- ci-info 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- denodeify 1.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - error-stack-parser 2.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- stackframe 1.3.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-parser 0.20.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-estree 0.20.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- image-size 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- queue 6.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-worker 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-util 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ci-info 3.9.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jsc-safe-url 0.2.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lodash.throttle 4.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-babel-transformer 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- metro-cache 0.80.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- metro-core 0.80.9</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-resolver 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-cache-key 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-config 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-validate 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- camelcase 6.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-get-type 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- leven 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - pretty-format 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-styles 5.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-runtime 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/runtime 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - regenerator-runtime 0.14.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-file-map 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fb-watchman 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- bser 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- node-int64 0.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - node-abort-controller 3.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- walker 1.0.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- makeerror 1.0.12</Text>
        <Text className="mb-2 dark:text-s_light-100">- tmpl 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-source-map 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-symbolicate 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- source-map 0.5.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- through2 2.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- xtend 4.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- vlq 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ob1 0.80.9</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-transform-plugins 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-transform-worker 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - metro-minify-terser 0.80.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - serialize-error 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- throat 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ws 7.5.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- yargs 17.7.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- cliui 8.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- wrap-ansi 7.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- y18n 5.0.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - yargs-parser 21.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- querystring 0.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- readline 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/gradle-plugin 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/js-polyfills 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/normalize-colors 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/virtualized-lists 0.74.83
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - abort-controller 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - event-target-shim 5.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- anser 1.4.10</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - flow-enums-runtime 0.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-environment-node 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/environment 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/fake-timers 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sinonjs/fake-timers 10.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @sinonjs/commons 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- type-detect 4.0.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-message-util 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/stack-utils 2.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- slash 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- stack-utils 2.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - escape-string-regexp 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-mock 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jsc-android 250231.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- memoize-one 5.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- promise 8.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- asap 2.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-devtools-core 5.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-shallow-renderer 16.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - regenerator-runtime 0.13.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- scheduler 0.24.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - stacktrace-parser 0.1.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 0.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - whatwg-fetch 3.6.20
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @rneui/base 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react-native-vector-icons 6.4.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react 18.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/prop-types 15.7.12
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- csstype 3.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react-native 0.70.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- color 3.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hoist-non-react-statics 3.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-is 16.13.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-ratings 8.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-size-matters 0.4.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @rneui/themed 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @robinbobin/react-native-google-drive-api-wrapper 1.2.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - simple-common-utils 2.6.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- utf8 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-ondevice-backgrounds 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/manager-api 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/channels 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/client-logger 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/global 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/core-events 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ts-dedent 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- qs 6.12.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- telejson 7.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - memoizerific 1.11.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - map-or-similar 1.5.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - tiny-invariant 1.3.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/csf 0.1.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 2.19.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/router 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/theming 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @emotion/use-insertion-effect-with-fallbacks 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/types 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/babel__core 7.20.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/babel__generator 7.6.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/babel__template 7.4.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/babel__traverse 7.20.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - file-system-cache 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-extra 11.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- ramda 0.29.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- dequal 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- store2 2.14.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/preview-api 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - synchronous-promise 2.0.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/react-native-theming 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-ondevice-notes 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-markdown-display 6.1.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - css-to-react-native 3.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- camelize 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - css-color-keywords 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- markdown-it 10.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- entities 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- linkify-it 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- uc.micro 1.0.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- mdurl 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- prop-types 15.8.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-fit-image 1.5.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/jest 29.5.12
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expect 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/expect-utils 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-matcher-utils 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-diff 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - diff-sequences 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react 18.2.79
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react-native 0.73.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - autoprefixer 10.4.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fraction.js 4.3.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - normalize-range 0.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- base-64 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- compromise 14.13.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- efrt 2.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- grad-school 0.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- suffix-thumb 5.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- date-fns 3.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- expo 50.0.17</Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/cli 0.17.10</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/code-signing-certificates 0.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/config 8.5.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/code-frame 7.10.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/config-plugins 7.9.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/config-types 50.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/fingerprint 0.6.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/spawn-async 1.7.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/json-file 8.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/plist 0.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @xmldom/xmldom 0.7.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- xmlbuilder 14.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/sdk-runtime-versions 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/normalize-color 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- glob 7.1.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- slugify 1.6.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- xcode 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- simple-plist 1.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - bplist-creator 0.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - stream-buffers 2.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - bplist-parser 0.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- big-integer 1.6.52</Text>
        <Text className="mb-2 dark:text-s_light-100">- plist 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @xmldom/xmldom 0.8.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- xmlbuilder 15.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- uuid 7.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- xml2js 0.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- sax 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- xmlbuilder 11.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- semver 7.5.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- sucrase 3.34.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 4.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lines-and-columns 1.2.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- mz 2.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- any-promise 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- thenify-all 1.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- thenify 3.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - ts-interface-checker 0.1.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/devcert 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - application-config-path 0.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- debug 3.2.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- eol 0.9.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- get-port 3.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - password-prompt 1.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-escapes 4.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 0.21.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- sudo-prompt 8.2.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- tmp 0.0.33</Text>
        <Text className="mb-2 dark:text-s_light-100">- os-tmpdir 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/env 0.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- dotenv 16.4.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - dotenv-expand 11.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/image-utils 0.4.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/metro-config 0.17.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-preset-fbjs 3.4.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-class-properties 7.12.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-block-scoped-functions 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-for-of 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-member-expression-literals 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-object-super 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-property-literals 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-template-literals 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-syntax-trailing-function-commas 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-extra 9.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss 1.19.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- detect-libc 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss-linux-x64-musl 1.19.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss-linux-x64-gnu 1.19.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/osascript 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- exec-async 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/package-manager 1.5.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - npm-package-arg 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hosted-git-info 3.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- osenv 0.1.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- os-homedir 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - validate-npm-package-name 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- builtins 1.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- ora 3.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- cli-cursor 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - restore-cursor 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- onetime 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- mimic-fn 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- log-symbols 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- split 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- through 2.3.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- sudo-prompt 9.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/prebuild-config 6.8.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/rudder-sdk-node 1.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/bunyan 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @segment/loosely-validate-event 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - component-type 1.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - join-component 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fetch-retry 4.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- md5 2.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- charenc 0.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- crypt 0.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-buffer 1.1.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - remove-trailing-slash 0.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/xcpretty 4.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- js-yaml 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- argparse 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/dev-middleware 0.73.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/debugger-frontend 0.73.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - chromium-edge-launcher 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @urql/core 2.3.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @graphql-typed-document-node/core 3.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- wonka 4.0.15</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @urql/exchange-retry 0.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @urql/core 5.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @0no-co/graphql.web 1.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- wonka 6.3.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- arg 5.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- better-opn 3.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - bplist-parser 0.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cacache 15.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- @npmcli/fs 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @gar/promisify 1.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @npmcli/move-file 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- chownr 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-minipass 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- minipass 3.3.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- infer-owner 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - minipass-collect 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - minipass-flush 1.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - minipass-pipeline 1.2.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- p-map 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - aggregate-error 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- clean-stack 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - indent-string 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - promise-inflight 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ssri 8.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- tar 6.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- minipass 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- minizlib 2.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unique-filename 1.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- unique-slug 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- env-editor 0.4.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- form-data 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- asynckit 0.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - combined-stream 1.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - delayed-stream 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - freeport-async 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- graphql 15.8.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- graphql-tag 2.12.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - https-proxy-agent 5.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- agent-base 6.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- internal-ip 4.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - default-gateway 4.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- execa 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- get-stream 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pump 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - end-of-stream 1.4.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-stream 1.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- npm-run-path 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- p-finally 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-eof 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ip-regex 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-schema-deref-sync 0.13.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- clone 2.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- dag-map 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-valid-path 0.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-invalid-path 0.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-glob 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-extglob 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- md5 2.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- memory-cache 0.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- traverse 0.6.9</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - typedarray.prototype.slice 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - define-properties 1.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- object-keys 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- es-abstract 1.23.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array-buffer-byte-length 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-array-buffer 3.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - arraybuffer.prototype.slice 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-shared-array-buffer 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - available-typed-arrays 1.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - possible-typed-array-names 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - data-view-buffer 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-data-view 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-typed-array 1.1.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - which-typed-array 1.1.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- for-each 0.3.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-callable 1.2.7</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - has-tostringtag 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - data-view-byte-length 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - data-view-byte-offset 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-object-atoms 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-set-tostringtag 2.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-to-primitive 1.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-date-object 1.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-symbol 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - function.prototype.name 1.1.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - functions-have-names 1.2.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - get-symbol-description 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- globalthis 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - internal-slot 1.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-negative-zero 2.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-regex 1.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-string 1.0.7</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-weakref 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.assign 4.1.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - regexp.prototype.flags 1.5.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - set-function-name 2.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - safe-array-concat 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- isarray 2.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - safe-regex-test 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string.prototype.trim 1.2.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string.prototype.trimend 1.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string.prototype.trimstart 1.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - typed-array-buffer 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - typed-array-byte-length 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - typed-array-byte-offset 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - typed-array-length 1.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unbox-primitive 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- has-bigints 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - which-boxed-primitive 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-bigint 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-boolean-object 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-number-object 1.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- valid-url 1.0.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- md5hex 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- picomatch 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- pretty-bytes 5.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- progress 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - qrcode-terminal 0.11.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- requireg 0.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - nested-error-stacks 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve 1.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - resolve.exports 2.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - structured-headers 0.4.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- tempy 0.7.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- del 6.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- globby 11.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- array-union 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-path-inside 3.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 0.16.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - unique-string 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - crypto-random-string 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - terminal-link 2.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - supports-hyperlinks 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- text-table 0.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- url-join 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/vector-icons 14.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-preset-expo 10.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-decorators 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-decorators 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-object-rest-spread 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-export-namespace-from 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/preset-env 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-bugfix-firefox-class-in-computed-class-key 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          -
          @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression
          7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining
          7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-optional-chaining 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-bugfix-v8-static-class-fields-redefine-readonly 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-proposal-private-property-in-object 7.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-class-static-block 7.14.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-import-assertions 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-import-attributes 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-import-meta 7.10.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-json-strings 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-top-level-await 7.14.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-unicode-sets-regex 7.18.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-async-generator-functions 7.24.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-class-properties 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-class-static-block 7.24.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-dotall-regex 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-duplicate-keys 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-dynamic-import 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-exponentiation-operator 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/helper-builder-binary-assignment-operator-visitor 7.22.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-json-strings 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-logical-assignment-operators 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-modules-amd 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-modules-systemjs 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-modules-umd 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-new-target 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-nullish-coalescing-operator 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-numeric-separator 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-optional-catch-binding 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-regenerator 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - regenerator-transform 0.15.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-reserved-words 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-typeof-symbol 7.24.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-unicode-escapes 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-unicode-property-regex 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-unicode-sets-regex 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/preset-modules 0.1.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- esutils 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/preset-react 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-jsx-development 7.22.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-react-pure-annotations 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/babel-preset 0.73.21
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/babel-plugin-codegen 0.73.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/codegen 0.73.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - flow-parser 0.206.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-react-native-web 0.18.12
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-refresh 0.14.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-asset 9.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/assets-registry 0.73.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- blueimp-md5 2.19.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- md5-file 3.2.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- buffer-alloc 1.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - buffer-alloc-unsafe 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- buffer-fill 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-constants 15.4.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-file-system 16.0.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-font 11.10.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fontfaceobserver 2.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-keep-awake 12.8.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-modules-autolinking 1.10.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-modules-core 1.11.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fbemitter 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fbjs 3.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- cross-fetch 3.1.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fbjs-css-vars 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- promise 7.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- setimmediate 1.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - ua-parser-js 1.0.37
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - whatwg-url-without-unicode 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webidl-conversions 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-app-loading 2.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-splash-screen 0.17.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/configure-splash-screen 0.6.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- commander 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pngjs 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- xml-js 1.6.11</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/prebuild-config 5.0.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/config 7.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/config-plugins 5.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/config-types 47.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/json-file 8.2.36
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- json5 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- @expo/plist 0.0.18</Text>
        <Text className="mb-2 dark:text-s_light-100">- xml2js 0.4.23</Text>
        <Text className="mb-2 dark:text-s_light-100">- sucrase 3.35.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- glob 10.3.12</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - foreground-child 3.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- signal-exit 4.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jackspeak 2.3.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @isaacs/cliui 8.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- string-width 5.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eastasianwidth 0.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- emoji-regex 9.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-ansi 7.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-regex 6.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- wrap-ansi 8.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-styles 6.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- minimatch 9.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - brace-expansion 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- minipass 7.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-scurry 1.10.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- lru-cache 10.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/image-utils 0.3.22
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-blur 12.9.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-crypto 12.8.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-dev-client 3.3.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-dev-launcher 3.6.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ajv 8.11.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-dev-menu 4.5.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-dev-menu-interface 1.7.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-manifests 0.13.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-json-utils 0.12.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-updates-interface 0.15.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-document-picker 11.10.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- expo-image 1.10.6</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-image-picker 14.7.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-image-loader 4.6.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-linear-gradient 12.7.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-local-authentication 13.8.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-secure-store 12.8.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-sharing 11.10.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-splash-screen 0.26.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/prebuild-config 6.7.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @expo/config-plugins 7.8.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-status-bar 1.11.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expo-system-ui 2.9.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- @jest/core 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/console 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/reporters 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @bcoe/v8-coverage 0.2.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/test-result 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - collect-v8-coverage 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/transform 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-istanbul 6.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @istanbuljs/load-nyc-config 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - get-package-type 0.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @istanbuljs/schema 0.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-lib-instrument 5.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-lib-coverage 3.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- test-exclude 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-haste-map 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/graceful-fs 4.1.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-regex-util 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - write-file-atomic 4.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- exit 0.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-lib-instrument 6.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-lib-report 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- make-dir 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-lib-source-maps 4.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - istanbul-reports 3.1.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- html-escaper 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string-length 4.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- char-regex 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - v8-to-istanbul 9.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-changed-files 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-config 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/test-sequencer 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- babel-jest 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-preset-jest 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-jest-hoist 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-preset-current-node-syntax 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-syntax-bigint 7.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-circus 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/expect 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-snapshot 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - natural-compare 1.4.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- co 4.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- dedent 1.5.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-generator-fn 2.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-each 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-runtime 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/globals 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @jest/source-map 29.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- callsites 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - cjs-module-lexer 1.3.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-resolve 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-pnp-resolver 1.2.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-bom 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- pure-rand 6.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-runner 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- emittery 0.13.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-docblock 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - detect-newline 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-leak-detector 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-watcher 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - source-map-support 0.5.13
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- parse-json 5.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - strip-json-comments 3.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-resolve-dependencies 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- import-local 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve-cwd 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-cli 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- create-jest 29.7.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jest-expo 50.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-environment-jsdom 29.7.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/jsdom 20.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/tough-cookie 4.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- parse5 7.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- entities 4.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jsdom 20.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - acorn-globals 7.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- acorn-walk 8.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- cssom 0.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- cssstyle 2.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- cssom 0.3.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- data-urls 3.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - whatwg-mimetype 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- whatwg-url 11.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- tr46 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - webidl-conversions 7.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- decimal.js 10.4.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- domexception 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- escodegen 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- form-data 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - html-encoding-sniffer 3.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - whatwg-encoding 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - http-proxy-agent 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @tootallnate/once 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-potential-custom-element-name 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- nwsapi 2.2.9</Text>
        <Text className="mb-2 dark:text-s_light-100">- saxes 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- xmlchars 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- symbol-tree 3.2.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- tough-cookie 4.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- psl 1.9.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- universalify 0.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- url-parse 1.5.10</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - querystringify 2.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - w3c-xmlserializer 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - xml-name-validator 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-watch-select-projects 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- chalk 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jest-watch-typeahead 2.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ansi-escapes 6.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- slash 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string-length 5.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- char-regex 2.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-test-renderer 18.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- scheduler 0.23.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - stacktrace-js 2.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - stack-generator 2.0.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - stacktrace-gps 3.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- source-map 0.5.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- nativewind 4.0.36</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-css-interop 0.0.36
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-tester 11.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- core-js 3.37.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lodash.mergewith 4.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- prettier 2.8.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-indent 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- min-indent 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss 1.22.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- postcss 8.4.23</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-loader 8.1.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- cosmiconfig 9.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- env-paths 2.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- import-fresh 3.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - parent-module 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve-from 4.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- jiti 1.21.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- react 18.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- react-dom 18.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native 0.73.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-clean 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-tools 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-config 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-debugger-ui 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-doctor 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-platform-android 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-platform-ios 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-hermes 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-plugin-metro 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-server-api 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/cli-types 12.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/community-cli-plugin 0.73.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/metro-babel-transformer 0.73.15
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-parser 0.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hermes-estree 0.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/gradle-plugin 0.73.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/js-polyfills 0.73.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/normalize-colors 0.73.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native/virtualized-lists 0.73.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - deprecated-react-native-prop-types 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-devtools-core 4.28.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-css-interop 0.0.34
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-csv 0.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/papaparse 5.3.14
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- papaparse 5.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-curved-bottom-bar 3.2.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- d3-shape 3.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- d3-path 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-size-scaling 0.5.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-format-currency 0.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-gesture-handler 2.14.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @egjs/hammerjs 2.0.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/hammerjs 2.0.45
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-get-random-values 1.8.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-base64-decode 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-gifted-charts 1.4.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - gifted-charts-core 0.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-linear-gradient 2.8.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-modal-datetime-picker 17.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-reanimated 3.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @babel/plugin-transform-object-assign 7.24.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-safe-area-context 4.8.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-screens 3.29.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-freeze 1.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-svg 14.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- css-select 5.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- domhandler 5.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- domutils 3.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - dom-serializer 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-web 0.19.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - inline-style-prefixer 6.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - css-in-js-utils 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - hyphenate-style-name 1.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fast-loops 1.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- memoize-one 6.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- styleq 0.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-navigation 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- realm 12.8.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- @realm/fetch 0.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- bson 4.7.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - node-machine-id 1.1.12
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - path-browserify 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - prebuild-install 7.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- detect-libc 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - expand-template 2.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - github-from-package 0.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - mkdirp-classic 0.5.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - napi-build-utils 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- node-abi 3.62.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- simple-get 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - decompress-response 6.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - mimic-response 3.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - simple-concat 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- tar-fs 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- chownr 1.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- tar-stream 2.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- fs-constants 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- tunnel-agent 0.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ts-jest 29.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- bs-logger 0.2.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- make-error 1.3.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- typescript 5.3.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- @pkgr/core 0.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @alloc/quick-lru 5.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @esbuild/linux-x64 0.18.20
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @base2/pretty-print-object 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @eslint/js 8.57.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @eslint-community/regexpp 4.10.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @eslint-community/eslint-utils 4.4.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-visitor-keys 3.4.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @floating-ui/core 1.6.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @floating-ui/utils 0.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @floating-ui/react-dom 2.0.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @floating-ui/dom 1.6.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @humanwhocodes/module-importer 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @humanwhocodes/config-array 0.11.14
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @humanwhocodes/object-schema 2.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @juggle/resize-observer 3.4.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @pkgjs/parseargs 0.11.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/number 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-arrow 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-primitive 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-slot 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-compose-refs 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-context 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/primitive 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-collection 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-direction 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-dismissable-layer 1.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-callback-ref 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-escape-keydown 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-focus-scope 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-id 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-layout-effect 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-popper 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-rect 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/rect 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-size 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-portal 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-focus-guards 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-select 1.2.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-controllable-state 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-use-previous 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-visually-hidden 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- aria-hidden 1.2.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-remove-scroll 2.5.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-remove-scroll-bar 2.3.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-style-singleton 2.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- get-nonce 1.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - use-callback-ref 1.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- use-sidecar 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - detect-node-es 1.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-separator 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-toggle-group 1.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-roving-focus 1.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-toggle 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @radix-ui/react-toolbar 1.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-async-storage/async-storage 1.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - merge-options 3.0.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-plain-obj 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @react-native-community/datetimepicker 7.6.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/blocks 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/components 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - use-resize-observer 9.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/docs-tools 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/core-common 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/node-logger 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/find-cache-dir 3.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/node-fetch 2.6.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/pretty-hrtime 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- esbuild 0.18.20</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - esbuild-register 3.5.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- handlebars 4.7.8</Text>
        <Text className="mb-2 dark:text-s_light-100">- wordwrap 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lazy-universal-dotenv 4.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- app-root-dir 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - dotenv-expand 10.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- pkg-dir 5.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - pretty-hrtime 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/doctrine 0.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- assert 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-nan 1.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- object-is 1.1.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- util 0.12.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-arguments 1.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-generator-function 1.0.10
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- doctrine 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/lodash 4.17.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - markdown-to-jsx 7.4.7
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- polished 4.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-colorful 5.6.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- tocbot 4.27.19</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-controls 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/react-dom-shim 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-add-jsx-attribute 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-remove-jsx-empty-expression 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-remove-jsx-attribute 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-replace-jsx-attribute-value 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-svg-em-dimensions 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-transform-svg-component 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-svg-dynamic-title 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-preset 8.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/babel-plugin-transform-react-native-svg 8.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/plugin-jsx 8.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/hast-util-to-babel-ast 8.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- svg-parser 2.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @testing-library/react-native 12.5.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- redent 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/escodegen 0.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/moment 2.13.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- moment 2.30.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/json5 0.0.29
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/react-native-get-random-values 1.8.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/semver 7.5.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @types/uuid 9.0.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/eslint-plugin 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/scope-manager 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/types 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/visitor-keys 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/type-utils 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/typescript-estree 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- minimatch 9.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- ts-api-utils 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/utils 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- graphemer 1.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @typescript-eslint/parser 6.21.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @ungap/structured-clone 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- acorn-walk 7.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array-includes 3.1.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.findlastindex 1.2.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-shim-unscopables 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.flatmap 1.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.toreversed 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.tosorted 1.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.flat 1.3.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - array.prototype.findlast 1.2.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- ast-types 0.14.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-react-docgen 4.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-docgen 5.4.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - estree-to-babel 3.2.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- c8 7.14.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - foreground-child 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- yargs 16.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- cliui 7.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - yargs-parser 20.2.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - babel-plugin-react-docgen-typescript 1.5.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-docgen-typescript 1.22.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - camelcase-css 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- deep-equal 1.1.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- deep-is 0.1.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- didyoumean 1.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- dlv 1.1.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - es-iterator-helpers 1.0.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - iterator.prototype 1.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - reflect.getprototypeof 1.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - which-builtin-type 1.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-async-function 2.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-finalizationregistry 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - which-collection 1.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- is-map 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-set 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-weakmap 2.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- is-weakset 2.0.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-es 3.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- eslint-utils 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-visitor-keys 1.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- regexpp 3.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-config-universe 12.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-config-prettier 8.10.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-import 2.29.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- doctrine 2.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-import-resolver-node 0.3.9
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-module-utils 2.8.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.fromentries 2.0.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.groupby 1.0.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.values 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - tsconfig-paths 3.15.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- strip-bom 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-node 11.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-prettier 5.1.3
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - prettier-linter-helpers 1.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- fast-diff 1.3.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- synckit 0.8.8</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-react 7.34.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - jsx-ast-utils 3.3.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.entries 1.1.8
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - object.hasown 1.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- resolve 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - string.prototype.matchall 4.0.11
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - eslint-plugin-react-hooks 4.6.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- eslint-scope 7.2.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- espree 9.6.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- acorn-jsx 5.3.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- acorn 7.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- esquery 1.5.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-levenshtein 2.0.6
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - file-entry-cache 6.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- flat-cache 3.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- flatted 3.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- keyv 4.5.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- json-buffer 3.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- html-tags 3.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - is-plain-object 5.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - json-stable-stringify-without-jsonify 1.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss-linux-x64-gnu 1.22.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- levn 0.4.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- prelude-ls 1.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- type-check 0.4.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - lightningcss-linux-x64-musl 1.22.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- lodash.merge 4.6.2</Text>
        <Text className="mb-2 dark:text-s_light-100">- object-hash 3.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- optionator 0.9.4</Text>
        <Text className="mb-2 dark:text-s_light-100">- word-wrap 1.2.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- path-dirname 1.0.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-svg-transformer 1.3.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- @svgr/core 8.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- cosmiconfig 8.3.6</Text>
        <Text className="mb-2 dark:text-s_light-100">- snake-case 3.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @svgr/plugin-svgo 8.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- svgo 3.2.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-tree 2.3.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- mdn-data 2.0.30</Text>
        <Text className="mb-2 dark:text-s_light-100">- csso 5.0.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- css-tree 2.2.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- mdn-data 2.0.28</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-modal-selector 2.1.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-swipe-gestures 1.0.5
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- read-cache 1.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - safe-json-stringify 1.2.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- tinycolor2 1.6.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- ncp 2.0.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- prettier 3.2.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- uglify-js 3.17.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @eslint/eslintrc 2.1.4
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- globals 13.24.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- type-fest 0.20.2</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-ondevice-actions 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-actions 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- uuid 9.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - fast-deep-equal 2.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/addon-ondevice-controls 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-native-modal-datetime-picker 14.0.1
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - react-element-to-jsx-string 15.0.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- react-is 18.1.0</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/core-client 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/client-logger 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/preview-api 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/channels 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/core-events 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/types 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/preview-web 7.6.17
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/react 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/core-client 7.6.19
        </Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @types/estree 0.0.51
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- eslint 8.57.0</Text>
        <Text className="mb-2 dark:text-s_light-100">- mv 2.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">- rimraf 2.4.5</Text>
        <Text className="mb-2 dark:text-s_light-100">- glob 6.0.4</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - @storybook/react-native 7.6.18
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- tailwindcss 3.4.3</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-import 15.1.0
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- postcss-js 4.0.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-load-config 4.0.2
        </Text>
        <Text className="mb-2 dark:text-s_light-100">- lilconfig 3.1.1</Text>
        <Text className="mb-2 dark:text-s_light-100">
          - postcss-nested 6.0.1
        </Text>
        <Text className="my-4 text-xl font-semibold dark:text-s_light-100">Figma Designs</Text>
        <Text className="mb-8 dark:text-s_light-100">
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
