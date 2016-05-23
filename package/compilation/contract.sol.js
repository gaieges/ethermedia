/*
Generated by Mix
Sun May 22 22:46:36 2016 GMT-0500
*/

var EtherMedia = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"entryId\",\"type\":\"uint256\"}],\"name\":\"upvoteEntry\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"class\",\"type\":\"string\"},{\"name\":\"link\",\"type\":\"string\"}],\"name\":\"addEntry\",\"outputs\":[{\"name\":\"newEntryId\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"updateEntry\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"entries\",\"outputs\":[{\"name\":\"submitter\",\"type\":\"address\"},{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"description\",\"type\":\"string\"},{\"name\":\"class\",\"type\":\"string\"},{\"name\":\"link\",\"type\":\"string\"},{\"name\":\"score\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"reputation\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"entryId\",\"type\":\"uint256\"}],\"name\":\"getEntryLink\",\"outputs\":[{\"name\":\"link\",\"type\":\"string\"}],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"entryId\",\"type\":\"uint256\"}],\"name\":\"newMediaAdded\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b60006003600050819055506001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b610a85806100626000396000f36060604052361561007f576000357c01000000000000000000000000000000000000000000000000000000009004806336b2e5bf146100815780635d273a741461009957806370480275146101d8578063b0506e9a146101f0578063b30906d4146101ff578063b9f794511461046c578063d62bbd26146104985761007f565b005b6100976004808035906020019091905050610a81565b005b6101c26004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061051c565b6040518082815260200191505060405180910390f35b6101ee6004808035906020019091905050610898565b005b6101fd6004805050610895565b005b6102156004808035906020019091905050610a17565b604051808773ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001806020018060200186815260200185810385528a8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b505085810384528981815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561034f5780601f106103245761010080835404028352916020019161034f565b820191906000526020600020905b81548152906001019060200180831161033257829003601f168201915b50508581038352888181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103d25780601f106103a7576101008083540402835291602001916103d2565b820191906000526020600020905b8154815290600101906020018083116103b557829003601f168201915b50508581038252878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b50509a505050505050505050505060405180910390f35b61048260048080359060200190919050506109fc565b6040518082815260200191505060405180910390f35b6104ae6004808035906020019091905050610924565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561050e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60006000600260005060006003600050548152602001908152602001600020600050905085816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061059157805160ff19168380011785556105c2565b828001600101855582156105c2579182015b828111156105c15782518260005055916020019190600101906105a3565b5b5090506105ed91906105cf565b808211156105e957600081815060009055506001016105cf565b5090565b505084816002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061064057805160ff1916838001178555610671565b82800160010185558215610671579182015b82811115610670578251826000505591602001919060010190610652565b5b50905061069c919061067e565b80821115610698576000818150600090555060010161067e565b5090565b505083816003016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106106ef57805160ff1916838001178555610720565b82800160010185558215610720579182015b8281111561071f578251826000505591602001919060010190610701565b5b50905061074b919061072d565b80821115610747576000818150600090555060010161072d565b5090565b505082816004016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061079e57805160ff19168380011785556107cf565b828001600101855582156107cf579182015b828111156107ce5782518260005055916020019190600101906107b0565b5b5090506107fa91906107dc565b808211156107f657600081815060009055506001016107dc565b5090565b505060008160050160005081905550338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f2cc6ea1686f60c1ad8745bd27fc6dabb9350a7cb6c235dd2fd81f772869ed0b46003600050546040518082815260200191505060405180910390a160036000818150548092919060010191905055915061088c565b50949350505050565b5b565b600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156108dd57610921565b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b6020604051908101604052806000815260200150600260005060008381526020019081526020016000206000506004016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109eb5780601f106109c0576101008083540402835291602001916109eb565b820191906000526020600020905b8154815290600101906020018083116109ce57829003601f168201915b505050505090506109f7565b919050565b60006000506020528060005260406000206000915090505481565b60026000506020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101600050908060020160005090806003016000509080600401600050908060050160005054905086565b5b5056",
	"name": "EtherMedia"
}

