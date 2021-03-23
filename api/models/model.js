'use strict';
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


let StatuSchema = new Schema(
    {
        name : {
            type : String,
            required : ' To name the Statu '
        },
        
        Created_date : {
            type: Number,
            default: new Date().getTime()
        },
        
        discribe : {
            type : String,
            required : ' To Discribe the Statu '
        },

        state: {
            type: [{
              type: String,
              enum: ['pending', 'ongoing', 'completed']
            }],
            default: ['pending']
          },

        Tyler_gif : {
            type: String,
            default: "https://media1.tenor.com/images/215fea8e1653864492814d75bc987cc0/tenor.gif?itemid=19750154"
        }



    }
);

module.exports = mongoose.model('statu' , StatuSchema);