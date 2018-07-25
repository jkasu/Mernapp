module.exports = {
	development : {
		app : {
			name : 'CarPool',
			port : process.env.PORT || 3000,
			mongoUrl: 'mongodb://jyothsna:jyo123@ds147011.mlab.com:47011/car_pool'
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint : 'http://gmail.com',
				issuer : 'passport-saml'			}
		},
		googleAuth : {
	        clientID      : '652660183776-3flm1st7t9c0bu0epktro3eruv472kte.apps.googleusercontent.com',
	        clientSecret  : '0NaHD3Oyp1Xak9CRihsLBJSo',
	        callbackURL   : 'http://localhost:3000/auth/google/callback'
	    }
	},

	production : {
		app : {
			name : 'BC-CarPool',
			port : process.env.PORT || 3000,
			mongoUrl: process.env.MONGOLAB_URI ||'mongodb://localhost:27017/carpool'
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				//need to add entrypoint email ...http://www.ortusconsulting.co/SSO/saml
				entryPoint : 'http://gmail.com',
				issuer : 'passport-saml'			}
		},
		googleAuth : {
			clientID      : '652660183776-3flm1st7t9c0bu0epktro3eruv472kte.apps.googleusercontent.com',
	        clientSecret  : '0NaHD3Oyp1Xak9CRihsLBJSo',
	        callbackURL   : 'https://herokuapp.com/auth/google/callback'
	    }
	}

}

