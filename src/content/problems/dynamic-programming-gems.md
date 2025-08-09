---
title: "Dynamic Programming: Hidden Gems from Recent Contests"
description: "Elegant dynamic programming problems that showcase beautiful techniques and insights."
pubDate: "Jan 25 2024"
image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&auto=format&fit=crop&q=60"
authorImage: "/avatar/avatar1.png"
authorName: "Neeldhara"
---

# Dynamic Programming: Hidden Gems from Recent Contests

These problems demonstrate the art of dynamic programming beyond standard patterns.

## Problem 1: The Subsequence Symphony

Given a string, find the number of subsequences that form palindromes of prime length.

### Solution Insight

The key is to maintain DP states for both position and palindrome center simultaneously. This reduces the state space from O(n³) to O(n²).

## Problem 2: Graph Coloring with Constraints

Color a graph such that no two adjacent vertices share a color, and the total number of color changes along any path is minimized.

### The DP Formulation

DP[node][color][changes] gives us the minimum cost. The trick is recognizing that we only need to track changes modulo 2.

## Practice Makes Perfect

These problems teach us that DP is as much about problem modeling as it is about computation.
