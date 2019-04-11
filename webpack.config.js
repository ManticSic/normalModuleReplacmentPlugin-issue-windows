const merge = require( 'webpack-merge' );
const path = require( 'path' );

const commonConfigObj = {
    entry: {
        'fooBar': './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve( __dirname, 'dist' ),
        library: 'FooBar',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { configFile: 'tsconfig.json' }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    profile: true
};

const commonConfig = merge( [ commonConfigObj ] );
const environments = {
    'prod': require( './webpack/prod.config.js' ),
    'dev': require( './webpack/dev.config.js' )
};

module.exports = mode=>{
    if( mode ) {
        const envConfig = environments[ mode.env ];
        
        if( envConfig ) {
            return merge( commonConfig, envConfig );
        }
    }
    
    return merge( commonConfig, environments.dev );
};
