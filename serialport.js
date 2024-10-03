'use strict'

const SerialPort = require('serialport')

// write async
SerialPort.prototype.writeAsync = function (data, encoding) {
    return new Promise((resolve, reject) => {
        try {
            this.write(data, encoding, (err) => {
                if (err)
                    resolve(err)
                else
                    resolve(null)
            })
        }
        catch (e) {
            reject(e)
        }
    })
}

// close async
SerialPort.prototype.closeAsync = function () {
    return new Promise((resolve, reject) => {
        try {
            this.close((err) => {
                if (err)
                    resolve(err)
                else
                    resolve(null)
            }, null)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = SerialPort


// 이런식으로 정의하고
const SerailPort = require('./SerialPort')