switch (process.env.NODE_ENV) {
	case 'prd':
	case 'production':
		module.exports = require('./config/webpack.prd');
		break;
	case 'test':
	case 'testing':
		module.exports = require('./config/webpack.test');
		break;
	case 'dev':
	case 'development':
	default:
		module.exports = require('./config/webpack.dev');
}
