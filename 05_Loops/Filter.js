const arr = [
    {
        book_title: "book1",
        book_genre: "scr-fi",
        book_publish: 2020,
        book_edition: 2024
    },
       {
        book_title: "book2",
        book_genre: "h",
        book_publish: 2040,
        book_edition: 2044
    },   {
        book_title: "book3",
        book_genre: "c",
        book_publish: 2000,
        book_edition: 2002
    },   {
        book_title: "book4",
        book_genre: "h",
        book_publish: 1998,
        book_edition: 1994
    },
]

arr.filter((item)=>{
    if(item.book_edition<2000){
// console.log(item)
    } 
});
 
const arr1=arr.filter((item)=>{
if(item.book_publish>=1995 && item.book_genre=="h"){
    console.log(item)
}
})
// console.log(arr)