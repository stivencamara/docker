
var dbPass = "tj17txxk3FUC"
var clusterName = "cesCluster"
var nodes = ["db02-ces.azores.gov.pt", "db03-ces.azores.gov.pt"]

try {

    print('Setting up InnoDB cluster V2...\n');
    shell.connect('root@db01-ces.azores.gov.pt:3306', dbPass)

    try {
        print("Checkin server 1 instance...\n");
        print(dba.checkInstanceConfiguration('root@db01-ces.azores.gov.pt:3306', { password: dbPass }));
        print("Server 1 checked: \n");
    } catch (e) {
        print('\nError checking instance of the server 1...Error: ' + e.message + '\n');
    }

    try {
        print("Checkin server 2 instance...\n");
        print(dba.checkInstanceConfiguration('root@db02-ces.azores.gov.pt:3306', { password: dbPass }));
        print("Server 2 checked: \n");
    } catch (e) {
        print('\nError checking instance of the server 2...Error: ' + e.message + '\n');
    }

    try {
        print("Checkin server 3 instance...\n");
        print(dba.checkInstanceConfiguration('root@db03-ces.azores.gov.pt:3306', { password: dbPass }));
        print("Server 3 checked: \n");
    } catch (e) {
        print('\nError checking instance of the server 3...Error: ' + e.message + '\n');
    }

   

    var cluster = null;
    try {
        cluster = dba.getCluster(clusterName);
    } catch (e) {
        print('\nError getting cluster, gonna try to create!\n\nError: ' + e.message + '\n');
    }
    if (cluster == null) {
        print('\nCluster does not exist, creating one now...\n');
        cluster = dba.createCluster(clusterName);
        if (cluster != null) {
            print('\nCluster created!\n');
        }
    }
    else {
        print("cluster already existed!\n");
        print(cluster.status());


    }



    print('\nAdding instances to the cluster...\n');
    for (node of nodes) {
        print('... adding ' + node + '\n');
        try {
            cluster.addInstance({ user: "root", host: node, password: dbPass }, { label: node, recoveryMethod: "Clone", autoRejoinTries: 10 })
        } catch (e) {
            print('\nError adding to the!\n\nError: ' + e.message + '\n');
        }
        
    }

    
    print('Instances successfully added to the cluster.\n');
    print('InnoDB cluster deployed successfully.\n');
  

    print('\nCluster Status: \n');
    print(cluster.status());
    print('\n');

    print('\nCluster Describe\n');
    print(cluster.describe());
    print('\n');

} catch (e) {
    print('\nThe InnoDB cluster could not be created.\n\nError: ' + e.message + '\n');
}