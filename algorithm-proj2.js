function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // The element to be inserted
        let key = arr[i];

        // Initialize the position to insert the element
        let j = i - 1;

        // Shift elements of the sorted segment to the right to make space
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
const array = [8, 5, 2, 9, 5, 6, 3];
console.log("Original Array:", array);

const sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
