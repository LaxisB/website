/** @type { import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/build' },
    },
    plugins: [['@snowpack/plugin-typescript']],
    buildOptions: {
        out: 'build',
    },
};
