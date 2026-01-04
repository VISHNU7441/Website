const coloringBooks = [
    {
        title: "Coloring Book 1",
        file: "coloring_book_1.pdf"
    },
    {
        title: "Coloring Book 2",
        file: "coloring_book_2.pdf"
    }
];

const coloringBookList = document.getElementById("coloring-book-list");

coloringBooks.forEach(book => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = book.file;
    link.textContent = "Download";
    link.setAttribute("download", "");

    listItem.textContent = book.title;
    listItem.appendChild(link);
    coloringBookList.appendChild(listItem);
});
