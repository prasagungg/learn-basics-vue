const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      autor: "agung",
      age: 45,
      x: 0,
      y: 0,
      books: [
        {
          title: "book - 1",
          author: "agung",
          img: "img/book-1.jpg",
          isFav: true,
        },
        {
          title: "book - 2",
          author: "agung",
          img: "img/book-2.jpg",
          isFav: false,
        },
        {
          title: "book - 3",
          author: "agung",
          img: "img/book-3.jpg",
          isFav: true,
        },
      ],
      url: "https://www.youtube.com",
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, data) {
      console.log(event);

      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    changeFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
