module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        curly: 'off',
        semi: ['error', 'never'],
        '@typescript-eslint/semi': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: 'src/**',
                group: 'parent',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {
              order: 'asc',
            },
            'newlines-between': 'always',
          },
        ],
        'sort-imports': [
          'error',
          {
            allowSeparatedGroups: true,
            ignoreDeclarationSort: true,
          },
        ],
      },
    },
  ],
}
