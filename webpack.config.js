const path = require('path');
const loaderUtils = require('loader-utils');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = [
    '404', 
    'pages/apps', 
    'pages/contact', 
    'pages/home', 
    'pages/legal', 
    'pages/projects', 
    'pages/support',
    'projects/bbgranden',
    'projects/chess',
    'projects/efs',
    'projects/ifs',
    'projects/pathfinding',
    'projects/senappGameEngine',
    'projects/skeadeals',
];
const commonConfig = (env) => ({
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.tsx`;
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
              inject: true,
              template: `./${page}.html`,
              filename: `${page}.html`,
              chunks: [page],
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