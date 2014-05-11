package books;
import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;

public class Books {
    public String author;
    public String title;
    public String url;
    public int yearOfManufacture;
    public int numberOfPages;
    public int quantity;
    
    public Books(String a, String t, String u, int yom, int nop, int q) {
                author=a;
                title=t;
                url=u;
                yearOfManufacture=yom;
                numberOfPages=nop;
                quantity=q;
    }
/*    public int getbook() {
        quantity=quantity+1;
        return quantity;
    }
    public int setbook() {
        return quantity;
    }*/
    public void openUrl(String url) {
        Runtime runtime = Runtime.getRuntime();
        try {
            runtime.exec("xdg-open " + url);
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
}
