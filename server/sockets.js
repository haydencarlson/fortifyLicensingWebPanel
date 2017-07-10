const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host : 'localhost',
    user : 'hayden',
    password : 'a',
    database : 'ecobind',
    port: 5432,
    ssl: true
  }
});


module.exports = function(io) {
  io.on('connection', (socket) => {
  	const emitAction = (type, payload) => socket.emit('action', { type, payload });
		const broadcastAction = (type, payload) => io.emit('action', { type, payload });
    console.log(`Socket connected: ${socket.id}`);

    socket.on('action', (action) => {
      switch (action.type) {
        case 'socket/TYPE_NEW_TAB':
        	knex('mainNavTabs')
        		.insert({tabName: action.payload})
        		.then((result) => {
        			knex.select("tabName")
        				.from("mainNavTabs")
        				.then((result) => {
        					emitAction('TYPE_GET_TABS', result);
        				});
        		});
        break;

        case 'socket/TYPE_NEW_SUB_TAB':
          knex.select('id')
          .from('mainNavTabs')
          .where({tabName: action.payload.currentTab})
          .then((mainNavTabId) => {
            knex('subNavTabs')
        		.insert({tabName: action.payload.newTabName, mainNavTab_id: mainNavTabId[0].id})
            .returning('mainNavTab_id')
        		.then((mainNavTabId) => {
        			knex.select("tabName")
        			.from("subNavTabs")
              .where({mainNavTab_id: mainNavTabId[0]})
        			.then((result) => {
                console.log("here", result);
        			 emitAction('TYPE_GET_SUB_TABS', result);
        			});
        		});
          });
        break;

        case 'socket/TYPE_GET_TABS':
        	knex.select("tabName")
        		.from("mainNavTabs")
        		.then((result) => {
        			emitAction('TYPE_GET_TABS', result);
        		});
        break;

        case 'socket/TYPE_GET_SUB_TABS':
          knex.select('id')
          .from('mainNavTabs')
          .where({tabName: action.payload})
          .then((mainNavTabId) => {
            console.log(mainNavTabId[0]);
            knex.select("tabName", "id")
            .from("subNavTabs")
            .where({mainNavTab_id: mainNavTabId[0].id})
            .then((result) => {
             emitAction('TYPE_GET_SUB_TABS', result);
           });
          });
        break;

        case 'socket/TYPE_GET_DOCUMENTS':
          knex.select('id')
          .from('subNavTabs')
          .where({tabName: action.payload})
          .then((id) => {
            knex.select("*")
            .from("documents")
            .where({subNavTabs_id: id[0].id})
            .then((result) => {
              emitAction('TYPE_GET_DOCUMENTS', result);
            });
          });
        break;
        case 'socket/TYPE_DELETE_SUB_TAB':
        console.log("payload",action.payload);
          knex('subNavTabs')
            .where({tabName: action.payload.subTab})
            .del()
            .then((result) => {
              knex.select('id')
                .from('mainNavTabs')
                .where({tabName: action.payload.mainTab})
                  .then((mainNavTabId) => {
              console.log(mainNavTabId[0]);
              knex.select("tabName", "id")
                .from("subNavTabs")
                .where({mainNavTab_id: mainNavTabId[0].id})
                .then((result) => {
              emitAction('TYPE_GET_SUB_TABS', result);
           });
          });
            });
        break;
        case 'socket/TYPE_DELETE_TAB':
          knex('mainNavTabs')
            .where({tabName: action.payload})
            .del()
            .then((result) => {
              knex.select("tabName")
                .from("mainNavTabs")
                .then((result) => {
              emitAction('TYPE_GET_TABS', result);
              });
            });
        break;
      }
    });
  });
};