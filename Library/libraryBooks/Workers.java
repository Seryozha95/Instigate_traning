//package libraryBooks;
import person.*;
import books.*;
public class Workers extends Person {
    public String postion;
    public int experince;
    public Workers(String n, String s, String psn, String p, int e) {
        name=n;
        surname=s;
        passportSerialNumber=psn;
        postion=p;
        experince=e;
    }
    public void sizeOfSalary(int  experince) {
        int salary= experince*30;
    }
    public void getBook(Books book ){
        book.openUrl(book.url);
    }
} 

