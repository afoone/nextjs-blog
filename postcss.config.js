module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js',
        './pages/**/*.jsx',
        './components/**/*.jsx'
    ],
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',

        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ]
    ]
}