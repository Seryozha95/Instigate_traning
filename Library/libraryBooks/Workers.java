import person.*;
import books.*;
public class Workers extends Person {
    private String postion;
    public int experince;
    public Workers(String n, String s, String psn, String p, int e) {
        name=n;
        surname=s;
        passportSerialNumber=psn;
        postion=p;
        experince=e;
    }
    public int sizeOfSalary(int experince) {
        int salary= experince*30;
        return salary;
    }
    public void setBook(Books book ){
        if (book.quantity == 0) {
            System.out.println("Sorry we don't have that book in this moment...:(");
        }
        else {
        book.openUrl(book.url);
        book.quantity=book.quantity-1;
        }
     }
    public void getBook(Books book) {
        if (book.quantity == 2) {
            System.out.println("It's not our book, you are mistake...");
        }
        else {
             book.quantity=book.quantity+1;
             System.out.println(" Thank you for returning the book.․․");
        }
    }

} 

