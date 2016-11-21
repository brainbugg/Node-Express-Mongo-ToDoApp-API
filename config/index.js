var configValues = require('./config');


module.exports =
{
	getDbConnectionString: function()
	{
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds159217.mlab.com:59217/nodetodosample';
	}
};