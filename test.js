const Web3 = require('web3');

const options = {
    // Enable auto reconnection
    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
    }
  };

const web3 = new Web3('wss://wss.testnet.moonbeam.network', options);

web3.eth.subscribe('logs', {
    address: '0xcd1367411645409Acecc1cf2b354E484374FAc5F',
    topics: []
}, (error, result) => {
    if (error)
        console.error(error);
})
    .on("connected", function (subscriptionId) {
        console.log(subscriptionId);
    })
    .on("data", function (log) {
        console.log(log);
    });