package libraryBooks;
import  books.*;
public class English extends Books {
    public void  getbook() {
        quantity = quantity+1;
    }
    public int setbook() {
        quantity = quantity-1;
        return quantity;
    }
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
