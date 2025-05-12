module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^!@svgr/webpack.+\\.svg$': '<rootDir>/src/test/svgrMock.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)$':
            '<rootDir>/src/test/fileMock.js',
    },
};