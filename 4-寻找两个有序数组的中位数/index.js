/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
    let result
    let arr = []
    let tag1 = 0
    let tag2 = 0
    let maxSize = nums1.length + nums2.length
    for (let i = 0; i < maxSize; i++){

        if (tag2 === nums2.length && tag1 < nums1.length){
            arr.push(nums1[tag1])
            tag1 += 1
            continue
        }

        if (tag1 === nums1.length && tag2 < nums2.length){
            arr.push(nums2[tag2])
            tag2 += 1
            continue
        }

        if (nums1[tag1] < nums2[tag2]){
            arr.push(nums1[tag1])
            tag1 += 1
        }else {
            arr.push(nums2[tag2])
            tag2 += 1
        }
    }

    let centerIndex = Math.floor(maxSize/2)
    if (maxSize % 2 === 0){
        result = (arr[centerIndex-1] + arr[centerIndex])/2
    }else {
        result = arr[centerIndex]
    }

    return result
};