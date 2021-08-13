const fs = require('fs');

/**
 * @type {import('esbuild').Plugin}
 */
const second = {
    name: 'second',
    setup(build) {
        build.onLoad({ filter: /\.ts/ }, async (args) => {
            const contents = await new Promise((resolve) => fs.readFile(args.path, 'utf-8', (_, result) => resolve(result)));

            console.log('second onLoad');

            return {
                contents,
                loader: 'ts',
            };
        });
    }
};

module.exports = second;
