import person.*;
import books.*;
public class Workers {
    public String postion;
    public int experince;
    

    public void sizeOfSalary(int  experince) {
        int salary= experince*30;
    }
    public void getBook(Books book){
        book.openUrl(book.url);
    }

} 

