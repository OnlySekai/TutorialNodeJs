const {readFileSync,wirteFileSync, writeFileSync}=require('fs');

first=readFileSync('./content/first.txt','utf-8');
second=readFileSync('./content/second.txt','utf-8');
console.log(first);
console.log(second);
writeFileSync('./content/result-sync.txt',
`Here is the result ${first}, ${second}`,
{flag:'a'});