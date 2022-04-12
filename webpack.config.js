const path = require('path');
const loaderUtils = require('loader-utils');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
    { url: '404' }, 
    { url: 'pages/apps' }, 
    { url: 'pages/contact' }, 
    { url: 'pages/home' }, 
    { url: 'pages/legal' }, 
    { url: 'pages/projects' }, 
    { url: 'pages/support' }, 
    { url: 'projects/bbgranden' }, 
    { url: 'projects/chess' }, 
    { url: 'projects/efs' }, 
    { url: 'projects/ifs' }, 
    { url: 'projects/pathfinding' }, 
    { url: 'projects/senappGameEngine' }, 
    { url: 'projects/skeadeals' }, 
];

const commonConfig = (env) => ({
    entry: pages.reduce((config, page) => {
        config[page.url] = `./src/${page.url}.tsx`;
        return config;
    }, {}),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|mp3)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                mode: "local",
                                auto: true,
                                exportLocalsConvention: "camelCase",
                                getLocalIdent: (context, localIdentName, localName, options) => {
                                    const hash = loaderUtils.getHashDigest(
                                        path.relative(context.rootContext, context.resourcePath) + localName,
                                        'md5',
                                        'base64',
                                        5
                                    );

                                    const moduleName = path.basename(context.resourcePath).match(/(.*)\.module.css/)[1] ?? '';

                                    return loaderUtils.interpolateName(
                                        context,
                                        `${moduleName}--${localName}_${hash}`,
                                        options
                                    );
                                },
                            }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        chunkIds: 'named',
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [].concat(
        pages.map(
          (page) =>
            new HtmlWebpackPlugin({
                template: `./webpack-template.html`,
                filename: `${page.url}.html`,
                chunks: [page.url],
                favicon: './resources/favicon.ico'
            })
        ),
    ),
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: env.outputPath ?? path.resolve(__dirname),
    },
});

module.exports = (env, argv) => {
    switch (argv.mode) {
        case 'production':
            return merge(commonConfig(env), {
                optimization: {
                    minimize: true,
                },
                performance: {
                    hints: false,
                }
            });
            case 'development':
                return merge(commonConfig(env), {
                    devtool: 'eval-source-map',
                });
            default:
                throw new Error('No matching configuration was found!');
    }
}