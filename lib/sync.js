'use strict';

// MODULES //

var readFile = require( 'utils-fs-read-file' ),
	parse = require( 'utils-cjson-parse' ),
	isString = require( 'validate.io-string-primitive' );


// READ SYNC //

/**
* FUNCTION: readSync( path[, options] )
*	Reads the entire contents of a commented JSON file.
*
* @param {String} path - file path
* @param {Object|String} [options] - function options
* @param {Function} [options.reviver] - JSON reviver function
* @returns {Object|Error} JSON object or an error
*/
function readSync( path, options ) {
	var file,
		opts;

	if (
		arguments.length > 1 &&
		!isString( options )
	) {
		opts = options;
	} else {
		opts = {};
	}
	opts.encoding = 'utf8';
	file = readFile.sync( path, opts );
	if ( file instanceof Error ) {
		return file;
	}
	return parse( file, opts.reviver );
} // end FUNCTION readSync()


// EXPORTS //

module.exports = readSync;
