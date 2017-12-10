/* 
 * @Title: $undefined 
 * @Description: Todo 
 * @Author: weijq@cychina.cn (韦继强) 
 * @Date: 2017-12-06 18:53:56 
 * @Last Modified by: weijq@cychina.cn (韦继强) 
 * @Last Modified time: 2017-12-06 18:53:56 
 * @Version:V1.0 
 * Copyright: Copyright (c) 2017' 
 */


export const pubFunc = {
    /**
     *
     * @param {any} arr 
     * @returns 
     * 数组深拷贝
     */
    arrayClone: (arr) => {

        if (!(Object.prototype.toString.call(arr) == '[object Array]')) {
            return arr;
        }
        let copy = [];
        for (let i = 0; i < arr.length; i++)
            if (typeof arr[i] !== 'object') {
                copy.push(arr[i]);
            } else {
                copy.push(pubFunc.arrayClone(arr[i]));
            }
        return copy;
    },
    /**
     * 
     * //对象深拷贝
     * @param {any} obj 
     * @returns 
     */
    objectClone: (obj) => {
        // Handle the 3 simple types, and null or undefined or function
        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (obj instanceof Date) {
            let copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        // Handle Array or Object
        if (obj instanceof Array | obj instanceof Object) {
            let copy = (obj instanceof Array) ? [] : {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr))
                    copy[attr] = pubFunc.objectClone(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to clone obj! Its type isn't supported.");
    }
}