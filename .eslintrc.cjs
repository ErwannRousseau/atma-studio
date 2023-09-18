module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'next',
  ],
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@/*', './*']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Modules "builtin" de Node.js
          'external', // Modules externes (packages npm, etc.)
          'parent', // Modules du répertoire parent
          'sibling', // Modules du même répertoire
          'index', // Fichier index du répertoire courant
          'object', // Imports sous forme d'objets (TypeScript uniquement)
          'type', // Imports de types (TypeScript uniquement)
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-unresolved': 'error',
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    'public',
    'next.config.js', // Ajoutez les fichiers que vous souhaitez exclure ici
    'postcss.config.js',
  ],
};
