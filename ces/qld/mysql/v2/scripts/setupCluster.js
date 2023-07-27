var dbPass = "P@ssw0rd"
var clusterName = "ces_cluster"


try {
  print('[INFO] Get cluster...\n');
  shell.connect('root@mysql-server-1:3306', dbPass)

  var cluster = dba.getCluster(clusterName)  
  cluster.status()

} catch(e) {
  print('\nCan not get cluster status.\n\[Error] ' + e.message + '\n');
}

try {
  print('[INFO] Cluster is rebooting...\n');
  shell.connect('root@mysql-server-1:3306', dbPass)

  cluster.forceQuorumUsingPartitionOf("mysql-server-1:3306")

  //dba.rebootClusterFromCompleteOutage(clusterName, { force: true, primary: "mysql-server-1:3306", rejoinInstances: ["mysql-server-2:3306","mysql-server-3:3306"] });
  var cluster = dba.rebootClusterFromCompleteOutage(clusterName);
  print('[INFO] Cluster is rebooted\n');

  

} catch(e) {
  print('\nThe InnoDB cluster could not be reboot.\n\[Error] ' + e.message + '\n');
}

try 
{
    print('Setting up InnoDB cluster...\n');

    shell.connect('root@mysql-server-1:3306', dbPass)
    var cluster = dba.createCluster(clusterName);

    print('Adding instances to the cluster.');
    
    cluster.addInstance({user: "root", host: "mysql-server-2", password: dbPass})
    print('mysql-server-2 added to cluster');

    cluster.addInstance({user: "root", host: "mysql-server-3", password: dbPass})
    print('mysql-server-3 added to cluster');
    
    print('.\nInstances successfully added to the cluster.');
    print('\nInnoDB cluster deployed successfully.\n');

} catch(e) {

  print('\nThe InnoDB cluster could not be created.\n\n[Error] ' + e.message + '\n');

}
