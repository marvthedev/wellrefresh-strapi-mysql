module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '157.230.91.34'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'wellrefresh_wp'),
        username: env('DATABASE_USERNAME', 'wellrefresh_admin'),
        password: env('DATABASE_PASSWORD', 'Bincta69'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
