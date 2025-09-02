function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  // --------------------------------
  // Transposition means converting rows into columns.
  // In other words: matrix[i][j] ↔ matrix[j][i]
  // We only swap values above the diagonal (j > i) 
  // to avoid undoing our own swaps.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i]![j]!;
      matrix[i]![j]! = matrix[j]![i]!;
      matrix[j]![i]! = temp;
    }
  }

  // Step 2: Reverse each row
  // --------------------------------
  // After transposition, the matrix looks "flipped" along the diagonal.
  // Reversing each row shifts columns into their correct rotated positions.
  // This completes a 90° clockwise rotation in-place.
  for (let i = 0; i < n; i++) {
    matrix[i]?.reverse();
  }
}
