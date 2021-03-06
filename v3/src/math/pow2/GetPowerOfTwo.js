/**
 * Returns the nearest power of 2 to the given `value`.
 *
 * @function Phaser.Math.Pow2.GetPowerOfTwo
 * @since 3.0.0
 *
 * @param {number} value - [description]
 *
 * @return {integer} [description]
 */
var GetPowerOfTwo = function (value)
{
    //  Math.log(2)
    var index = Math.log(value) / 0.6931471805599453;

    return (1 << Math.ceil(index));
};

module.exports = GetPowerOfTwo;
