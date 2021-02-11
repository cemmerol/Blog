const initState=
{
    posts:[
        {id:'1', title:'Hüseyin Cem Erol', body:'Bilgisayar Mühendisliği 4.sınıf'},
        {id:'2', title:'React.js', body:'React kullanıcı arayüzü oluşturmaya yarReact bir JavaScript kütüphanesi olup web uygulamaları için hızlı ve interaktif kullanıcı arayüzleri oluşturmada kullanılır.çık kaynak kodlu, bileşen bazlı ve front-end bir kütüphane olan React, sadece uygulamanın görünüm katmanından sorumludur React, Jordan Walke adında Facebook’ta çalışan bir yazılım mühendisi tarafından geliştirilmiştir.'},
        {id:'3', title:'C#', body:'C# yani diğer adıyla C Sharp nedir? C#, Microsoft tarafından geliştirilen bir programlama dilidir. Programlama dilleri arasında en çok tercih edilen C ve C++ ile etkileşimli şekilde geliştirilen ve modern bir kodlama sahip olan C#, birçok platform destekleyen Java dili ile de oldukça fazla benzerlik gösteriyor. Bu benzerliklerden en önemlisi ise .NET Framework platformunda nesnesel bir dil olması.'},
        {id:'4', title:'HTML5', body:'HTML, web tasarımcılarına sayfalar ve uygulamalar için yapı profilleri, bağlantılar, blok alıntılar, paragraflar ve başlıklar oluşturmalarında yardımcıdır. Bu konuda basit kod yapıları olan etiketler ve nitelikler kullanılarak web sayfaları şekillendirilebilir. HTML için aslında bir web sitesinin iskeleti denilebilir. Yani HTML kodları olmadan web sitesi kodlanamaz.'}
        
    ]
}


const rootReducer=(state=initState,action)=>
{
if(action.type==='DELETE_POST')
{
    let newPosts=state.posts.filter(post =>
        {
            return post.id !==action.id
        });
        return{
            ...state,
            posts:newPosts
        }
}
return state;

}
export default rootReducer;