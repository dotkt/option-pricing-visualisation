module.exports = {
    'testURL': 'http://localhost',
    'testEnvironment': 'node',
    'roots': [
        '<rootDir>/test',
        '<rootDir>/src'
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}'
    ],
    setupFiles: [
        '<rootDir>/config/polyfills.js'
    ],
    'testMatch': [
        '<rootDir>/test/**/?(*.)(spec|test).(j|t)s?(x)'
    ],
    'transform': {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
    },
    'transformIgnorePatterns': [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
    ],
    'moduleNameMapper': {
        '^react-native$': 'react-native-web'
    },
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'css',
        'node'
    ],
}