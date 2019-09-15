# Blog Notes: Quick Sort


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
<img src="" alt="drawing" width="700" height="500"/>

# Algorithm

Pseudocode

  ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp



# Readings and References

Watch
  * [Youtube.com Quick Sort](https://www.youtube.com/watch?v=Ymh_AurrMbA)

Read
  * []()
  
  * []()

Bookmark
  * [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
  * [Visualgo](https://visualgo.net/en/sorting)