function dijkstra(graph, sourceNode) {
    var distances = [];
    var previousNodes = [];
    var visited = new Set();

    // initialize all distances to infinity 
    //and previous node to null
    for (var node in graph) {
        distances[node] = Infinity;
        previousNodes[node] = null;
    }
    distances[sourceNode] = 0;//initilize the source to be 0

    function findLoVertex() {
        var minDistance = Infinity;
        var minVertex = null;
        for (var vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < minDistance) {
                minDistance = distances[vertex];
                minVertex = vertex;
            }
        }
        return minVertex;
    }

    var vertex;
    while ((vertex = findLoVertex()) !== null) {
        var currentDistance = distances[vertex];//select unmarked vertx with lowest dist
        var neighbors = graph[vertex];//adjacency list of the current vertex
        visited.add(vertex);//mark as visited

        for (var neighbor in neighbors) {
            var weight = neighbors[neighbor];
            var totalDistance = currentDistance + weight;
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                previousNodes[neighbor] = vertex;
            }
        }        
    }
    return [];
}
