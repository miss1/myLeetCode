/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const res = new Set(nums2.filter(item => set1.has(item)));
  return [...res];
};
