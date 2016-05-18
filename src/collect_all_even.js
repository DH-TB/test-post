function collect_same_elements(collection_a, object_b) {

    return buildSameElement(collection_a, object_b);
}

function buildSameElement(collection_a, object_b){
    var same = [];

    collection_a.forEach(function (coll_a) {
        same = findSameElement(same,coll_a,object_b);
    });

    return same;
}

function findSameElement(same,coll_a,object_b) {
    for (var i = 0; i < object_b.value.length; i++) {
        if (coll_a.key === object_b.value[i]) {
            same.push(coll_a.key);
        }
    }

    return same;
}

module.exports = collect_same_elements;
