/**
 * Created by AoSnow on 2017/5/3.
 */
"use strict";

module.exports = function( a, b )
{
	let _s = 0;

	for( let i = a; i <= b; i++ )
	{
		_s += i;
	}

	return _s;
};
