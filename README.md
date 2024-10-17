# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

1. initilizing the distance to infinity and the source node to 0 results the complexity to be $O(V)+O(1)$
3. in the while loop, it iterates as long as there is an unvisited vertex, so the time complexity is $O(V)$. Call the findLovertx to find the lowest distance vertex, which results the complexity $O(V)$, becuase it look through all the vertices that haven't been visited, which could be up to V; set current dist cost $O(1)$; access the adjacency list cost $O(1)$; Mark the vertex as visisted cost $O(1)$; the for loop check for each neighbor of the current vertx to see if a shorter path is found through the current vertex, which compares to the previously shortest path, the time complexity is $O(E)$. 

Combine them together, the overall time complexity is $O(V+V^2+E)\in\Theta(V^2+E)$

“I certify that I have listed all sources used to complete this exercise,including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” --Doris Yan