# Blog Notes: Merge Sort
Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, we have to merge them into a single sorted array. There is something known as the Two Finger Algorithm that helps us merge two sorted arrays together. Using this subroutine and calling the merge sort function on the array halves recursively will give us the final sorted array we are looking for.


* Merge Sort is useful for sorting linked lists.
* Merge Sort is a stable sort which means that the same element in an array maintain their original         positions with respect to each other.
* Overall time complexity of Merge sort is O(nLogn). It is more efficient as it is in worst case also the runtime is O(nlogn)
* The space complexity of Merge sort is O(n). This means that this algorithm takes a lot of space and may slower down operations for the last data sets.

# Learning Objectives
* What is merge sort
* What does it do
* Efficiency
* How it works
* What the code looks like



# Information Flow
*Main Point
  *Supporting Points

*Another main point
  *More details
  *Go here

# Diagram
<img src="./assets/merge-sort.png" alt="drawing" width="700" height="500"/>

# Algorithm

Pseudocode

  ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

It all revolves around the idea that it’s easier to sort two sorted arrays rather than one unsorted one. Once we have our two sorted arrays we start comparing their items one by one and adding the smaller item in our result list. Imagine that you’ve got two lists A and B. You compare A[0] to B[0]. Let’s say that A[0] is smaller — we add it to the result list and continue. Then we compare A[1] to B[0]. This time B[0] is the smaller one so we add it and continue comparing A[1] to B[1] and so on…

At the end of the sorting any left variables are concatenated at the end of our results list — since the A and B arrays are already sorted this will not cause reordering.

# Readings and References

Watch
  * [Youtube.com Merge Sort](https://www.youtube.com/watch?v=es2T6KY45cA)

Read
  * [Merge Sort Algorithm](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-merge-sort-algorithm/)
  
  * [Merge Sort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/)

Bookmark
  * [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
  * [Visualgo](https://visualgo.net/en/sorting)