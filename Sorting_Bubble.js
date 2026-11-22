function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ES2015 version
function bubbleSortES2015(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                // SWAP         
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

// Optimised with noSwaps
function bubbleSortNoSwaps(arr) {
    let noSwaps;

    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                // SWAP         
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break
    }

    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))