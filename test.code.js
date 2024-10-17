const jsc = require('jsverify');
const fs = require('fs');
eval(fs.readFileSync('code.js', 'utf-8'));  


const test = 
    jsc.forall("dict(dict(nat))", function(graph) {

    // choose a random source node
    var nodes = Object.keys(graph);
    if (nodes.length === 0) return true; // empty condition
    var source = jsc.random(0, nodes.length - 1);

    // test the algorithm 
    var result = dijkstra(graph, nodes[source]);
    var [ distances ] = result;

    // property check: the shortest distance is not greater than any others
    for (var node in distances) {

        if (distances[node] !== Infinity) {

            // test other paths
            for (var intermediateNode in graph) {
                if (node !== intermediateNode && distances[intermediateNode] !== Infinity && graph[intermediateNode][node]) {
                    var alternativePathDistance = distances[intermediateNode] + graph[intermediateNode][node];
                    if (alternativePathDistance < distances[node]) {
                        return false;  // the shorter path found, fail the test
                    }
                }
            }
        }
    }
    return true; 
});

jsc.assert(test, { tests: 1000 });
