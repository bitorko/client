const configForDevelopment = {
  providers: {
    google: {
      clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com'
    },
    facebook: {
      clientId: '1452782111708498'
    }
  },
  baseUrl: 'http://localhost:3000/',
  tokenName: 'token',
  tokenPrefix: ''
};

const configForProduction = {
  providers: {
    google: {
      clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
    },
    facebook: {
      clientId: '1653908914832509'
    }
  }
};

let config;
if (window.location.hostname === 'localhost') {
  config = configForDevelopment;
} else {
  config = configForProduction;
}

export default config;
