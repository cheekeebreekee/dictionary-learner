module.exports = function findRotationPoint(words) {
  var leftPage = 0,
      rightPage = words.length - 1;
    while (words[leftPage] > words[rightPage]) {
        var middlePage = Math.floor((leftPage + rightPage) / 2);
        if (words[rightPage] < words[middlePage]) {
            leftPage = middlePage + 1;
        } else {
            rightPage = middlePage;
        }
    }
    return leftPage;
}
