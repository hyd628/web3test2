const Web3 = require('web3')




//const web3 = new Web3("http://127.0.0.1:9933")
//const web3ws = new Web3("ws://127.0.0.1:9944")


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

web3.eth.subscribe('pendingTransactions', (error, result) =>{
    if (!error)
        console.log(result);
})
    .on("data", function(transaction){
        console.log(transaction);
});

