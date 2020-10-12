import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText it wont cut off characters because length < 100',()=>{
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText will cut off characters past 100 and add 3 periods',()=>{
    const short = shortenText(longText);
    expect(short).not.toHaveLength(longText.length);
    // console.log(short);
    expect(short.slice(-3)).toBe('...');
});

test('wordCount should cound the words in a string',()=>{
    expect(wordCount(posts)).toBe(233);
});

test('attachUsername should attach a users name to a post', ()=>{
    const postArr = attachUserName(users,posts);
    expect(postArr[0]).toHaveProperty('displayName');
});

test('attachUsername sjould remove post with no user',()=>{
    expect(attachUserName(users,posts)).not.toContainEqual(posts[5]);
})