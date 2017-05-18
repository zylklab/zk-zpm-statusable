# Basic metadata to deal with document lifecycle status

This project is a simple example for using a custom metadata property for dealing the status in the document lifecycle. It provides an easy visualization of statusable properties (status, priority and percentage) in Alfresco document library via custom metadata templates and indicators, which may be improved with the use of custom facets in Alfresco search, virtual folders for custom Alfresco queries or custom dashlets.

This simple aproximation is document-centric, and not related to a workflow task, although it may be used together. It defines a document property (zpm:mystatus), which is by default, one of the next values (Not started|Draft|Approved|Denied), and may be easily customized for each case. This useful property may be used as a facet when working with documents, improving search.

## Packaging

Just generate maven packages. Go into the directory that you unzipped, or cloned via git:

    $ git clone https://github.com/zylklab/zk-zpm-statusable
    $ cd zk-zpm-statusable
    $ cd zk-zpm-statusable-repo
    $ mvn clean && mvn package -DskipTests=true
    $ cd ..
    $ cd zk-zpm-statusable-share
    $ mvn clean && mvn package -DskipTests=true

The generated AMPs are located in corresponding target directories. 

## Installation

 - Just copy the corresponding AMP into $ALF_HOME/amps and $ALF_HOME/amps_share, stop Alfresco service, apply AMPs script ($ALF_HOME/bin/apply_amps.sh) and start Alfresco service.

## Using

Once installed, you may apply directly zpm:statusable aspect to documents, or via content rule. You  may optionally be interested in adding zpm:mystatus as a facet in Alfresco Search Manager for obtaining the number of working documents with status aspect, for example via ASPECT:"zpm:statusable" search. Also, it is very useful to control the status of your documents in a Site project with a Smart Folder getting custom filters.

### Screenshots 
In document library:

![Statusable DocLib](screenshots/status-document-library.png)

Via smart folders:

![Statusable Smart](screenshots/status-smart.png)

## TODO 
 - Program behaviours depending on status
 - Audit status changes

## Tested

It should work in Alfresco 4.x and above
