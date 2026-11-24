// Requirement 1: Let variable 1
let count = 0;
// Requirement 1: Let variable 2
let total = 0;
// Requirement 1: Let variable 3
let limit = 5;

// Requirement 3: Loop 1
for (let i = 0; i < limit; i++) {
  // Requirement 2: Conditional 1
  if (i % 2 === 0) {
    count++;
  // Requirement 2: Conditional 2
  } else if (i === 3) {
    total += 10;
  }
}

// Requirement 3: Loop 2
while (count > 0) {
  // Requirement 2: Conditional 3
  if (total > 0) {
    total -= 5;
  }
  count--;
}

console.log(count, total, limit);