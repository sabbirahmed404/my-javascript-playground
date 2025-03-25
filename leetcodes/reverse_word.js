var reverseWords = function(s){
    const words = s.trim().split(' ');
    console.log(words)
    const revwords = words.reverse();
    
    str = revwords.join(' ');

    console.log(str);
    return str;
}

reverseWords('a good   example')
