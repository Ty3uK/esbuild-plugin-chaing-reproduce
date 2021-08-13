const fs = require('fs');

/**
 * @type {import('esbuild').Plugin}
 */
const first = {
    name: 'first',
    setup(build) {
        build.onLoad({ filter: /\.ts/ }, async (args) => {
            const contents = await new Promise((resolve) => fs.readFile(args.path, 'utf-8', (_, result) => resolve(result)));

            console.log('first onLoad');

            return {
                contents,
                loader: 'ts',
            };
        });
    }
};

module.exports = first;
