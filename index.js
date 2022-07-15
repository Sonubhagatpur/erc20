const ABI = [{ "constant": false, "inputs": [{ "name": "_end", "type": "uint256" }], "name": "endSale", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_stime", "type": "uint256" }], "name": "startSale", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_mini", "type": "uint256" }, { "name": "_max", "type": "uint256" }], "name": "setMiniMax", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "sender", "type": "address" }, { "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_rate", "type": "uint256" }], "name": "setRate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "value", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "buyToken", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "recipient", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "feeReceiver", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "owner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "data", "outputs": [{ "name": "amount", "type": "uint256" }, { "name": "value", "type": "uint256" }, { "name": "time", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "totalSupply", "type": "uint256" }, { "name": "_feeReceiver", "type": "address" }], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }]
const ADDRESS = "0x87cE58400af2C5dbf7b8E48649da7ef863213d48";
const web3 = new Web3(window.ethereum);
const web = new web3.eth.Contract(ABI, ADDRESS);



async function connect() {
    if (typeof window.ethereum !== "undefined") {
        ethereum.request({ method: "eth_requestAccounts" });

        // Add event listeners for chain change and accounts change
        ethereum.on('accountsChanged', listener => {
            connect();
            checkBalance();
        });

        ethereum.on('chainChanged', listener => {
            connect();
            checkBalance();
        });


    }


   // console.log(await web3.eth.getAccounts());

    // web3.eth.getBalance("0x1ad9f0Ad2f37519041f86594e8834fc2cC849984")
    // document.getElementById('title').innerHTML = await web3.eth.getAccounts();



    // const nam1 = await web.methods.name().call();
    // console.log(nam1);


    // document.getElementById('name').innerHTML = nam1;

    // const nam2 = await web.methods.symbol().call();
    // console.log(nam2);
    // document.getElementById('symbol').innerHTML = nam2;


    // const nam3 = await web.methods.decimals().call();
    // console.log(nam3, "num3");

    // document.getElementById('decimals').innerHTML = nam3;

    // const nam4 = await web.methods.totalSupply().call()
    // document.getElementById('totalSupply').innerHTML = nam4;



    // const add = await web.methods.owner().call();
    // console.log(add);
    // document.getElementById('owner').innerHTML = add;



}


document.getElementById("conve").addEventListener('keyup', convert);
async function convert() {

    //const token = await methods.value((Value*1e18)/1e15)
    let value = (document.getElementById("Valuenew").value);
    console.log(value)

    const nam6 = await web.methods.getRate().call()
    console.log(nam6)
    console.log(parseFloat((value * 1e18) / nam6))

    document.getElementById('Value').value = parseFloat((value * 1e18) / nam6);


}




async function checkBalance() {
    //console.log('checkBalance')
    // const web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.getAccounts();


    //console.log(web3);
    let balance = await window.ethereum.request({
        method: "eth_getBalance",
        "params": [accounts[0], "latest"]
    });
    document.getElementById('balance').innerHTML = parseInt(balance) / 10 ** 18;
}


async function buyToken() {

    const Value = (document.getElementById('Valuenew').value);
    const Address = await web3.eth.getAccounts();
    console.log(Address)
   if (Address.length == 0){
   alert("please connect your wallet");
}
    

    //web3.utils.fromWei(Value, ether);


    const weiValue = Web3.utils.toWei(Value, 'ether');

    try {
        //myContract.methods.myMethod([param1[, param2[, ...]]]).estimateGas(options[, callback])
        await web.methods.buyToken().estimateGas({
            from: Address[0], value: weiValue
        })
        const buy = await web.methods.buyToken().send({
            from: Address[0], value: weiValue
        })
        console.log(buy)
    }
    catch (error) {
        console.log(error);
    }
   

}
