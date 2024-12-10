// const { Sequelize } = require('sequelize');

// class DatabaseService {
// 	static instance = null;

// 	constructor(databaseFilePath) {
// 		// Checking for Singleton (to make sure there's only one instance)
// 		if (DatabaseService.instance) {
// 			return DatabaseService.instance;
// 		}

// 		// DB initialization
// 		this.sequelize = new Sequelize({
// 			dialect: 'sqlite',
// 			storage: databaseFilePath,
// 			logging: false
// 		});

// 		this.models = {};

// 		DatabaseService.instance = this;
// 	}

// 	// For accessing the sequelize instance (to be used by other members)
// 	getSequelize() {
// 		return this.sequelize;
// 	}

// 	// To connect to the DB
// 	async connect() {
// 		try {
// 			await this.sequelize.authenticate();
// 			console.log('Database connected successfully!');
// 		} catch (err) {
// 			console.error('Database connection failed:', err);
// 			throw err;
// 		}
// 	}

// 	defineModel(name, schema) {
// 		const model = this.sequelize.define(name, schema);
// 		this.models[name] = model;
// 		return model;
// 	}

// 	// To synchronize all data models
// 	async syncModels() {
// 		try {
// 			await this.sequelize.sync({ alter: true });
// 			console.log('Database models synced!');
// 		} catch (err) {
// 			console.error('Model synchronization failed:', err);
// 			throw err;
// 		}
// 	}

// 	// Generalized CRUD operations for other features/members to use
// 	async set(modelName, data) {
// 		const model = this.models[modelName];
// 		if (!model) throw new Error(`Model "${modelName}" not found.`);
// 		return await model.create(data);
// 	}

// 	async get(modelName, query = {}) {
// 		const model = this.models[modelName];
// 		if (!model) throw new Error(`Model "${modelName}" not found.`);
// 		return await model.findAll({ where: query });
// 	}

// 	async update(modelName, query, updates) {
// 		const model = this.models[modelName];
// 		if (!model) throw new Error(`Model "${modelName}" not found.`);
// 		const records = await model.update(updates, { where: query });
// 		return records;
// 	}

// 	async delete(modelName, query) {
// 		const model = this.models[modelName];
// 		if (!model) throw new Error(`Model "${modelName}" not found.`);
// 		return await model.destroy({ where: query });
// 	}
// }

// module.exports = DatabaseService;

const { Sequelize } = require('sequelize');

class DatabaseService {
  static instance = null;

  constructor(databaseFilePath, logging = false) {
    if (DatabaseService.instance) {
		return DatabaseService.instance;
    }

    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: databaseFilePath,
      logging
    });

    this.models = {};

    DatabaseService.instance = this;
  }

  static getInstance(databaseFilePath, logging = false) {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService(databaseFilePath, logging);
    }
    return DatabaseService.instance;
  }

  getSequelize() {
    return this.sequelize;
  }

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log('Database connected successfully!');
    } catch (err) {
      console.error('Database connection failed:', err);
      throw err;
    }
  }

  defineModel(name, schema, options = {}) {
    const model = this.sequelize.define(name, schema, options);
    this.models[name] = model;
    return model;
  }

  async syncModels() {
    try {
      await this.sequelize.sync({ alter: true });
      console.log('Database models synced!');
    } catch (err) {
      console.error('Model synchronization failed:', err);
      throw err;
    }
  }

  async initialize(databaseFilePath, logging = false) {
    if (DatabaseService.instance) {
      return DatabaseService.instance;
    }

    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: databaseFilePath,
      logging
    });

    this.models = {};

    try {
      await this.connect();
      await this.syncModels();
      DatabaseService.instance = this;
      console.log('DatabaseService initialized successfully.');
    } catch (error) {
      console.error('Failed to initialize DatabaseService:', error);
      throw error;
    }

    return this;
  }

  async set(modelName, data) {
    const model = this.models[modelName];
    if (!model) throw new Error(`Model "${modelName}" not found.`);
    try {
      return await model.create(data);
    } catch (error) {
      console.error(`Error creating entry in "${modelName}":`, error);
      throw error;
    }
  }

  async get(modelName, query = {}) {
    const model = this.models[modelName];
    if (!model) throw new Error(`Model "${modelName}" not found.`);
    return await model.findAll({ where: query });
  }

  async update(modelName, query, updates) {
    const model = this.models[modelName];
    if (!model) throw new Error(`Model "${modelName}" not found.`);
    await model.update(updates, { where: query });
    return await model.findAll({ where: query });
  }

  async delete(modelName, query) {
    const model = this.models[modelName];
    if (!model) throw new Error(`Model "${modelName}" not found.`);
    return await model.destroy({ where: query });
  }

  async close() {
    try {
      await this.sequelize.close();
      console.log('Database connection closed.');
      DatabaseService.instance = null;
    } catch (error) {
      console.error('Error closing the database connection:', error);
      throw error;
    }
  }
}

module.exports = DatabaseService;

