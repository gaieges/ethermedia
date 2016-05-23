contract EtherMedia
{
	struct MediaEntry {
		address submitter;
		string title;
		string description;
		string class;   // video, audio, photos, images, other
		string link;    // perhaps make this more future-proof
		uint score;
	}

	mapping (address => uint) reputation;
	mapping (address => bool) admins;
	
	mapping (uint => MediaEntry) entries;
	uint nextEntry;
	
	event newMediaAdded(uint entryId);
	
	
	function EtherMedia() {
		nextEntry = 0;
		admins[msg.sender] = true;
	}
	
	function addEntry(string title, 
					  string description, 
					  string class, 
					  string link) 
					returns (uint newEntryId) {
		
		MediaEntry e = entries[nextEntry];
		
		e.title = title;
		e.description = description;
		e.class = class;
		e.link = link;
		e.score = 0;
		e.submitter = msg.sender;
		
		newMediaAdded(nextEntry);
		
		return nextEntry++;
	}
	
	function addAdmin(address newAdmin) {
		if( ! admins[msg.sender] ) return;
		admins[msg.sender] = true;
	}
	
	function upvoteEntry(uint entryId) {
		// Check to see user hasnt voted yet
		// +1 to entry
		// +1 to reputation of voter
	}
	
	function getEntryLink(uint entryId) constant returns (string link) {
		return entries[entryId].link;
	}
	
	function updateEntry() {
		// do we even want to allow this?
	}
	
	// additional functions around admin functionality?
	// add in token aspect
	
}

