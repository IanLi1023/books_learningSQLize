const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// Declareds a class called books and inherits all the prototypes methods that are in the model class from sequalize
class Book extends Model { }

// Creates table using JS
Book.init(
    // Declares columns for this table
    // By default sequelize creates the id column for us
    {
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        isbn: {
            type: DataTypes.STRING,
        },
        pages: {
            type: DataTypes.INTEGER,
        },
        edition: {
            type: DataTypes.INTEGER,
        },
        isPaperback: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        // Which db connection should this table be created in
        sequelize,
        // By default sequelize will create 2 columns for our table (created_at & updated_at)
        timestamps: false,
        modelName: 'book',
    }
);

module.exports = Book;