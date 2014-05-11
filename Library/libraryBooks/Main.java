//import libraryBooks.*;
import books.*;
public class Main {
    public static void main(String[] args) {
  Workers firstWorker=new Workers("Aren", "Mailyan", "worker", "df", 6); 
 Books levTolstoy=new Books("Лев Толстой", "Война и мир", "http://www.100bestbooks.ru/read_book.php?item_id=2&page=1", 1865-1868, 365, 2);
   
    firstWorker.getBook(levTolstoy);
    }
}
