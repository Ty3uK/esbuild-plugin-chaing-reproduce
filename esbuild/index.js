const { build } = require('esbuild');
const fg = require('fast-glob');

const firstPlugin = require('./plugins/first');
const secondPlugin = require('./plugins/second');

(async () => {
    await build({
        platform: 'node',
        target: 'node12',
        entryPoints: await fg('src/**/*.ts'),
        outdir: 'build',
        incremental: true,
        plugins: [
            secondPlugin,
            firstPlugin,
        ],
    });

    process.exit();
})();
