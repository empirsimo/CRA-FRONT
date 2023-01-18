export const environmentDev = {
    production: false,
    BASE_URL: 'http://localhost:3000',
    CONTRAT_BASE_URL: 'http://localhost:3000/contrat/',
    USERS_BASE_URL: 'http://localhost:3000/users/',
    CONGE_BASE_URL: 'http://localhost:3000/conge/',
    SERVICE_BASE_URL: 'http://localhost:3000/service/',

    USERS: {
      GET_ALL_USERS: 'usersall',
      GET_USERS: 'view',
      UPDATE_USERS: 'update/',
      DELETE_USERS: 'delete',
      SEARCH_USERS: 'search',
},

    CONTRAT: {
        GET_ALL_CONTRAT: 'list',
        GET_CONTRAT: 'view',
        ADD_CONTRAT: 'add',
        UPDATE_CONTRAT: 'update/',
        DELETE_CONTRAT: 'delete',
        SEARCH_CONTRAT: 'search',
  },

    CONGE: {
        GET_ALL_CONGE: 'list',
        GET_CONGE: 'view',
        ADD_CONGE: 'add',
        UPDATE_CONGE: 'update/',
        DELETE_CONGE: 'delete',
        SEARCH_CONGE: 'search',
},

    SERVICE: {
        GET_ALL_SERVICE: 'list',
        GET_SERVICE: 'view',
        ADD_SERVICE: 'add',
        UPDATE_SERVICE: 'update/',
        DELETE_SERVICE: 'delete',
        SEARCH_SERVICE: 'search',
}


}