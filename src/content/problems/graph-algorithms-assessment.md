---
title: "Graph Algorithms: Assessment Highlights"
description: "Interesting graph problems from recent course assessments with detailed solutions."
pubDate: "Feb 28 2024"
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60"
authorImage: "/avatar/avatar1.png"
authorName: "Neeldhara"
---

# Graph Algorithms: Assessment Highlights

A collection of graph problems that test deep understanding rather than memorization.

## The Bridge Detection Variant

Find all edges whose removal increases the number of triangles in the graph.

### Solution Approach

Counter-intuitively, we need to count triangles that share exactly one edge with the candidate. The algorithm runs in O(m√m) time using careful enumeration.

## Shortest Path with Wildcards

Given a graph where some edge weights are variables, find assignments that minimize the longest shortest path.

### Key Insight

This reduces to a linear programming problem with interesting structure. The dual interpretation reveals connections to network flow.

## Teaching Through Problems

These problems help students see beyond standard algorithms to underlying principles.
