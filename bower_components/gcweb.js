const IP_ADDRESS = "http://163.152.161.119:12321";
   
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(IP_ADDRESS));
var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase).toNumber();
var giftcardContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"originalValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isTransferable","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"}],"name":"send","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destory","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"codition","outputs":[{"name":"ageMin","type":"uint8"},{"name":"ageMax","type":"uint8"},{"name":"isForMale","type":"bool"},{"name":"isForFemale","type":"bool"},{"name":"isForAll","type":"bool"},{"name":"shopID","type":"address"},{"name":"hourMin","type":"uint8"},{"name":"hourMax","type":"uint8"},{"name":"dateMin","type":"uint256"},{"name":"dateMax","type":"uint256"},{"name":"dateExpiary","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"resetCondition","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"test","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_input","type":"uint256"}],"name":"changeValue","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_minter","type":"address"},{"name":"_value","type":"uint256"},{"name":"_isTransferable","type":"bool"}],"payable":false,"type":"constructor"}]);
	

window.onload = function() {
	document.getElementById('ip').innerHTML = 'IP: ' + IP_ADDRESS;
	document.getElementById('coinbase').innerHTML = 'Coinbase: ' + coinbase;
	document.getElementById('balance').innerHTML = 'Balance: ' + balance;
	document.getElementById('newContract').innerHTML = "New contract's address: " + "None"
	document.getElementById('minter').innerHTML = 'Minter: ';
	document.getElementById('owner').innerHTML = 'Owner: ';
	document.getElementById('originalValue').innerHTML = 'Original Value: ';
	document.getElementById('currentValue').innerHTML = 'Current Value: ';
	document.getElementById('transferable').innerHTML = 'Transferable: ';
	web3.eth.filter('latest').watch(function() {
		balance = web3.eth.getBalance(coinbase).toNumber();
		document.getElementById('balance').innerText = 'Balance: ' + balance;
	});
};


function createContract() {
	web3.eth.defaultAccount = web3.eth.coinbase;
	var defaultAccount = web3.eth.defaultAccount;
	var _value = document.getElementById('value').value ;
	var _isTransferable = document.getElementById('isTransferable').checked ;
	var _pw = document.getElementById('pw').value;
	if (!web3.personal.unlockAccount(web3.eth.coinbase, _pw)) {
		alert('Invalid password');
		return;
	}
	//submit to network
	var giftcard = giftcardContract.new(
		defaultAccount,
		_value,
		_isTransferable,
		{
		 from: web3.eth.accounts[0], 
		 data: '0x6060604052600060025560006003556001600460006101000a81548160ff02191690831515021790555061016060405190810160405280600060ff16815260200160ff60ff1681526020016001151581526020016001151581526020016001151581526020013073ffffffffffffffffffffffffffffffffffffffff168152602001600060ff168152602001601860ff168152602001630133c70581526020016305f5e0ff81526020016305f5e0ff815250600560008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff16021790555060408201518160000160026101000a81548160ff02191690831515021790555060608201518160000160036101000a81548160ff02191690831515021790555060808201518160000160046101000a81548160ff02191690831515021790555060a08201518160000160056101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160000160196101000a81548160ff021916908360ff16021790555060e082015181600001601a6101000a81548160ff021916908360ff1602179055506101008201518160010155610120820151816002015561014082015181600301555050341561020957fe5b604051606080610df5833981016040528080519060200190919080519060200190919080519060200190919050505b82600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055508160038190555080600460006101000a81548160ff0219169083151502179055505b5050505b610aff806102f66000396000f300606060405236156100ad576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063052aa7e1146100af57806307546172146100d55780632121dc75146101275780633e58c58c14610151578063698996f8146101875780636bdebcc9146101ad57806389ad1646146101bf5780638da5cb5b1461027b578063eaea53f9146102cd578063f8a8fd6d146102df578063f965e32e146102f1575bfe5b34156100b757fe5b6100bf610311565b6040518082815260200191505060405180910390f35b34156100dd57fe5b6100e5610317565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561012f57fe5b61013761033d565b604051808215151515815260200191505060405180910390f35b341561015957fe5b610185600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610350565b005b341561018f57fe5b610197610440565b6040518082815260200191505060405180910390f35b34156101b557fe5b6101bd610446565b005b34156101c757fe5b6101cf6104bd565b604051808c60ff1660ff1681526020018b60ff1660ff1681526020018a15151515815260200189151515158152602001881515151581526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018660ff1660ff1681526020018560ff1660ff1681526020018481526020018381526020018281526020019b50505050505050505050505060405180910390f35b341561028357fe5b61028b610580565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102d557fe5b6102dd6105a6565b005b34156102e757fe5b6102ef610809565b005b34156102f957fe5b61030f6004808035906020019091905050610a6c565b005b60025481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156103ac5761043d565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103e55761043d565b600460009054906101000a900460ff1615156104005761043d565b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1650505b50565b60035481565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156104a2576104bb565b3073ffffffffffffffffffffffffffffffffffffffff16ff5b565b60058060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff16908060000160039054906101000a900460ff16908060000160049054906101000a900460ff16908060000160059054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160199054906101000a900460ff169080600001601a9054906101000a900460ff1690806001015490806002015490806003015490508b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561062457610807565b61016060405190810160405280600060ff16815260200160ff60ff1681526020016001151581526020016001151581526020016001151581526020013073ffffffffffffffffffffffffffffffffffffffff168152602001600060ff168152602001601860ff168152602001630133c70581526020016305f5e0ff81526020016305f5e0ff815250600560008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff16021790555060408201518160000160026101000a81548160ff02191690831515021790555060608201518160000160036101000a81548160ff02191690831515021790555060808201518160000160046101000a81548160ff02191690831515021790555060a08201518160000160056101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160000160196101000a81548160ff021916908360ff16021790555060e082015181600001601a6101000a81548160ff021916908360ff1602179055506101008201518160010155610120820151816002015561014082015181600301559050506002546003819055505b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561088757610a6a565b61016060405190810160405280600060ff168152602001600a60ff1681526020016001151581526020016001151581526020016001151581526020013073ffffffffffffffffffffffffffffffffffffffff168152602001600060ff168152602001601860ff168152602001630130438481526020016305f5e0ff81526020016305f5e0ff815250600560008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160000160016101000a81548160ff021916908360ff16021790555060408201518160000160026101000a81548160ff02191690831515021790555060608201518160000160036101000a81548160ff02191690831515021790555060808201518160000160046101000a81548160ff02191690831515021790555060a08201518160000160056101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160000160196101000a81548160ff021916908360ff16021790555060e082015181600001601a6101000a81548160ff021916908360ff1602179055506101008201518160010155610120820151816002015561014082015181600301559050506002546003819055505b565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ac857610ad0565b806003819055505b505600a165627a7a7230582067403478a3957ea6ba8e0d01da3229297e53b4401d7f6aa8f94cdcb1f6abfaf60029', 
		 gas: '4700000'
		},
		function (e, contract){
			console.log(e, contract);
			if (typeof contract.address !== 'undefined') {
				console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
				alert('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
				 
				document.getElementById('newContract').innerHTML = "New contract's address: " + giftcard.address;
				document.getElementById('inquery').innerHTML = giftcard.address;
			}
		}
	);
	
}

function findContract() {
	var address = document.getElementById('inquery').value;
	if (web3.eth.getCode(address).length < 3) {
		alert('Invalid address');
		return;
	}
	
	var giftcard = giftcardContract.at(address);
	
	document.getElementById('minter').innerHTML = 'Minter: ' + giftcard.minter();
	document.getElementById('owner').innerHTML = 'Owner: ' + giftcard.owner();
	document.getElementById('originalValue').innerHTML = 'Original Value: ' + giftcard.originalValue();
	document.getElementById('currentValue').innerHTML = 'Current Value: ' + giftcard.currentValue();
	document.getElementById('transferable').innerHTML = 'Transferable: ' + giftcard.isTransferable();
	
}

function unlockTransfer() {
	var address = document.getElementById('txContract').value;	
	if (web3.eth.getCode(address).length < 3) {
		alert('Invalid address');
		return;
	}
	
	var giftcard = giftcardContract.at(address);
	var pw = document.getElementById('txPw').value;
	
	if (giftcard.owner() == coinbase) {
		if (web3.personal.unlockAccount(web3.eth.coinbase, pw))
			document.getElementById('transferButton').disabled = false;
		else
			alert('Invalid password');
	}
	else {
		alert('You are not the owner');
	}
}

function transfer() {
	var address = document.getElementById('txContract').value;
	if (web3.eth.getCode(address).length < 3) {
		alert('Invalid address');
		return;
	}
	
	var receiver = document.getElementById('txReceiver').value;
	var giftcard = giftcardContract.at(address);
	
	if (giftcard.owner() == receiver) {
		alert('You can not send to yourself');
	}
	
	else if (giftcard.isTransferable()){	
		giftcard.send(receiver);
		document.getElementById('transferButton').disabled = true;
		alert(receiver + " will be the onwer after several confirmation");
	}
	else {
		alert('This contract is not transferable');
	}
}