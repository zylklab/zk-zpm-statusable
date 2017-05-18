contentType = "zpm:zpmDoc";

var documentName = url.templateArgs.documentName;
var document     = companyhome.createNode(documentName, contentType);

if (document != null){
	model.document = document;
	model.msg = "Created OK!";
} else {
	model.msg = "Failed to create document!";
}        
