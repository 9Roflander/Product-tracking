// Адрес контракта (замените на фактический адрес после развертывания)
const contractAddress = '0x80Bf55c4aD22cB647Fc41175a570F0E8380259E4';

// Web3.js объект для взаимодействия с контрактом
const web3 = new Web3('http://localhost:7545'); // Замените на адрес вашего локального узла Ganache



// Аби вашего контракта (замените на фактическое ABI)
const contractAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "CargoReceiptConfirmed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "ContractCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "newStatus",
				"type": "string"
			}
		],
		"name": "DeliveryStatusUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentMade",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "buyerContracts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "confirmReceipt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contracts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shipper",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "origin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "destination",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "expectedDeliveryDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paymentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paymentDueDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isDelivered",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isPaid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "buyer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "item",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "origin",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "destination",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "expectedDeliveryDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paymentAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paymentDueDate",
						"type": "uint256"
					}
				],
				"internalType": "struct CargoTrackingContract.ContractParams",
				"name": "params",
				"type": "tuple"
			}
		],
		"name": "createContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getContractDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "shipper",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "buyer",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "item",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "origin",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "destination",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "expectedDeliveryDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paymentAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paymentDueDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isDelivered",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isPaid",
						"type": "bool"
					}
				],
				"internalType": "struct CargoContractBase.ContractDetails",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "makePayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shipperContracts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newStatus",
				"type": "string"
			}
		],
		"name": "updateDeliveryStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// Создание объекта контракта
const cargoContract = new web3.eth.Contract(contractAbi, contractAddress);

// Функция для создания контракта
function createContract() {
  const id = document.getElementById('id').value;
  const buyer = document.getElementById('buyer').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const deliveryDate = new Date(document.getElementById('deliveryDate').value).getTime();
  const paymentAmount = document.getElementById('paymentAmount').value;
  const paymentDueDate = new Date(document.getElementById('paymentDueDate').value).getTime();

  // Отправка транзакции создания контракта
  cargoContract.methods.createContract({
    id,
    buyer,
    item,
    quantity,
    origin,
    destination,
    expectedDeliveryDate: deliveryDate,
    paymentAmount,
    paymentDueDate,
  }).send({ from: accountAddress })
    .on('transactionHash', function (hash) {
      console.log('Transaction Hash:', hash);
    })
    .on('receipt', function (receipt) {
      console.log('Transaction Receipt:', receipt);
      alert('Contract created successfully!');
    })
    .on('error', function (error) {
      console.error('Error:', error);
      alert('Error creating contract!');
    });
}
  
  // Функция для отображения деталей контракта на странице
function displayContractDetails(contractDetails) {
    const container = document.querySelector('.container');
    const idElement = document.createElement('p');
    idElement.textContent = 'Contract ID: ' + contractDetails.id;
  
    const shipperElement = document.createElement('p');
    shipperElement.textContent = 'Shipper Address: ' + contractDetails.shipper;
  
    const buyerElement = document.createElement('p');
    buyerElement.textContent = 'Buyer Address: ' + contractDetails.buyer;
  
    container.innerHTML = '';
  
    container.appendChild(idElement);
    container.appendChild(shipperElement);
    container.appendChild(buyerElement);
  
}


// Function to display contract details on the page
function displayContractDetails(contractDetails) {
    const container = document.querySelector('.container');
  
    // Create elements for displaying payment details
    const paymentElement = document.createElement('p');
    paymentElement.textContent = 'Payment Amount: ' + contractDetails.paymentAmount;
  
    // Clear the container before adding new data
    container.innerHTML = '';
  
    // Add payment element to the container
    container.appendChild(paymentElement);
  

  }
  
// Function to get contract details by ID
async function getContractDetails(contractId) {
    try {
      const contractDetails = await cargoContract.methods.getContractDetails(contractId).call();
      displayContractDetails(contractDetails);
    } catch (error) {
      console.error('Error getting contract details:', error);
      // Handle error (e.g., display an error message to the user)
    }
  }
  




// Функция для выполнения оплаты
function makePayment() {
    const amount = document.getElementById('amount').value;

    // Вызов функции makePayment из вашего контракта
    cargoContract.methods.makePayment(contractId).send({ from: accountAddress, value: web3.utils.toWei(amount, 'ether') })
        .on('transactionHash', function(hash){
            console.log('Transaction Hash:', hash);
        })
        .on('receipt', function(receipt){
            console.log('Transaction Receipt:', receipt);
            alert('Payment successful!');
        })
        .on('error', function(error) {
            console.error('Error:', error);
            alert('Error making payment!');
        });
}

// Функция для возврата назад
function goBack() {
    window.history.back();
}

// Вызов функции getContractDetails при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Можно добавить дополнительные действия по необходимости
});
