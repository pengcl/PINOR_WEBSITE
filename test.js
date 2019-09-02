db.createUser({'user': 'admin','pwd': 'Pengcl19821025', 'roles': [{role: 'clusterAdmin', db: 'admin'}, {role: 'readAnyDatabase', db: 'admin'}, 'readWrite']}, {w: 'majority', wtimeout: 5000});
