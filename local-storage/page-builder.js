jasonDom("pageInfo.json", function buildPage(arr) {
    document.getElementById("heading").innerHTML = '<h1>' + arr.title + '</h1>';
    
    document.getElementById("footing").innerHTML = '<a href=' + arr.linkUrl + '>' 
                                                              + arr.linkTitle + '</a>';
});