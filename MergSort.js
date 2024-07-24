//merge sort

const mockArray = [1, 3, 7, 8, 2, 4, 5, 6]
//merge sort need helper function than wanna need in merge sort 
//in this function return sorted new array
function combineTwoArray(arr1, arr2) {
    let newArray = []
    let length = arr1.length + arr2.length
    let i = 0
    let j = 0
    for (let k = 0; k < length; k++) {
        if (arr1[i] < arr2[j]) {
            if (arr1[i]) {
                newArray.push(arr1[i])
                i++
            }
        } else {
            if (arr2[j]) {
                newArray.push(arr2[j])
                j++
            }
        }
        if (j === arr2.length && i < arr1.length) {
            newArray.push(arr1[i])
            i++
        }
        if (i === arr1.length && j < arr2.length) {
            newArray.push(arr2[j])
            j++
        }
    }
    return newArray
}

function findMiddle(arr){
    return Math.floor(arr.length/2)
}
//main function is 
function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }
    const mid = findMiddle(arr)
    
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    
    return combineTwoArray(mergeSort(left),mergeSort(right))
    
}
// function combineTwoArray(arr) {
//     if (arr.length === 1) {
//         return arr
//     }

//     let newArray = []

//     const mid = findMiddle(arr)
//     let i = 0
//     let j = mid

//     for (let k = 0; k < arr.length; k++) {
//         if (a[i] < a[j]) {
//             newArray.push(a[i])
//             i++
//         } else {
//             if (a[j]) {
//                 newArray.push(a[j])
//                 j++
//             }
//         }
//         if (j === arr.length && i < mid) {
//             newArray.push(a[i])
//             i++
//         }
//     }
//     return newArray
// }

const result = mergeSort(mockArray)
console.log(result);
