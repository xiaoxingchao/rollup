define(['require'], function (require) { 'use strict';

	new Promise(function (resolve, reject) { require(['./generated-dynamic2.js'], resolve, reject) }).then(result => console.log(result));
	new Promise(function (resolve, reject) { require(['./generated-dynamic.js'], resolve, reject) }).then(result => console.log(result));

});
