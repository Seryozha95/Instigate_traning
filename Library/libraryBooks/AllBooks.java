import books.*;
package libraryBooks;
public class AllBooks {
  public static void main(String[] args) {
      Books levTolstoy=new Books("Лев Толстой", "Война и мир", "http://www.100bestbooks.ru/read_book.php?item_id=2&page=1", 1865-1868, 365, 2);
      Books feodorDostoevskiy=new Books("Федор Достоевский", "Идиот", "http://www.100bestbooks.ru/read_book.php?item_id=22", 1868-1869, 50, 2);
      Books vinniPux=new Books("Алан Александр Милн", "Винни-Пух", "http://www.lib.ru/MILN/winnizah.txt", 1926, 40,2);  
   feodorDostoevskiy.openUrl(feodorDostoevskiy.url);
  }
}
