module.exports = {
    // Среда выполнения тестов (в данном случае - Node.js)
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        html: '<html lang="zh-cmn-Hant"></html>',
        url: 'https://jestjs.io/',
        userAgent: 'Agent/007',
    },

    // Корневые директории, в которых Jest будет искать тесты
    roots: ['<rootDir>/src'],

    // Расширения файлов, которые Jest будет рассматривать как модули
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
        '\\.css$': '<rootDir>/src/utils/identity-obj-proxy.js',
    },

    // Регулярное выражение для поиска файлов с тестами
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

    // Трансформация файлов перед выполнением тестов (в данном случае - Babel)
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
};
