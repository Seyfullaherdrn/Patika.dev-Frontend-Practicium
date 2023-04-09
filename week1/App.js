import axios from 'axios';

async function getUserData(ID) {
  //User bilgisi ve post hazır Api'den çekildi.
    const User = await axios.get(`https://jsonplaceholder.typicode.com/users/${ID}`);
    const Post = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${ID}`);
    //Text adında bir veri oluşturuldu ve posts kısmına kullanıcının postları getirildi.
    const Text = User.data;
    Text.posts = Post.data;
    return userData;
  }
  
  //ID ile istenilen data çağrıldı
  const Text = await getUserData(1);
  
  //console.log yardımı ile terminale alınan veri yazıldı
  console.log(Text);
  