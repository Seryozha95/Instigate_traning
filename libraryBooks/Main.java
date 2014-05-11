import books.*;
import java.io.IOException;
import java.util.Scanner;
public class Main {
    public Books a;
    public int nooc=6;
    public static void main(String[] args) throws java.io.IOException {
        Scanner scan = new Scanner(System.in);
        //My worker
        Workers firstWorker=new Workers("Aren", "Mailyan", "attendant", "AM00487514", 6); 
        
        //My books
        Books levTolstoy=new Books("Лев Толстой", "Война и мир", "http://www.100bestbooks.ru/read_book.php?item_id=2&page=1", 1865-1868, 365, 2);
        Books feodorDostoevskiy=new Books("Федор Достоевский", "Идиот", "http://www.100bestbooks.ru/read_book.php?item_id=22", 1868-1869, 50, 2);
        Books vinniPux=new Books("Алан Александр Милн", "Винни-Пух", "http://www.lib.ru/MILN/winnizah.txt", 1926, 40,2);
        
        //Information about reader
        System.out.print("Your name" + "   ");
        String n=scan.nextLine();
        System.out.print("\n" + "Your surname" + "   ");
        String sn=scan.nextLine();
        System.out.print("\n" + "Your passport serial number" + "   ");
        String psn=scan.nextLine();

        Reader reader=new Reader(n, sn, psn,6 );
        
        //Starting menu
        System.out.println("List of Books" + "\n");
        System.out.println("1." + " " + levTolstoy.author +"-"+ levTolstoy.title);
        System.out.println("2."+ " " + feodorDostoevskiy.author +"-"+ feodorDostoevskiy.title);
        System.out.println("3." + " " + vinniPux.author +"-"+ vinniPux.title + "\n");
        System.out.println("What book do you want to read" + "\n");
        System.out.println("For choosing the book write the book number...");
               
       while (true) {
           int selectedNumber = scan.nextInt();
           if (selectedNumber == 1) {
               Books a=levTolstoy; 
               firstWorker.setBook(a);
           }
           if (selectedNumber ==2) {
               Books a=feodorDostoevskiy;
              firstWorker.setBook(a);
           }

           if (selectedNumber == 3) { 
           Books a=vinniPux;
           firstWorker.setBook(a);
          }
          if (selectedNumber == 0) {
              break;
          }
          System.out.println("Do you wand another book?" + "\n" + "Press 0 for exit... ");
          firstWorker.sizeOfSalary(firstWorker.experince);

       }

    }
}
